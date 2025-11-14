"use client"


import { Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Saraf Agency Pvt. Ltd</span>
            </div>
            <p className="text-gray-400">Your trusted partner in global procurement.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map(link => (
                <button
                  key={link}
                  onClick={() => setCurrentPage(link.toLowerCase())}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="space-y-2 text-gray-400">
              <p>Product Sourcing</p>
              <p>Quality Control</p>
              <p>Logistics</p>
              <p>Market Research</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>info@globalprocure.com</p>
              <p>+1 (555) 123-4567</p>
              <p>24/7 Support Available</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Saraf Agency Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
