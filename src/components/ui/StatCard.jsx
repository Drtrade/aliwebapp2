import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay }}
    >
      <div className="text-5xl font-bold mb-2">{value}</div>
      <div className="text-purple-200">{label}</div>
    </motion.div>
  );
};

export default StatCard;