import React from 'react';
import { Mail } from 'lucide-react';

const LiveChat = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Need Immediate Assistance?</h2>
            <p className="text-gray-600 text-lg">Our procurement experts are available 24/7</p>
          </div>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center space-x-2">
            <Mail className="h-6 w-6" />
            <span>Chat with Expert</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveChat;
