// pages/index.tsx
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Lazy load tech stack section
const TechStackSection = dynamic(() => import('../src/components/TechStackSection'), {
  loading: () => <div className="w-full max-w-3xl mx-auto mt-16 px-4 h-32 bg-[#191F3A]/20 rounded-lg animate-pulse" />,
  ssr: false
});

export default function Home() {
  // Technology stack names
  const techStackNames = [
    'Python', 'Java', 'React', 'Flask', 'Spring Boot',
    'MySQL', 'PostgreSQL', 'JavaScript', 'HTML/CSS'
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10] text-center p-4 sm:p-8 pt-24 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background cyan glow particles - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Cosmic dust particles with cyan glow - Reduced count */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`cosmic-dust-${i}`}
            className="absolute rounded-full blur-sm will-change-transform"
            style={{
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: '#00FFFF',
              boxShadow: '0 0 12px 4px rgba(0, 255, 255, 0.6)'
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
        
        {/* Kaiju energy particles - Reduced count */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`kaiju-particle-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: '#00FFFF',
              boxShadow: '0 0 15px 5px rgba(0, 255, 255, 0.7)'
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.9, 0],
              y: [0, -70, -140]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Subtle cyan nebula effect */}
        <motion.div
          className="absolute rounded-full opacity-20 blur-3xl will-change-transform"
          style={{
            top: '50%', 
            left: '50%', 
            width: '100%',
            height: '100%',
            x: '-50%', 
            y: '-50%',
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative mb-8 will-change-transform"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl"></div>
        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-[#1e1e24] rounded-full border-2 border-cyan-400 flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#1e1e24]/50 via-transparent to-[#3cc698]/30 opacity-70"
            animate={{
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-full w-4 bg-cyan-400/10"
            style={{ left: '-10%' }}
            animate={{
              left: ["0%", "100%"],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1
            }}
          />
        </div>
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg relative will-change-transform"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-[#B2BABB] block leading-tight">
          Nhlakanipho Masilela
        </span>
        <motion.span
          className="absolute -inset-2 -z-10 rounded-lg blur-md bg-cyan-400/10"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.h1>

      <motion.div
        className="w-20 h-1 bg-[#3cc698] mx-auto mb-6 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full bg-cyan-400"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: 0.6 }}
        />
      </motion.div>

      <motion.p
        className="text-lg sm:text-xl text-[#B2BABB] max-w-2xl mb-8 drop-shadow-md px-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        JR. BACKEND SOFTWARE ENGINEER | JAVA • SPRING BOOT • PYTHON |
        PASSIONATE ABOUT BUILDING ROBUST APIS, DATABASE OPTIMIZATION, AND SCALABLE SYSTEM ARCHITECTURE.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 mt-2 px-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link href="/projects" className="relative px-6 py-3 bg-[#1e1e24] text-cyan-400 border border-cyan-400 rounded-md shadow-lg shadow-cyan-400/20 font-medium inline-flex items-center group w-full sm:w-auto justify-center">
            <motion.span
              className="absolute inset-0 rounded-md opacity-0 bg-cyan-400/10 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">Explore Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link href="/documents" className="relative px-6 py-3 bg-transparent text-[#C4FF00] border border-[#C4FF00] rounded-md shadow-lg shadow-[#C4FF00]/20 font-medium inline-flex items-center group w-full sm:w-auto justify-center">
            <motion.span
              className="absolute inset-0 rounded-md opacity-0 bg-[#C4FF00]/10 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">View Documents</span>
          </Link>
        </motion.div>
      </div>

      {/* Tech Stack Section - Lazy loaded for better performance */}
      <Suspense fallback={<div className="w-full max-w-3xl mx-auto mt-16 px-4 h-32 bg-[#191F3A]/20 rounded-lg animate-pulse" />}>
        <TechStackSection techStackNames={techStackNames} />
      </Suspense>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0E0E10] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </motion.div>
  );
}