import { motion } from "framer-motion";
import AnimatedSection from "../components/common/AnimatedSection";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-100">
            Have questions? We’re here to help you make the right decision.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <AnimatedSection>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                📧 Email
              </h3>
              <p className="text-gray-600">
                info@earnprojectacademy.com
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                📞 Phone
              </h3>
              <p className="text-gray-600">
                +91 74288 34165
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                📍 Location
              </h3>
              <p className="text-gray-600">
                India (Online Mentor-Led Program)
              </p>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* ================= CONTACT FORM ================= */}
      <AnimatedSection>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl">

            <h2 className="text-3xl font-bold text-center mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </section>
      </AnimatedSection>

      {/* ================= MAP PLACEHOLDER ================= */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Our Presence
          </h2>

          <div className="h-64 bg-white rounded-2xl shadow-md flex items-center justify-center text-gray-500">
            Google Map Integration (Optional)
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <a
          href="/freelance-income-accelerator"
          className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg"
        >
          Explore Program
        </a>
      </section>

    </div>
  );
};

export default Contact;