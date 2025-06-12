// pages/index.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="text-center p-12 pt-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-6xl font-extrabold text-yellow-300 mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Kaiju No. 8 Portfolio
      </motion.h1>
      <motion.p
        className="text-xl text-white mb-6 drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to the world of Kaiju! Explore my projects inspired by the epic battles and heroic moments of Kaiju No. 8.
      </motion.p>
      <motion.button
        className="bg-yellow-300 text-indigo-900 py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Explore Projects
      </motion.button>
    </motion.div>
  );
}