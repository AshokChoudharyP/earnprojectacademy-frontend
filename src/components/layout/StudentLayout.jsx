import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bell,
  BookOpen,
  Calendar,
  User,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

/* ✅ MENU CONFIG (OUTSIDE COMPONENT) */
const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Announcements",
    path: "/announcements",
    icon: Bell,
    badge: "NEW",
  },
  {
    name: "My Courses",
    path: "/my-courses",
    icon: BookOpen,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: Calendar,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

/* ✅ SIDEBAR COMPONENT */
const StudentSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-indigo-700 text-white min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">EarnProjectAcademy</h1>

      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all
                ${
                  active
                    ? "bg-indigo-900 shadow-inner"
                    : "hover:bg-indigo-600 hover:translate-x-1"
                }`}
            >
              <Icon size={18} />
              <span>{item.name}</span>

              {item.badge && (
                <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

/* ✅ MAIN LAYOUT */
const StudentLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <StudentSidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Student Dashboard</h1>

          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
            <span className="text-sm font-medium">Ashok Choudhary</span>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.25 }}
           >
          {children}
         </motion.div>
       </main>

      </div>
    </div>
  );
};

export default StudentLayout;