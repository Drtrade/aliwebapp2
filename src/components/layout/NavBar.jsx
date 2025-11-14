"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const pages = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "services", path: "/services" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Globe className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">Saraf Agency Pvt. Ltd</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.name}
                onClick={() => router.push(page.path)}
                className={`capitalize text-lg font-medium transition-colors ${
                  pathname === page.path
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-4"
          >
            {pages.map((page) => (
              <button
                key={page.name}
                onClick={() => {
                  router.push(page.path);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 capitalize text-gray-700 hover:bg-purple-50"
              >
                {page.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
