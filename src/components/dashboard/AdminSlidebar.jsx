import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaBuilding, 
  FaTachometerAlt, 
  FaUsers, 
  FaCogs, 
  FaMoneyBillWave, 
  FaCalendarAlt 
} from 'react-icons/fa';

const AdminSidebar = () => {
  // Common styles for NavLinks to keep code clean
  const navLinkClass = ({ isActive }) => 
    `flex items-center space-x-4 block py-2.5 px-4 rounded transition duration-200 ${
      isActive ? 'bg-teal-600 text-white shadow-lg' : 'hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 w-64 space-y-6 py-7 px-2 transform transition-transform duration-200 ease-in-out shadow-xl">
      {/* Branding / Logo Section */}
      <div className="text-white flex items-center space-x-2 px-4 mb-10">
        <span className="text-2xl font-extrabold tracking-wider uppercase italic">
          Employee <span className="text-teal-500">MS</span>
        </span>
      </div>

      {/* Navigation Section */}
      <nav className="space-y-2">
        <NavLink to="/admin-dashboard" end className={navLinkClass}>
          <FaTachometerAlt className="text-lg" />
          <span className="font-medium">Dashboard</span>
        </NavLink>

        <NavLink to="/admin-employees" className={navLinkClass}>
          <FaUsers className="text-lg" />
          <span className="font-medium">Employees</span>
        </NavLink>

        <NavLink to="/admin-departments" className={navLinkClass}>
          <FaBuilding className="text-lg" />
          <span className="font-medium">Departments</span>
        </NavLink>

        <NavLink to="/admin-leaves" className={navLinkClass}>
          <FaCalendarAlt className="text-lg" />
          <span className="font-medium">Leaves</span>
        </NavLink>

        <NavLink to="/admin-salary" className={navLinkClass}>
          <FaMoneyBillWave className="text-lg" />
          <span className="font-medium">Salary</span>
        </NavLink>

        <NavLink to="/admin-settings" className={navLinkClass}>
          <FaCogs className="text-lg" />
          <span className="font-medium">Settings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;