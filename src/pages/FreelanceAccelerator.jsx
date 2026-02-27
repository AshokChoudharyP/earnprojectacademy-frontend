import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";
import Countdown from "../components/course/Countdown";
import TestimonialSlider from "../components/course/TestimonialSlider";
import FAQ from "../components/course/FAQ";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const FreelanceAccelerator = () => {
const navigate = useNavigate();
const { user } = useAuth();

const handleEnrollClick = () => {
  if (!user) {
    navigate("/login");
  } else {
    navigate("/enroll");
  }
};

/* ✅ Parallax Setup */
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <motion.section
        style={{ y }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6"
      >
       
        <div className="max-w-6xl mx-auto text-center">

          <span className="inline-block bg-yellow-400 text-black text-xs px-3 py-1 rounded-full mb-6 font-semibold">
            Only 25 Seats Left
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Freelance Income Accelerator™
          </h1>

          <Countdown />

          <p className="text-lg md:text-xl mt-6 mb-8 max-w-3xl mx-auto">
            A Structured, Mentor-Led 6-Month Program to Build Sustainable Freelance Income.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
             <button
            onClick={handleEnrollClick}
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg"
          >
          Enroll Now
       </button>

            {user ? (
          <a
             href="/EarnProjectAcademy.pdf"
                      download
                   className="border border-white px-6 py-3 rounded-xl"
         >
             Download Brochure
          </a>
          ) : (
        <Link
    to="/login"
    className="border border-white px-6 py-3 rounded-xl"
  >
    Login to Download Brochure
  </Link>
)}
          </div>
        </div>
      </motion.section>

      {/* ================= STATISTICS SECTION ================= */}
      <AnimatedSection>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
              <p className="text-gray-600 mt-2">Learners Trained</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">98%</h3>
              <p className="text-gray-600 mt-2">Completion Rate</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">4.8★</h3>
              <p className="text-gray-600 mt-2">Student Rating</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">1:1</h3>
              <p className="text-gray-600 mt-2">Mentor Support</p>
            </div>
          </div>
        </section>
      </AnimatedSection>
     
 
      {/* ================= PROGRAM OVERVIEW ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">Program Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              A six-month professional training program designed to help
              skilled professionals and students enter freelancing with clarity,
              confidence, and industry-aligned standards.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="font-semibold mb-3 text-lg">Program Highlights</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ 6 Months Duration</li>
              <li>✔ 60+ Hours Live Classes</li>
              <li>✔ Weekend Sessions</li>
              <li>✔ 4 Career Assistance Sessions</li>
              <li>✔ Mentor Support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= MODULES ================= */}
      <AnimatedSection>
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Learning Modules
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Freelancing Foundations",
                "Skill Assessment & Market Alignment",
                "Professional Profile Development",
                "Proposal Writing & Client Communication",
                "First Freelance Project Execution",
                "Growth & Long-Term Strategy",
              ].map((module, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    Module {index + 1}
                  </h3>
                  <p className="text-gray-600">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialSlider />

      {/* ================= FEES ================= */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Program Fees</h2>

          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-4xl font-bold text-indigo-600 mb-2">
              ₹27,000
            </p>

            <p className="text-gray-600 mb-4">
              Application Fee: ₹4,999 (Non-refundable)
            </p>

            <p className="text-sm text-gray-500">
              Includes all live sessions, mentor guidance & support.
            </p>

            <p className="text-yellow-500 text-lg mt-4">
              ★★★★★ 4.8/5 Student Satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <FAQ />

      {/* ================= ADMISSION PROCESS ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Fill Registration Form",
              "Orientation & Briefing",
              "Fee Confirmation",
              "Program Access & Onboarding",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-indigo-600 font-bold text-xl mb-2">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STICKY APPLY BUTTON ================= */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-between items-center md:hidden z-50">
        <div>
          <p className="text-sm text-gray-500">Next Batch Starting Soon</p>
          <p className="font-bold text-indigo-600">Limited Seats Available</p>
        </div>

       <button
           onClick={handleEnrollClick}
           className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold"
        >
           Apply Now
          </button>
      </div>

    </div>
  );
};

export default FreelanceAccelerator;