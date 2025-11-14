"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Package, TrendingUp, CheckCircle } from "lucide-react";

export default function AboutPage (){
  const features = [
    { icon: Users, text: "Dedicated Account Managers" },
    { icon: Package, text: "End-to-End Solutions" },
    { icon: TrendingUp, text: "Market Intelligence" },
    { icon: CheckCircle, text: "Quality Assurance" },
  ];

  return (
    <div className="">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold mb-8 text-gray-800">About Saraf Agency Pvt. Ltd</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  With over 15 years of experience in international procurement, GlobalProcure 
                  has established itself as a trusted partner for businesses seeking quality 
                  products from global markets.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our extensive network spans across Asia, the Middle East, Europe, and America, 
                  giving you access to the world's best manufacturers and suppliers.
                </p>
                <p className="text-lg text-gray-700">
                  Our team of experts brings decades of combined experience in international 
                  trade, quality control, and supply chain management.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow"
                  >
                    <item.icon className="h-8 w-8 text-purple-600" />
                    <span className="text-lg font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


