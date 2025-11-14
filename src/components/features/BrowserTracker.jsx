import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useBrowserData } from '../../hooks/useBrowserData';

const BrowserTracker = () => {
  const [showTracking, setShowTracking] = useState(false);
  const browserData = useBrowserData();

  const frequentSites = [
    { name: 'Google', url: 'google.com', visits: 45 },
    { name: 'Facebook', url: 'facebook.com', visits: 32 },
    { name: 'LinkedIn', url: 'linkedin.com', visits: 28 },
    { name: 'Amazon', url: 'amazon.com', visits: 18 },
    { name: 'YouTube', url: 'youtube.com', visits: 55 }
  ];

  return (
    <div className="mt-16 bg-purple-50 rounded-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">System Information Collected</h2>
        <button
          onClick={() => setShowTracking(!showTracking)}
          className="text-purple-600 font-medium hover:text-purple-700"
        >
          {showTracking ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      
      {showTracking && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4 text-purple-600">Device Information</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Platform:</span> {browserData.platform}</p>
                <p><span className="font-medium">Screen:</span> {browserData.screenResolution}</p>
                <p><span className="font-medium">Language:</span> {browserData.language}</p>
                <p><span className="font-medium">Timezone:</span> {browserData.timezone}</p>
                <p><span className="font-medium">Battery:</span> {browserData.batteryLevel}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4 text-purple-600">Frequent Sites</h3>
              <div className="space-y-3">
                {frequentSites.slice(0, 3).map((site, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">{site.name}</span>
                    </div>
                    <span className="text-xs text-purple-600">{site.visits} visits</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BrowserTracker;