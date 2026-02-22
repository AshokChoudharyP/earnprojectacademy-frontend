// src/components/PersonalizedLearning.jsx

const PersonalizedLearning = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#0B1220] to-[#0E1627]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">
          Personalized Learning Experiences
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 max-w-4xl mx-auto leading-tight mb-6">
          Build Real Freelance Income Through Practical, Mentor-Led Training
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-16">
          Learn by doing. Work on real freelancing platforms, real client scenarios,
          and real income systems — guided step-by-step by experienced mentors.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-[#111B30] rounded-2xl p-8 text-left">
            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              Hands-On Platform Training
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Learn Upwork, Fiverr, Freelancer, and LinkedIn freelancing through
              real profile setups, bidding practice, and live examples.
            </p>
          </div>

          <div className="bg-[#111B30] rounded-2xl p-8 text-left">
            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              Mentor-Guided Learning
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get structured guidance from mentors who have worked with real
              clients — not theory-only instructors.
            </p>
          </div>

          <div className="bg-[#111B30] rounded-2xl p-8 text-left">
            <h3 className="text-lg font-semibold text-gray-100 mb-3">
              Ethical Income Growth
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              No fake promises. No shortcuts. We focus on sustainable skills,
              repeat clients, and long-term freelancing careers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalizedLearning;