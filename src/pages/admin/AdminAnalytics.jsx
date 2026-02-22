import { useEffect, useState } from "react";
import API from "../../api/axios";

const AdminAnalytics = () => {
  const [stats, setStats] = useState(null);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const statsRes = await API.get("/admin/analytics/overview");
      const paymentsRes = await API.get("/admin/analytics/payments");

      setStats(statsRes.data);
      setPayments(paymentsRes.data);
    };

    fetchAnalytics();
  }, []);

  if (!stats) return <p className="p-10">Loading analytics...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Analytics</h1>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Students" value={stats.totalStudents} />
        <StatCard title="Courses" value={stats.totalCourses} />
        <StatCard title="Paid Enrollments" value={stats.paidEnrollments} />
        <StatCard title="Revenue (₹)" value={stats.totalRevenue} />
      </div>

      {/* PAYMENTS */}
      <h2 className="text-xl font-semibold mb-4">Recent Payments</h2>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Student</th>
              <th className="p-3 text-left">Course</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p._id} className="border-t">
                <td className="p-3">{p.user.name}</td>
                <td className="p-3">{p.course.title}</td>
                <td className="p-3">₹{p.course.price}</td>
                <td className="p-3">
                  {new Date(p.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-xl p-6 shadow">
    <p className="text-gray-500 text-sm">{title}</p>
    <h3 className="text-2xl font-bold mt-2">{value}</h3>
  </div>
);

export default AdminAnalytics;