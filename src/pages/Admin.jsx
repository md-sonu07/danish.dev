import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { logout } from "../store/auth/authThunks";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminDashboard from "../components/admin/dashboard/AdminDashboard";
import ProjectIndex from "../components/admin/project/ProjectIndex";
import HomeIndex from "../components/admin/home/HomeIndex";
import ResumeDetails from "../components/admin/resume/ResumeDetails";
import MessageIndex from "../components/admin/message/MessageIndex";
import ProfileIndex from "../components/admin/profile/ProfileIndex";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-white/30 dark:bg-slate-900">
      <AdminSidebar onLogout={handleLogout} />

      <div className="flex-1 md:ml-0 p-4 md:p-6 pt-20 md:pt-6">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route
              path="/projects"
              element={<ProjectIndex />}
            />
            <Route path="/home" element={<HomeIndex />} />
            <Route path="/resume" element={<ResumeDetails />} />
            <Route path="/messages" element={<MessageIndex />} />
            <Route path="/profile" element={<ProfileIndex />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
