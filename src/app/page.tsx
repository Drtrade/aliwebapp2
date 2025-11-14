import HomePage from "@/app/pages/HomePage";

export const metadata = {
  title: "Global Procurement Solutions",
  description: "We provide sourcing excellence from Asia, Middle East, Europe & America. Discover reliable procurement solutions.",
  keywords: ["procurement", "global sourcing", "import-export", "business solutions"],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <HomePage />
    </div>
  );
}
