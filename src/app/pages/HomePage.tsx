"use client";

import { motion } from "framer-motion";
import { Globe, Shield, DollarSign, Truck, Award, Clock } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";
import StatCard from "@/components/ui/StatCard";
import LiveChat from "@/components/features/LiveChat";
import OrderTracking from "@/components/features/OrderTracking";
import Testimonials from "@/components/features/Testimonials";
import { FEATURES, STATS } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const icons = [Globe, Shield, DollarSign, Truck, Award, Clock];

  return (
    <div className="w-full">
   
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Saraf Agency Pvt. Ltd
          </motion.h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Sourcing Excellence from Asia, Middle East, Europe & America
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </motion.section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={icons[idx]}
                title={feature.title}
                desc={feature.desc}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <LiveChat />
      <OrderTracking />
      <Testimonials />
    </div>
  );
}
