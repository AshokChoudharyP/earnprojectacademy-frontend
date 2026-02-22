const VisionMission = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-slate-600">
              To empower skilled professionals and students with
              industry-aligned capabilities that enable long-term
              freelance and career growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To deliver structured, mentor-led programs focused on
              real execution, ethical practices, and sustainable
              income generation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-slate-600">
              Industry professionals with 15–20+ years of experience
              guiding learners with real-world insights and
              practical mentorship.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;