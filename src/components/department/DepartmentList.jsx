import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component'
import { columns } from '../../utils/DepartmentHelper';
import axios from 'axios';


const DepartmentList = () => {
  const [departments,setDepartment] = useState([]);
  const[depLoading, setDepLoading] = useState(false)
  useEffect(()=>{
    const fetchDepartments = async () =>{
      setDepLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/department',{
        headers:{
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      })
      if (response.data.success) {
     const data = response.data.departments.map((dep, index) => ({
    _id: dep._id,
    sno: index + 1, // Correctly increments for each row
    dep_name: dep.dep_name,
    action: <DepartmentButtons /> // This now works because we defined it above
  }));
  setDepartment(data);
}
      } catch (error) {
        if(error.response && error.response.data.error){
                alert(error.response.data.error)
        }
      }finally{
        setDepLoading(false)
      }
    };
    fetchDepartments();
  },[])
  return (
    <>{depLoading? <div>Loading....</div>:
    
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Department</h3>
      </div>
      <div className='flex justify-between items-center'>
        <input type='text' placeholder='Search By Dep Name' className='px-4 py-0.5 border'/>
        <Link to="/admin-dashboard/add-department" className='px-4 py-1 bg-teal-600 rounded text-white'>Add new Department</Link>
      </div>
      <div>
        <DataTable columns={columns} data= {departments}/>
     
      </div>
    </div>
    }</>
  )
}

export default DepartmentList;