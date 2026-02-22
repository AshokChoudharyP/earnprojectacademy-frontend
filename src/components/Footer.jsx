import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <h3 className="text-xl font-bold text-white">
              EarnProject<span className="text-indigo-400">Academy</span>
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Learn in-demand skills, build real freelancing careers, and
            create sustainable income streams with practical,
            mentor-led programs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <button href="#" className="hover:text-indigo-400 transition duration-300">
              🌐
            </button>
            <button href="#" className="hover:text-indigo-400 transition duration-300">
              📘
            </button>
            <button href="#" className="hover:text-indigo-400 transition duration-300">
              📸
            </button>
            <button href="#" className="hover:text-indigo-400 transition duration-300">
              💼
            </button>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Programs
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/courses" className="hover:text-white transition duration-300">
                Freelancing Basics
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition duration-300">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition duration-300">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white transition duration-300">
                AI & Automation
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition duration-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-white transition duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition duration-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Support
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/faq" className="hover:text-white transition duration-300">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-white transition duration-300">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-white transition duration-300">
                Help Center
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} EarnProjectAcademy. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built for freelancers • Powered by real skills
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;