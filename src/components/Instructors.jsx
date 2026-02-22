// src/components/Instructors.jsx
import instructor1 from "../assets/instructors/instructor1.jpg";
import instructor2 from "../assets/instructors/instructor2.jpg";
import instructor3 from "../assets/instructors/instructor3.jpg";

const instructors = [
  {
    name: "Senior Freelancing Mentor",
    role: "Upwork & Client Acquisition Specialist",
    image: instructor1,
  },
  {
    name: "Industry Practitioner",
    role: "LinkedIn & B2B Outreach Expert",
    image: instructor2,
  },
  {
    name: "Program Lead",
    role: "Freelance Systems & Career Strategy",
    image: instructor3,
  },
];

const Instructors = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
            Our Experts
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Learn From Top Instructors <span className="text-indigo-600">& Industry Experts</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Get mentored by professionals actively working with global clients,
            not just content creators.
          </p>
        </div>

        {/* Instructor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-gray-900">
                {instructor.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {instructor.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Instructors;