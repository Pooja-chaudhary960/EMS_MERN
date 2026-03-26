import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
    const[department, setDepartment] = useState({
        dep_name:'',
        description:''

    })
    const navigate = useNavigate()
    const handleChange=(e)=>{
        const {name, value} =e.target;
        setDepartment({...department,[name]:value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/department/add',department,{
                headers:{
                    "Authorization":`Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.data.success)
            {
                navigate("/admin-dashboard/departments")
            }
        } catch (error) {
            if(error.response && error.response.data.error){
                alert(error.response.data.error)
            }
        }
    }
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add New Department</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="dep_name" className="block text-gray-700 font-medium mb-2">
              Department Name
            </label>
            <input 
              type="text" 
              id="dep_name" 
              onChange={handleChange}
              placeholder="Enter Department Name" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button 
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Add Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;