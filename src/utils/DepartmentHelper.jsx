import React from 'react';

// 1. Define the buttons component FIRST
const DepartmentButtons = ({ _id }) => {
  return (
    <div className="flex items-center space-x-4">
      <button 
        className="px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700"
        onClick={() => console.log("Edit ID:", _id)}
      >
        Edit
      </button>
      <button 
        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={() => console.log("Delete ID:", _id)}
      >
        Delete
      </button>
    </div>
  );
};

// 2. Export the columns array SECOND
export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "80px",
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
    sortable: true,
  },
  {
    name: "Action",
    // Use 'cell' instead of 'selector' for custom components
    cell: (row) => <DepartmentButtons _id={row._id} />, 
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];