import React from 'react';
import { CheckCircle, Package, Truck } from 'lucide-react';

const OrderTracking = () => {
  const steps = [
    { icon: CheckCircle, label: 'Order Placed', status: 'complete' },
    { icon: Package, label: 'Processing', status: 'complete' },
    { icon: Truck, label: 'In Transit', status: 'active' },
    { icon: CheckCircle, label: 'Delivered', status: 'pending' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Track Your Orders in Real-Time
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <input
              type="text"
              placeholder="Enter your order ID (e.g., GP-2025-001234)"
              className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 mb-4 md:mb-0 md:mr-4"
            />
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
              Track Order
            </button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                  step.status === 'complete' ? 'bg-green-100 text-green-600' :
                  step.status === 'active' ? 'bg-purple-100 text-purple-600' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <p className="font-medium text-gray-700">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;