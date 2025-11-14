import ContactPage from "@/app/pages/ContactPage";

export const metadata = {
  title: "Contact Us | GlobalProcure",
  description:
    "Reach out to GlobalProcure for inquiries, partnership opportunities, or customer support. We're here to help with your global procurement needs.",
  keywords: [
    "contact GlobalProcure",
    "procurement support",
    "business inquiries",
    "global sourcing contact",
    "international trade help",
  ],

};
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Contact() {
  return (
    <div className="flex items-center justify-center">
      <ContactPage />
    </div>
  );
}
