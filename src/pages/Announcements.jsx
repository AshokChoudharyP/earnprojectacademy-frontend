import { useEffect, useState } from "react";
import API from "../api/axios";
import StudentLayout from "../components/layout/StudentLayout";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await API.get("/announcements/my");
      setAnnouncements(res.data);

      // mark all as read (silent)
      res.data.forEach((a) => {
        if (!a.readBy?.includes(res.data.userId)) {
          API.put(`/announcements/read/${a._id}`);
        }
      });
    } catch (err) {
      console.error("Failed to load announcements");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <StudentLayout>
        <p className="text-gray-500">Loading announcements...</p>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">📢 Announcements</h1>

        {announcements.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow-sm text-gray-500">
            No announcements yet.
          </div>
        ) : (
          <div className="space-y-4">
            {announcements.map((a) => {
              const isRead = a.readBy?.includes(a.createdBy?._id);

              return (
                <div
                  key={a._id}
                  className={`bg-white p-6 rounded-xl shadow-sm border transition ${
                    !isRead
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold">
                      {a.title}
                    </h2>

                    <span className="text-xs text-gray-400">
                      {new Date(a.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2">
                    {a.message}
                  </p>

                  {!isRead && (
                    <span className="inline-block mt-3 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </StudentLayout>
  );
};

export default Announcements;