import React from 'react';
import {useAuth} from '../context/authContext';
import AdminSlidebar from '../components/dashboard/AdminSlidebar';
import Navbar from '../components/dashboard/Navbar';


const AdminDashboard = () => {
  const {user, loading} = useAuth()

  return (
    <div className='flex'>
      <AdminSlidebar/>
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <Navbar />
      </div>
    </div>
  );
};

export default AdminDashboard;