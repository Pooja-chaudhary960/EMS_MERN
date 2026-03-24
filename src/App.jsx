// App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";  // Ensure correct path to AdminDashboard component
import Login from "./pages/Login.jsx";  // Ensure correct path to Login component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from "/" to "/admin-dashboard" */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Admin dashboard route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;