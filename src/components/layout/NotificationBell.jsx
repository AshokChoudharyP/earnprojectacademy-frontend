import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import API from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const NotificationBell = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await API.get("/announcements/my");
        setAnnouncements(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnnouncements();
  }, []);

  // 🔔 unread count logic (IMPORTANT)
  const unreadCount = announcements.filter(
    (a) => !a.readBy.includes(user?._id)
  ).length;

  const markAsRead = async (id) => {
    try {
      await API.post(`/announcements/${id}/read`);
      setAnnouncements((prev) =>
        prev.map((a) =>
          a._id === id
            ? { ...a, readBy: [...a.readBy, user._id] }
            : a
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      {/* 🔔 Bell Icon */}
      <button onClick={() => setOpen(!open)} className="relative">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer
                 hover:text-indigo-600 hover:scale-110 transition" />

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {/* 🔽 Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg z-50">
          <div className="px-4 py-3 border-b font-semibold">
            Notifications
          </div>

          {announcements.length === 0 ? (
            <p className="p-4 text-sm text-gray-500">
              No announcements
            </p>
          ) : (
            announcements.slice(0, 5).map((a) => (
              <Link
                key={a._id}
                to="/student/announcements"
                onClick={() => markAsRead(a._id)}
                className="block px-4 py-3 hover:bg-gray-50 text-sm"
              >
                <div className="flex justify-between">
                  <p className="font-medium">{a.title}</p>
                  {!a.readBy.includes(user._id) && (
                    <span className="text-xs text-indigo-600 font-semibold">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-gray-500 truncate">
                  {a.message}
                </p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;