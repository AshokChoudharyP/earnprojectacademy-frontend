const WhyDifferent = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          What Makes EarnProjectAcademy Different
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-14">
          Most online courses focus on content delivery.
          We focus on professional readiness.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          
          {[
            {
              title: "Mentor-Led Learning",
              desc: "Live weekend sessions guided by professionals with real client experience."
            },
            {
              title: "Real Client Standards",
              desc: "Learn communication, expectations, and execution aligned with actual freelance work."
            },
            {
              title: "Execution-Focused",
              desc: "Guided assignments, practice, and feedback — not just theory."
            },
            {
              title: "Ethical Freelancing",
              desc: "No shortcuts, fake promises, or misleading strategies."
            },
            {
              title: "Structured Career Path",
              desc: "A six-month roadmap designed for long-term freelancing success."
            },
            {
              title: "Professional Mindset",
              desc: "Build systems, confidence, and consistency — not quick wins."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;