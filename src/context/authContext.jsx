import axios from 'axios';
import React, { useContext, createContext, useState, useEffect } from 'react';


const UserContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const verifyUser=async()=>{
      try {
        const token = localStorage.getItem('token')
        if(token){
          
        const response = await axios.get('http://localhost:500/api/auth/verify',{
          headers:{
            "Authorization":`Bearer ${token}`
          }
        })

        if(response.data.success){
          setUser(response.data.user)
        }
      }else{
       setUser(null)
      }
      } catch (error) {
       if(error.response && !error.response.data.error){
           setUser(null)
       }
      }finally{
        setLoading(false)
      }
    }
    verifyUser()
  }, [])

  const login = (user) => {
    setUser(user);
    localStorage.setItem("token", user.token); // Store token in localStorage if needed
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // Remove token on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
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