
import Hero from '../components/sections/Hero';
import AnnouncementBar from '../components/layout/AnnouncementBar';
import Header from '../components/layout/Header';
import TrustStrip from '../components/sections/TrustStrip';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ServicesOverview from '../components/sections/ServicesOverview';
import PremiumMenuPreview from '../components/sections/PremiumMenuPreview';
import FoodTestingHighlight from '../components/sections/FoodTestingHighlight';
import BanquetHallSpotlight from '../components/sections/BanquetHallSpotlight';
import WeddingPlanningSection from '../components/sections/WeddingPlanningSection';
import RealEventGallery from '../components/sections/RealEventGallery';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import InquiryFormSection from '../components/sections/InquiryFormSection';
import MapLocationSection from '../components/sections/MapLocationSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTABanner from '../components/sections/FinalCTABanner';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <Hero />
      <TrustStrip />
      <WhyChooseUs />
      <ServicesOverview />
      <PremiumMenuPreview />
      <FoodTestingHighlight />
      <BanquetHallSpotlight />
      <WeddingPlanningSection />
      <RealEventGallery />
      <TestimonialsSection />
      <ProcessSection />
      <InquiryFormSection />
      <MapLocationSection />
      <FAQSection />
      <FinalCTABanner />
      <Footer />
    </main>
  );
}