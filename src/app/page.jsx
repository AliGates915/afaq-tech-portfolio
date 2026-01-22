
import AfaqEdge from "@/components/sections/AfaqEdge";

import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import OperationalProcess from "@/components/sections/OperationalProcess";
import Services from "@/components/sections/Services";
import TestimonialsInfinite from "@/components/sections/TestimonialsInfinite";
import VisionToTransformation from "@/components/sections/VisionToTransformation";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Industries />
        <Services />
        <AfaqEdge />
        <VisionToTransformation />
        <OperationalProcess />
        <TestimonialsInfinite />

      </main>
    </>
  );
}
