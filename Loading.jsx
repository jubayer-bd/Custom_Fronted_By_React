import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setData({
        name: "Jubayer",
        role: "Full Stack Developer",
      });
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          // --- LOADING SCREEN ---
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mb-3"></div>
            <p className="text-gray-600">Loading your data...</p>
          </motion.div>
        ) : (
          // --- MAIN CONTENT ---
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* ... Component Work ... */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingPage;
