import AboutPage from "@/app/pages/AboutPage";


export const metadata = {
  title: "About GlobalProcure | Global Procurement Solutions",
  description: "Learn more about GlobalProcure, our 15+ years of international procurement experience, and our commitment to quality sourcing from Asia, Middle East, Europe & America.",
  keywords: ["about GlobalProcure", "global procurement", "international sourcing", "quality assurance"],
 
};
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function About() {
  return (
    <div className="flex items-center justify-center">
      <AboutPage />
    </div>
  );
}
