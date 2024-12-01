import Layout from "@/components/layout/Layout";
import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
 import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import AchievementSection from "@/components/sections/AchievementSection";
export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
      <AchievementSection/>
      <ServicesSection/>
       <ProjectSection/>
      <Testimonials/>
      <BlogSection/>
      <FaqSection/>
      <ContactSection/>
    </Layout>
  );
}
