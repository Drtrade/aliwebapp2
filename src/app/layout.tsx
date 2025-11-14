import "./globals.css";
import { ReactNode } from "react";
import ClientLayout from "@/app/ClientLayout";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Global Procurement Solutions",
  description:
    "We provide sourcing excellence from Asia, Middle East, Europe & America. Discover reliable procurement solutions",
  keywords: [
    "procurement",
    "global sourcing",
    "import-export",
    "business solutions",
  ],
};


export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <ClientLayout>
          <div>{children}</div>
        </ClientLayout>
      </body>
    </html>
  );
}
