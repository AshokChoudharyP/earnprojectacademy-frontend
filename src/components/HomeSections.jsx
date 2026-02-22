import React from "react";

const HomeSections = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">
            EarnProjectAcademy — Your Gateway to Real Freelancing Income
          </h1>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Choosing the right skill and platform is critical in today’s gig economy.
            EarnProjectAcademy empowers students and working professionals to build
            real income streams through freelancing and remote work.
      <br /><br />
            Our programs are designed around real client workflows, platform rules,
            and proven earning strategies — not theory. From profile creation to
            client acquisition, we prepare you for real-world freelancing success.
            </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-10">
            Why Choose EarnProjectAcademy?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Training based on real freelancing platform requirements",
              "Hands-on projects with client-style assignments",
              "Personal mentorship from active freelancers",
              "Profile optimization & proposal-writing mastery",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
            Our Career-Focused Freelancing Programs
          </h3>

          <p className="text-center text-gray-600 mb-12">
            Each program is designed to help you earn through freelancing, side income,
            or remote work using in-demand skills.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-3">Freelancing for Beginners</h4>
              <p className="text-gray-600 text-sm">
               Learn how freelancing works, platform rules, niche selection,
               and how to get your first client.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-3">Skill-Based Freelancing</h4>
              <p className="text-gray-600 text-sm">
                Monetize skills like Web Development, Digital Marketing,
                Data Tools, AI tools, and automation.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-3">Advanced Client Acquisition</h4>
              <p className="text-gray-600 text-sm">
               Proposal psychology, client negotiation, pricing strategies,
                and long-term client retention.
              </p>
            </div>
          </div>
        </div>
      </section>

             <section className="py-16 bg-gray-50">
           <div className="max-w-6xl mx-auto px-4">
         <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-10">
            Who Is Eligible for Our Programs?
         </h3>

         <div className="grid md:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-xl shadow-sm">
            Students who want to earn while studying
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm">
             Working professionals looking for side income
         </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
           Freelancers aiming to scale income consistently
         </div>
        </div>
      </div>
    </section>

             <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-10">
      Career Benefits of Learning with EarnProjectAcademy
    </h3>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Learn skills clients are actively paying for",
        "Build real portfolios, not fake certificates",
        "Platform-specific earning strategies",
        "Long-term freelancing & remote career guidance",
      ].map((item, i) => (
        <div
          key={i}
          className="bg-gray-50 p-6 rounded-xl shadow-sm"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>

 <section className="py-20 bg-indigo-600 text-white text-center">
  <h3 className="text-3xl font-bold mb-4">
    Begin Your Freelancing Journey Today
  </h3>

  <p className="max-w-3xl mx-auto mb-8 text-indigo-100">
    Whether you’re starting from zero or upgrading your skills,
    EarnProjectAcademy helps you turn skills into income —
    step by step, platform by platform.
  </p>

  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl">
    Request a Free Callback
  </button>
</section>
    </>
  );
};

export default HomeSections;