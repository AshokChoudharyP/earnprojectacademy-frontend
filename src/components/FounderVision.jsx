const FounderVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: IMAGE / VISUAL */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-500">
            Founder Image
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
            Founder’s Vision for Freelancing as a Professional Career
          </h2>

          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              Freelancing today is often promoted as fast money.
              In reality, it is a long-term professional path that demands
              discipline, communication, ethical practices, and continuous improvement.
            </p>

            <p>
              EarnProjectAcademy was built to bridge the gap between having a skill
              and being professionally ready to work with real clients.
            </p>

            <p>
              We do not promise guaranteed income or shortcuts.
              Instead, we focus on mentorship, structured learning, and real execution —
              helping learners build confidence, credibility, and sustainable income over time.
            </p>

            <p className="font-medium text-slate-900">
              — Founder, EarnProjectAcademy
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FounderVision;