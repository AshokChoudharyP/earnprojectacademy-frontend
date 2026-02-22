import { Link } from "react-router-dom";
import AnimatedSection from "../components/common/AnimatedSection";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About EarnProjectAcademy
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Building Professionals, Not Promises.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <AnimatedSection>
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            EarnProjectAcademy was founded with a simple belief —
            education should build real capability, not false hope.
            We focus on structured learning, professional standards,
            and long-term growth in freelancing and digital careers.
          </p>
        </div>
      </section>
       </AnimatedSection>

            <AnimatedSection>
  <section className="py-16 px-6 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
        <p className="text-gray-600 mt-2">Students Mentored</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">60+</h3>
        <p className="text-gray-600 mt-2">Hours Live Training</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">4.8★</h3>
        <p className="text-gray-600 mt-2">Average Rating</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">6 Months</h3>
        <p className="text-gray-600 mt-2">Structured Program</p>
      </div>

    </div>
  </section>
</AnimatedSection>

      {/* OUR PHILOSOPHY */}
        <AnimatedSection>
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Philosophy
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>✔ No guaranteed income claims</li>
              <li>✔ No shortcuts or overnight success</li>
              <li>✔ Structured, mentor-led learning</li>
              <li>✔ Real client-based execution training</li>
              <li>✔ Long-term sustainable career building</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">
              What Makes Us Different?
            </h3>
            <p className="text-gray-600">
              Unlike platforms that sell dreams, we build discipline,
              professional clarity, and ethical freelancing standards.
              Our programs are designed to align learners with real
              industry expectations.
            </p>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* MENTOR SECTION */}
      <AnimatedSection>
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Our Mentorship Approach
          </h2>

          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="/mentor.jpg"
              alt="Mentor"
              className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
            />
            <h3 className="text-xl font-semibold">
              Industry Mentors (15–20+ Years Experience)
            </h3>
            <p className="text-gray-600 mt-4">
              Our mentors bring real industry exposure across freelancing,
              consulting, and corporate projects. We guide learners with
              practical frameworks, decision-making clarity, and
              professional execution standards.
            </p>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* OUR COMMITMENT */}
      <AnimatedSection>
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Commitment
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe in transparent, ethical education.
            We do not promise guaranteed income or unrealistic results.
            We focus on building strong foundations so that learners
            can grow confidently in the freelancing ecosystem.
          </p>
        </div>
      </section>
      </AnimatedSection>

      {/* CTA SECTION */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Professional Journey Today
        </h2>
        <Link
          to="/freelance-income-accelerator"
          className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg"
        >
          Explore Our Program
        </Link>
      </section>

    </div>
  );
};

export default About;