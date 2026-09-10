import { FactoryScene } from "@/components/3d/FactoryScene";
import { OverlayContent } from "@/components/3d/OverlayContent";

export const metadata = {
  title: "3D Digital Twin Prototype - Invictus Engineering",
  description: "A prototype of a scroll-linked 3D factory environment.",
};

export default function ThreeDDemoPage() {
  return (
    <main className="relative w-full min-h-screen">
      {/* 3D Canvas fixed in the background */}
      <FactoryScene />
      
      {/* HTML Content scrolling normally on top */}
      <OverlayContent />
    </main>
  );
}
