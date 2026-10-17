import HeroSection from "@/components/home/HeroSection";
import PlatformStats from "@/components/home/PlatformStats";
import SyllabusSelector from "@/components/home/SyllabusSelector";
import CourseSection from "@/components/home/CourseSection";
import ResourceSection from "@/components/home/ResourceSection";
import PlatformSection from "@/components/home/PlatformSection";
import FounderSection from "@/components/home/FounderSection";
import HowItWorks from "@/components/home/HowItWorks";
import CommunitySection from "@/components/home/CommunitySection";
import LearnMoreSection from "@/components/home/LearnMoreSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PlatformStats />
      <SyllabusSelector />
      <CourseSection />
      <LearnMoreSection />
      <ResourceSection />
      <PlatformSection />
      <FounderSection />
      <HowItWorks />
      <CommunitySection />
    </main>
  );
}
