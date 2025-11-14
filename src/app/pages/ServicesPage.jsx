"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Shield,
  Truck,
  TrendingUp,
  Package,
  Users,
} from "lucide-react";
import { SERVICES } from "../../utils/constants";

export default function ServicesPage() {
  const icons = [ShoppingCart, Shield, Truck, TrendingUp, Package, Users];

  return (
    <div className="">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">
            Our Services
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = icons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Icon className="h-16 w-16 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};


