import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const NotificationBell = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await API.get("/announcements/my");
      setAnnouncements(res.data);
    } catch (error) {
      console.error("Failed to fetch notifications");
    }
  };

  const unreadCount = announcements.filter(
    (a) => !a.readBy?.includes(a.createdBy?._id)
  ).length;

  const handleNotificationClick = async (id) => {
    try {
      await API.put(`/announcements/read/${id}`);
      setOpen(false);
      navigate("/announcements");
    } catch (error) {
      console.error("Failed to mark as read");
    }
  };

  return (
    <div className="relative">
      {/* 🔔 Bell Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <Bell className="w-6 h-6 text-gray-700" />

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* 🔽 Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg border z-50">
          <div className="px-4 py-3 border-b font-semibold">
            Notifications
          </div>

          {announcements.length === 0 ? (
            <p className="p-4 text-sm text-gray-500">
              No notifications
            </p>
          ) : (
            announcements.slice(0, 5).map((a) => {
              const isRead = a.readBy?.includes(a.createdBy?._id);

              return (
                <div
                  key={a._id}
                  onClick={() => handleNotificationClick(a._id)}
                  className={`px-4 py-3 cursor-pointer border-b hover:bg-gray-50 ${
                    !isRead ? "bg-indigo-50" : ""
                  }`}
                >
                  <p className="text-sm font-medium">
                    {a.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {a.message.slice(0, 60)}...
                  </p>
                </div>
              );
            })
          )}

          <div
            onClick={() => {
              setOpen(false);
              navigate("/announcements");
            }}
            className="px-4 py-3 text-center text-sm text-indigo-600 cursor-pointer hover:bg-gray-50"
          >
            View all announcements
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;