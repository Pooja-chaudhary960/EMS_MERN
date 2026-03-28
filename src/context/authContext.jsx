import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Store error messages

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:5000/api/auth/verify', {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });

          console.log(response.data);  // Log the response from the backend
          
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            setUser(null); // Reset user in case of failure
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error verifying user:', error);

        if (error.response) {
          // The error is from the server
          setError(`Server error: ${error.response.data.error || 'Unknown error'}`);
          setUser(null);
        } else if (error.request) {
          // Network error, no response from server
          setError('Network error: No response from server');
          setUser(null);
        } else {
          // Other errors
          setError(`Error: ${error.message}`);
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("token", user.token); // Store token in localStorage if needed
  };

  const logout = () => {
    setUser(null);
    setError(null); // Reset error message on logout
    localStorage.removeItem("token"); // Remove token on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };