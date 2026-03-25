import React from 'react';
import SummaryCard from './SummaryCard';
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglassHalf, FaTimesCircle, FaUsers } from 'react-icons/fa';

const AdminSummary = () => {
  return (
    <div className='p-6'>
        <h3 className='text-3xl font-bold text-gray-800 mb-6'>Dashboard Overview</h3>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <SummaryCard 
              icon={<FaUsers />} 
              text={"Total Employees"} 
              number={13} 
              color="bg-teal-600" 
              cardClass="transition-transform transform hover:scale-105 shadow-lg rounded-xl"
            />
            <SummaryCard 
              icon={<FaBuilding />} 
              text={"Total Departments"} 
              number={5} 
              color="bg-yellow-600" 
              cardClass="transition-transform transform hover:scale-105 shadow-lg rounded-xl"
            />
            <SummaryCard 
              icon={<FaBuilding />} 
              text={"Monthly Salary"} 
              number="Rs.50000" 
              color="bg-red-600" 
              cardClass="transition-transform transform hover:scale-105 shadow-lg rounded-xl"
            />
        </div>

        <div className='mt-12'>
            <h4 className='text-2xl font-semibold text-gray-700 mb-4'>Leave Details</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <SummaryCard 
                  icon={<FaFileAlt />} 
                  text={"Leave Applied"} 
                  number={5} 
                  color="bg-yellow-600" 
                  cardClass="transition-transform transform hover:scale-105 shadow-lg rounded-xl"
                />
                <SummaryCard 
                  icon={<FaCheckCircle />} 
                  text={"Leave Approved"} 
                  number={5} 
                  color="bg-green-600" 
                  cardClass="transition-transform transform hover:scale-105 shadow-lg rounded-xl"
                />
                <SummaryCard 
                  icon={<FaHourglassHalf />} 
                  text={"Leave Pending"} 
                  number={5} 
                  color="bg-blue-600" 
                  cardClass="transition-transform transform hover:scale-105 shadow-lg rounded-xl"
                />
                <SummaryCard 
                  icon={<FaTimesCircle />} 
                  text={"Leave Rejected"} 
                  number={5} 
                  color="bg-red-600" 
                  cardClass="transition-transform transform hover:scale-105 shadow-lg rounded-xl"
                />
            </div>
        </div>
    </div>
  );
}

export default AdminSummary;