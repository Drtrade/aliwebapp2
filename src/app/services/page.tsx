import ServicesPage from "@/app/pages/ServicesPage";

// --- Metadata for SEO ---
export const metadata = {
  title: "Our Services | GlobalProcure",
  description:
    "Explore GlobalProcure's range of procurement services, including sourcing, logistics, quality assurance, and market intelligence. We simplify your global trade operations.",
  keywords: [
    "procurement services",
    "global sourcing",
    "logistics solutions",
    "supply chain",
    "market intelligence",
    "international trade services",
  ],
 
};
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Services() {
  return (
    <div className="flex items-center justify-center">
      <ServicesPage />
    </div>
  );
}
