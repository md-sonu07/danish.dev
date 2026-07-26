import AdminDashboard from "../components/admin/dashboard/AdminDashboard";
import ProjectIndex from "../components/admin/project/ProjectIndex";
import HomeIndex from "../components/admin/home/HomeIndex";
import ResumeDetails from "../components/admin/resume/ResumeDetails";


const AdminRoutes = () => {
  return (
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route
              path="/projects"
              element={<ProjectIndex />}
            />
            <Route path="/home" element={<HomeIndex />} />
            <Route path="/resume" element={<ResumeDetails />} />
          </Routes>
  )
}

export default AdminRoutes
