import React from "react";
import { Link } from "react-router-dom";
 

const EnrollCohortSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#cfe6ff] to-[#6fb0ff] py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0b1c39] flex items-center justify-center gap-3 mb-14">
          🚀 Enroll for Upcoming Cohorts
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Step 1 */}
          <div className="bg-[#eef5ff] rounded-2xl p-8 shadow-md text-left">
            <div className="w-8 h-8 rounded bg-blue-500 text-white font-bold flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Talk to Us</h3>
            <p className="text-gray-600">
              Begin your upskilling journey by scheduling a free callback from
              our learning advisors.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#fff6eb] rounded-2xl p-8 shadow-md text-left">
            <div className="w-8 h-8 rounded bg-blue-500 text-white font-bold flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Explore Possibilities
            </h3>
            <p className="text-gray-600">
              Discuss your career goals and explore the best-fit program for
              your background and aspirations.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#effff5] rounded-2xl p-8 shadow-md text-left">
            <div className="w-8 h-8 rounded bg-blue-500 text-white font-bold flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Reserve Your Spot</h3>
            <p className="text-gray-600">
              Lock in your seat and gear up to accelerate your career with
              industry-ready learning.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/Contact"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Request a Callback
        </Link>
      </div>
    </section>
  );
};

export default EnrollCohortSection;
