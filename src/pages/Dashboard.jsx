import { useEffect, useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyEnrollments = async () => {
      try {
        const res = await API.get("/enrollments/my");
        setEnrollments(res.data);
      } catch (error) {
        toast.error("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchMyEnrollments();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

      {enrollments.length === 0 ? (
        <p>No active enrollments found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {enrollments.map((enroll) => (
            <div
              key={enroll._id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-semibold">
                {enroll.course.title}
              </h2>

              <p className="text-gray-600 mt-2">
                Payment Status:{" "}
                <span className="font-bold text-green-600">
                  {enroll.paymentStatus}
                </span>
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Status: {enroll.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;