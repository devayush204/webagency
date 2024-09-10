import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";
import Home from "@/components/demo-bc/pages/Home";

export default function Page() {
  return (
    <section>
      {/* <Navbar/>
      <Hero/>
      <ServicesSection/>
      <ReviewsCarousel/>
      <FAQ/>
      <Blog/>
      <Footer/> */}
      <Home/>
    </section>
  );
}
