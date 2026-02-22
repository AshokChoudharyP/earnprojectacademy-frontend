const SuccessStories = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Top Success Stories from EarnProjectAcademy
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Real learners. Real progress. Real professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* STORY 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-2">Ankit Sharma</h3>
            <p className="text-sm text-slate-500 mb-4">
              Software Engineer → Freelance Web Developer
            </p>
            <p className="text-slate-700 mb-4">
              Learned how to position his skills professionally, communicate with
              clients, and deliver projects with confidence.
            </p>
            <p className="font-medium text-slate-900">
              First Client Secured in 8 Weeks
            </p>
          </div>

          {/* STORY 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-2">Nisha Verma</h3>
            <p className="text-sm text-slate-500 mb-4">
              Marketing Student → Freelance Digital Marketer
            </p>
            <p className="text-slate-700 mb-4">
              Built a strong profile, learned proposal writing, and gained clarity
              on handling real client expectations.
            </p>
            <p className="font-medium text-slate-900">
              Repeat Clients Within 3 Months
            </p>
          </div>

          {/* STORY 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-2">Rahul Mehta</h3>
            <p className="text-sm text-slate-500 mb-4">
              Working Professional → Freelance Consultant
            </p>
            <p className="text-slate-700 mb-4">
              Transitioned into freelancing with a structured approach and learned
              how to manage long-term client relationships.
            </p>
            <p className="font-medium text-slate-900">
              Built Sustainable Side Income
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SuccessStories;