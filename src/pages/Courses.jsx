import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import API from "../api/axios";
import toast from "react-hot-toast";
import { FaLaptopCode, FaRupeeSign, FaUserGraduate } from "react-icons/fa";

const Courses = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/courses");
        setCourses(res.data);
      } catch {
        toast.error("Failed to load courses");
      }
    };
    fetchCourses();
  }, []);

  const handleEnrollClick = (courseId) => {
    if (!user) navigate("/login");
    else navigate("/enroll", { state: { courseId } });
  };

  return (
    <section className="bg-gray-50 py-20">
      <Helmet>
        <title>Freelancing & MERN Stack Courses | EarnProjectAcademy</title>
        <meta
          name="description"
          content="Explore career-focused freelancing and web development courses designed to help you build income-ready skills."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">
            Build Skills. <span className="text-indigo-600">Earn Income.</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Industry-focused courses designed for real freelancing success.
          </p>
        </div>

        {/* TRUST SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaLaptopCode className="text-indigo-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Project-Based Learning</h3>
            <p className="text-sm text-gray-600 mt-2">
              Learn by building real-world applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaRupeeSign className="text-indigo-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Income-Focused Curriculum</h3>
            <p className="text-sm text-gray-600 mt-2">
              Designed to help you start earning fast.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaUserGraduate className="text-indigo-600 text-3xl mx-auto mb-3" />
            <h3 className="font-semibold">Mentor Support</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get guidance from experienced professionals.
            </p>
          </div>
        </div>

        {/* COURSES GRID */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3">
                {course.description}
              </p>

              <p className="font-bold text-indigo-600 mt-4 text-lg">
                ₹ {course.price}
              </p>

              <button
                onClick={() => handleEnrollClick(course._id)}
                className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">
            Start Your Freelancing Journey Today 🚀
          </h2>
          <p className="text-gray-600 mt-3">
            Join EarnProjectAcademy and transform your skills into income.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Courses;
   