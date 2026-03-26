import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";  
import EmployeeDashboard from "./pages/EmployeeDashboard"; 
import Login from "./pages/Login"; 
import PrivateRoute from "./utils/PrivateRoute";
import RoleBaseRoute from "./utils/RoleBaseRoute";
import AdminSummary from "./components/dashboard/AdminSummary";
import DepartmentList from "./components/department/DepartmentList.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        
        {/* Nest Admin Dashboard routes */}
        <Route path="/admin-dashboard" element={
          <PrivateRoute>
            <RoleBaseRoute requireRole={["admin"]}>
              <AdminDashboard />
            </RoleBaseRoute>
          </PrivateRoute>
        }>
          {/* Nested routes inside AdminDashboard */}
          <Route index element={<AdminSummary />} />  {/* Default route */}
          <Route path="departments" element={<DepartmentList />} />
           <Route path="/admin-dashboard/add-department" element={<AddDepartment />} />
        </Route>

        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;