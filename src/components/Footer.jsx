import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 pt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            EarnProject<span className="text-indigo-400">Academy</span>
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            EarnProjectAcademy is an ed-tech platform focused on practical
            learning, freelancing, and building real-world income skills
            through mentor-led programs.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Company
          </h4>

          <ul className="space-y-3 text-sm">

            <li>
              <Link to="/terms-and-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link to="/program-policy" className="hover:text-white">
                Program Policy
              </Link>
            </li>

            <li>
              <Link to="/referral-program" className="hover:text-white">
                Referral Policy
              </Link>
            </li>

            <li>
              <Link to="/refund-policy" className="hover:text-white">
                Refund Policy
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>

          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Courses
          </h4>

          <ul className="space-y-3 text-sm">

            <li>
              <Link to="/courses" className="hover:text-white">
                FreelancingAccelerate
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-white">
                Freelancing Mastery
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-white">
                Digital Marketing
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-white">
                AI Tools & Automation
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm">

            <li>📧 info@earnprojectacademy.com</li>

            <li>📞 +91 7428834165</li>

            <li>📍 India</li>

          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h4>

         <div className="flex gap-4 text-xl">

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/earn.projectacademy/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400"
  >
    📸
  </a>

  {/* YouTube */}
  <a 
    href="https://www.youtube.com/channel/UCZLgHOMzA3F-1mHqq7LhxKg"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400"
  >
    ▶️
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/company/earnprojectacademy-learning/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400"
  >
    💼
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/search/top?q=earnprojectacademy"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400"
  >
    📘
  </a>

  {/* X (Twitter) */}
  <a 
    href="https://x.com/earnprojec19364"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400"
  >
    ✖
  </a>

</div>
        </div>

      </div>

       {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 py-6">

        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">

          © {new Date().getFullYear()} EarnProjectAcademy. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;