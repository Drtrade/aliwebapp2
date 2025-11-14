"use client";

import { ReactNode, useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";



interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showModal, setShowModal] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <AuthModal
        showModal={showModal}
        setShowModal={setShowModal}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <main className="pt-16">{children}</main>

      <Footer />
    </div>
  );
}
