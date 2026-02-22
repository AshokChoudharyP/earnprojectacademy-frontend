// src/components/PlatformLogos.jsx
import upwork from "../assets/platforms/upwork.png";
import fiverr from "../assets/platforms/fiverr.png";
import freelancer from "../assets/platforms/freelancer.png";
import peopleperhour from "../assets/platforms/peopleperhour.png";
import linkedin from "../assets/platforms/linkedin.png";

const platforms = [
  { name: "Upwork", logo: upwork },
  { name: "Fiverr", logo: fiverr },
  { name: "Freelancer", logo: freelancer },
  { name: "PeoplePerHour", logo: peopleperhour },
  { name: "LinkedIn", logo: linkedin },
];

const PlatformLogos = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We Prepare You for Real <span className="text-indigo-600">Freelancing Platforms</span> 
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Learn how to get real clients on trusted global marketplaces
        </p>

        {/* Trust Badge */}
        <div className="inline-block mb-14 px-6 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
          Trusted by <span className="font-semibold">50,000+</span> freelancers
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group relative flex items-center justify-center"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="h-10 md:h-12 object-contain opacity-60 
                           transition-all duration-300 
                           group-hover:opacity-100 group-hover:scale-105"
              />

              {/* Tooltip */}
              <span
                className="absolute -bottom-7 text-xs text-white bg-gray-900 
                           px-2 py-1 rounded opacity-0 
                           group-hover:opacity-100 transition"
              >
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformLogos;