import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Link
        to="/admin/course-builder"
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
      >
        Open Course Builder
      </Link>
    </div>
  );
};

export default AdminDashboard;