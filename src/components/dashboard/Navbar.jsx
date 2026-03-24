import React from 'react';
import { useAuth } from '../../context/authContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between h-16 bg-white px-6 shadow-md border-b border-gray-200">
     
      <div className="flex items-center space-x-2">
        <span className="text-gray-500 font-medium">Welcome,</span>
        <span className="text-teal-600 font-bold text-lg">
          {user ? user.name : "Guest"}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={logout}
          className="px-5 py-2 bg-rose-500 text-white text-sm font-semibold rounded-lg 
                     hover:bg-rose-600 transition-all duration-200 shadow-sm 
                     active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;