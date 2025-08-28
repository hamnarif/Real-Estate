import { Navbar } from "@/components/layout/Navbar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SkewDivider from "@/components/layout/Divider/SkewDivider";
import AboutSection from "@/components/about/AboutSection";
import FeaturedSection from "@/components/listings/FeaturedSection";
import { getListings } from "@/services/listingService";

export default async function Home() {
  const { items } = await getListings({ limit: '4' });
  return (
    <div>
      <Navbar />
      <Header />
      <SkewDivider />
      <AboutSection />
      <FeaturedSection items={items} />
      <Footer />
    </div>
  );
}
