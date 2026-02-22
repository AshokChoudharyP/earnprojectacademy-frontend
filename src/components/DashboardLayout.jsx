import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Dashboard</h2>

        <nav className="flex flex-col gap-4 text-gray-700">
          <Link to="/dashboard" className="hover:text-indigo-600">
            Overview
          </Link>

          {user?.role === "student" && (
            <Link to="/enroll" className="hover:text-indigo-600">
              Enroll Course
            </Link>
          )}

          {user?.role === "admin" && (
            <Link to="/admin/dashboard" className="hover:text-indigo-600">
              Admin Panel
            </Link>
          )}

          <button
            onClick={logout}
            className="text-red-500 text-left hover:text-red-600"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">

        {/* Topbar */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            Welcome, {user?.name || "User"}
          </h1>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;