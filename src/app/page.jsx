import Navbar from "@/components/layout/Navbar";
import AfaqEdge from "@/components/sections/AfaqEdge";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <Services/>
         <AfaqEdge/>
      </main>
    </>
  );
}
