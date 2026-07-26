import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Projects from "../pages/Projects";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Resume from "../pages/Resume";


// Lazy load admin components for better performance
import { lazy, Suspense } from "react";

const AppRoutes = () => {

  const location = useLocation();
  const path = location.pathname;

  // Check if current path is admin route
  const isAdminRoute = path.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default AppRoutes;
