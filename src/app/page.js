import dynamic from "next/dynamic";
import AboutSection from "./components/AboutSection";
import GoogleAdsScript from "./components/GoogleAdsScript";

const LatestNews = dynamic(() => import("./components/LatestNews"));
const CompaniesTieUps = dynamic(() => import("./components/CompanyTieUps"));
const WantMoreDetails = dynamic(() => import("./components/WantMoreDetails"));
const PlacementSection = dynamic(() => import("./components/PlacementSection"));
const CoursesOffered = dynamic(() => import("./components/CoursesOffered"));
const NewsAndEvents = dynamic(() => import("./components/NewsAndEvents"));
const EmployeeOfTheMonth = dynamic(() => import("./components/EmployeeOfMonth"));
const Happenings = dynamic(() => import("./components/Happenings"));
const OurInstitutions = dynamic(() => import("./components/OurInstitutions"));
const LifeSeg = dynamic(() => import("./components/LifeSeg"));
const NoPaperPopupButton = dynamic(() => import("./components/NoPaperPopupButton"));

export const metadata = {
  title: "Saroj Educational Group | Best Engineering & Pharmacy College in Lucknow",
  description: "Top Engineering & Pharmacy College in Lucknow offering B.Tech, MBA, BBA, MCA, M.Pharma, B.Pharma & Diploma programs. AICTE approved, affiliated to AKTU. Admissions Open 2026-27.",
};

const Home = () => {
  return (
    <>
      <GoogleAdsScript />
      <NoPaperPopupButton />
      <AboutSection />
      <LatestNews />
      <CompaniesTieUps />
      <WantMoreDetails />
      <PlacementSection />
      <CoursesOffered />
      <NewsAndEvents />
      <EmployeeOfTheMonth />
      <Happenings />
      <OurInstitutions />
      <LifeSeg />
    </>
  );
};

export default Home;
