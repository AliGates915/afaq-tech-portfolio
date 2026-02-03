import DetailServicesPage from "@/components/serviceSection/DetailServicesPage";
import { notFound } from "next/navigation";
import CoreExpertiseSection from "@/components/serviceSection/CoreExpertiseSection";
import VisionToTransformation from "@/components/sections/VisionToTransformation";
import TestimonialsInfinite from "@/components/sections/TestimonialsInfinite";
const SERVICE_CONTENT = {
  "web-development": {
    titleBlack: "Websites",
    titleOrange: "Development",
    titleBlack2: "Process That",
    titleOrange2: "Convert",
    byText: "By",
    brand: "Afaq Technologies",
    desc:
      "Building fast, scalable, & modern websites that engage users, boost conversions, and grow your brand.",
    cta: "Innovate with Us",
  },

  "mobile-app-development": {
    titleBlack: "Mobile App",
    titleOrange: "Development",
    titleBlack2: "By",
    titleOrange2: "Afaq Technologies",
    byText: "",
    brand: "",
    desc:
      "From iOS to cross-platform, we build apps that engage users, scale fast, and perform seamlessly.",
    cta: "Innovate with Us",
  },

  "digital-marketing": {
    titleBlack: "Digital",
    titleOrange: "Marketing",
    titleBlack2: "Growth By",
    titleOrange2: "Afaq Technologies",
    byText: "",
    brand: "",
    desc:
      "Creating digital strategies that drive awareness, engagement, and ROI for your business.",
    cta: "Innovate with Us",
  },

  "desktop-applications": {
    titleBlack: "Desktop",
    titleOrange: "Applications",
    titleBlack2: "Built For",
    titleOrange2: "Performance",
    byText: "By",
    brand: "Afaq Technologies",
    desc:
      "Powerful Windows & macOS desktop apps with clean UI, strong security, and smooth performance for real business workflows.",
    cta: "Innovate with Us",
  },
  "wordpress-development": {
  titleBlack: "WordPress",
  titleOrange: "Development",
  titleBlack2: "That",
  titleOrange2: "Performs",
  byText: "By",
  brand: "Afaq Technologies",
  desc:
    "High-performance WordPress websites with custom themes, plugins, and SEO-ready architecture.",
  cta: "Innovate with Us",
},

"figma-design": {
  titleBlack: "Figma",
  titleOrange: "Design",
  titleBlack2: "To",
  titleOrange2: "Reality",
  byText: "By",
  brand: "Afaq Technologies",
  desc:
    "Pixel-perfect UI/UX design in Figma, optimized for usability, branding, and developer handoff.",
  cta: "Innovate with Us",
},

};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params; // ✅ FIX (params is Promise)

  const data = SERVICE_CONTENT[slug];
  if (!data) return notFound();

 return (
    <>
      <DetailServicesPage data={data} />
      <CoreExpertiseSection slug={slug} />
      <VisionToTransformation/>
      <TestimonialsInfinite/>
    </>
  );
}
