import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";
import NotificationBell from "./NotificationBell";

<div className="flex items-center gap-4">
  <NotificationBell />
</div>

const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await API.get("/announcements/my");
      setAnnouncements(res.data.slice(0, 5));
    };
    fetchNotifications();
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative">
        <Bell className="w-6 h-6 text-gray-600" />
        {announcements.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
            {announcements.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-lg z-50">
          <div className="p-3 border-b font-semibold">
            Notifications
          </div>

          {announcements.length === 0 ? (
            <p className="p-4 text-sm text-gray-500">No updates</p>
          ) : (
            announcements.map((a) => (
              <Link
                key={a._id}
                to="/student/announcements"
                className="block px-4 py-3 hover:bg-gray-50 text-sm"
              >
                <p className="font-medium">{a.title}</p>
                <p className="text-gray-500 truncate">{a.message}</p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;