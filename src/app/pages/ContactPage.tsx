"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import BrowserTracker from "@/components/features/BrowserTracker";

export default function ContactPage  () {

  
  return (
    <div className="w-full">
      <section className="py-20 bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
          <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@gSarafAgency.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">123 Business Plaza, Global Trade Center</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <ContactForm />
          </div>

          <BrowserTracker />
        </div>
      </section>
    </div>
  );
};
