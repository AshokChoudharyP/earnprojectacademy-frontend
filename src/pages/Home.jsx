import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";
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
    <Helmet>
  <title>EarnProjectAcademy | Learn Freelancing </title>
  <meta
    name="description"
    content="Learn freelancing, build high-income skills, and get your first client. Structured training, real projects & guidance. Start your freelance career today!"
  />
  <meta name="keywords" content="freelancing course India, Remote high earning job and project, freelancing international projects earn online India" />

  {/* Open Graph */}
  <meta property="og:title" content="EarnProjectAcademy" />
  <meta property="og:description" content="Learn freelancing according to your skill set" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://earnprojectacademy.com" />

  <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EarnProjectAcademy",
  "url": "https://earnprojectacademy.com",
  "logo": "https://earnprojectacademy.com/logo.png"
}
`}
</script>
</Helmet>
      {/* ✅ SEO Component */}
      <SEO
        title="EarnProjectAcademy | Learn Freelancing & Build Real Income"
        description="Learn high-income skills, optimize your freelancing profile, write client-winning proposals & build real projects with EarnProjectAcademy"
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