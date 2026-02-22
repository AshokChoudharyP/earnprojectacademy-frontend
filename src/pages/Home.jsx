import SEO from "../components/SEO";

import HeroSection from "../components/HeroSection";
import ProgramIntro from "../components/ProgramIntro";
import VisionMission from "../components/VisionMission";
import FounderVision from "../components/FounderVision";
import WhyDifferent from "../components/WhyDifferent";
import FutureReady from "../components/FutureReady";
import SuccessStories from "../components/SuccessStories";
import PlatformLogos from "../components/PlatformLogos";
import Testimonials from "../components/Testimonials";
import PersonalizedLearning from "../components/PersonalizedLearning";
import Instructors from "../components/Instructors";
import Certificate from "../components/Certificate";
import FAQ from "../components/FAQ";
import EnrollCohortSection from "../components/EnrollCohortSection";
import HomeSections from "../components/HomeSections";
import CoursesPreview from "../components/CoursesPreview";
import ReferralSection from "../components/ReferralSection";

const Home = () => {
  return (
    <>
      {/* ✅ SEO Component */}
      <SEO
        title="EarnProjectAcademy | Learn Freelancing & Build Real Income"
        description="EarnProjectAcademy helps you master freelancing, web development, digital marketing, and AI skills to build sustainable income streams."
      />

      <div className="bg-gray-50 text-gray-700">
        <HeroSection />
        <ProgramIntro />
        <VisionMission />
        <CoursesPreview />
        <FounderVision />
        <WhyDifferent />
        <FutureReady />
        <SuccessStories />
        <PlatformLogos />
        <Testimonials />
        <PersonalizedLearning />
        <Instructors />
        <Certificate />
        <FAQ />
        <EnrollCohortSection />
        <HomeSections />
        <ReferralSection />
      </div>
    </>
  );
};

export default Home;