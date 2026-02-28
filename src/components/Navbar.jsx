import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png"



const Navbar = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group">
           <nav className="...">
      <img
        src={logo}
        alt="EarnProjectAcademy"
        className="h-10 w-auto"
      />
    </nav>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 group-hover:text-indigo-600">
            EarnProjectAcademy
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-gray-700 hover:text-indigo-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/freelance-income-accelerator"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "text-gray-700 hover:text-indigo-600"
            }
          >
            Courses
          </NavLink>

          <NavLink to="/about" className="text-gray-700 hover:text-indigo-600">
            About
          </NavLink>

          <NavLink to="/contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </NavLink>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link
                to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="text-red-500 font-medium hover:text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700"
              >
                Enroll Now
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-2xl cursor-pointer text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4 font-medium transition-all duration-300">

          <Link to="/" onClick={closeMobileMenu} className="block">
            Home
          </Link>

          <Link
            to="/freelance-income-accelerator"
            onClick={closeMobileMenu}
            className="block"
          >
            Courses
          </Link>

          <Link to="/about" onClick={closeMobileMenu} className="block">
            About
          </Link>

          <Link to="/contact" onClick={closeMobileMenu} className="block">
            Contact
          </Link>

          <hr />

          {user ? (
            <>
              <Link
                to={user.role === "admin" ? "/admin/dashboard" : "/dashboard"}
                onClick={closeMobileMenu}
                className="block"
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  logout();
                  closeMobileMenu();
                }}
                className="block text-left text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="block"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMobileMenu}
                className="block bg-indigo-600 text-white px-4 py-2 rounded-xl text-center"
              >
                Enroll Now
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;