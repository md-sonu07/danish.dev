import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";

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
