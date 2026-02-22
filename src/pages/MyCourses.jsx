import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import StudentLayout from "../components/layout/StudentLayout";

const MyCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/enrollments/my");
        setCourses(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <StudentLayout>
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>

      {courses.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow">
  <h3 className="text-lg font-semibold mb-2">
    No courses yet
  </h3>
  <p className="text-gray-500 mb-4">
    Your enrolled courses will appear here
  </p>
  <button
    onClick={() => navigate("/courses")}
    className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
  >
    Explore Courses
  </button>
</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(({ course, progressPercentage }) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl shadow
                hover:shadow-2xl hover:scale-[1.02]
                transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="h-36 bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-700 font-semibold text-lg">
                  {course.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">
                  {course.duration || "6 Months • Live"}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{progressPercentage || 0}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${progressPercentage || 0}%` }}
                    />
                  </div>
                </div>
               <div className="flex items-center justify-between mt-4">
           <button
                 onClick={() => navigate(`/course/${course._id}`)}
              className="bg-indigo-600 hover:bg-indigo-700
                   hover:shadow-lg text-white px-4 py-2
                   rounded-lg flex items-center gap-2">
                ▶ Resume Learning
             </button>

           <span className="text-xs text-gray-500">
                 Last active: 2 days ago
            </span>
            </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </StudentLayout>
  );
};

export default MyCourses;