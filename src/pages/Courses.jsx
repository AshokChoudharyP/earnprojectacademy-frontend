import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";
import toast from "react-hot-toast";


const Courses = () => {
  // ✅ Hooks INSIDE component
  const navigate = useNavigate();
  const { user } = useAuth();


  const [courses, setCourses] = useState([]);

  // Fetch courses from backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/courses");
        setCourses(res.data);
      } catch (error) {
        toast.error("Failed to load courses");
      }
    };

    fetchCourses();
  }, []);

  // 🎯 Enroll Function
 const handleEnrollClick = (courseId) => {
  if (!user) {
    navigate("/login");
  } else {
    navigate("/enroll", { state: { courseId } });
  }
};

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-indigo-600">Courses</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Practical, job-focused programs designed for real earnings
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {course.description}
              </p>

              <p className="font-bold text-indigo-600 mt-3">
                ₹ {course.price}
              </p>

             <button
               onClick={() => handleEnrollClick(course._id)}
               className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl"
             >
               Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
   