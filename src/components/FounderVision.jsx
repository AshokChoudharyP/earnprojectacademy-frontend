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
            Founder’s Vision At EarnProjectAcademy is simple yet
             powerful — to help people turn their skills into real earning opportunities.
          </h2>

          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              In today’s world, millions of students and working professionals
              learn valuable skills, but many struggle to convert those 
              skills into actual income. Freelancing, remote work, and 
              project-based opportunities are growing rapidly, yet most people
              don’t know how to get their first project, how to approach clients, 
              or how to build a strong freelancing profile.
            </p>

            <p>
             EarnProjectAcademy was created to bridge this gap.
             Our mission is to guide individuals step-by-step — from
             identifying their skills to creating powerful freelancing
             profiles, writing winning proposals, and ultimately 
             securing their first paid project. We believe that anyone 
             with the right guidance and strategy can build a side income 
             or even a full-time freelancing career.
            </p>

            <p>
             We are not just another course platform. Our focus is practical 
             learning — real strategies, real platforms, and real project acquisition
              methods that work in today’s digital economy.
            Through EarnProjectAcademy, we aim to build a community of skilled 
            individuals who are confident, independent, and capable of creating 
            their own earning opportunities.
            The future of work is flexible, skill-driven, and global.
            
             Our vision is to make sure that every learner is ready to succeed in this new economy.  
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