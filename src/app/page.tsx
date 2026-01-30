import { Hero } from "@/components/sections/hero";
import { MissionStatement } from "@/components/sections/mission-statement";
import { Pillars } from "@/components/sections/pillars";
import { FourSteps } from "@/components/sections/four-steps";
import { NewsPreview } from "@/components/sections/news-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <Pillars />
      <FourSteps />
      <NewsPreview />
      <CtaBanner />
    </>
  );
}
