// pages/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10] text-center p-8 pt-24 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background energy lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full"
            style={{ top: `${15 + i * 20}%`, left: 0 }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative mb-8 animate-float"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-glow-pulse"></div>
        <div className="w-32 h-32 mx-auto bg-[#1e1e24] rounded-full border-2 border-cyan-400 flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#1e1e24]/50 via-transparent to-kaiju-green/30 opacity-70"
            animate={{
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-full w-6 bg-cyan-400/10"
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
        className="text-6xl font-extrabold mb-4 drop-shadow-lg relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[#B2BABB]">Nhlakanipho</span>
        <span className="text-cyan-400 relative">
          {" Masilela"}
          <motion.span
            className="absolute -inset-1 -z-10 rounded-lg blur-md bg-cyan-400/10"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </span>
      </motion.h1>

      <motion.div
        className="w-24 h-1 bg-kaiju-green mx-auto mb-6 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.div
          className="h-full w-full bg-cyan-400"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: 0.6 }}
        />
      </motion.div>

      <motion.p
        className="text-xl text-[#B2BABB] max-w-2xl mb-8 drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to my portfolio! Explore my projects and discover the creative solutions I&apos;ve developed.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/projects" className="relative px-8 py-3 bg-[#1e1e24] text-cyan-400 border border-cyan-400 rounded-md shadow-lg shadow-cyan-400/20 font-medium inline-flex items-center group">
            <motion.span
              className="absolute inset-0 rounded-md opacity-0 bg-cyan-400/10 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>Explore Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/gallery" className="relative px-8 py-3 bg-transparent text-kaiju-green border border-kaiju-green rounded-md shadow-lg shadow-kaiju-green/20 font-medium inline-flex items-center group">
            <motion.span
              className="absolute inset-0 rounded-md opacity-0 bg-kaiju-green/10 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span>View Gallery</span>
          </Link>
        </motion.div>
      </div>

      {/* Tech Stack Section - Better blending with background */}
      <motion.div
        className="w-full max-w-3xl mx-auto mt-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 via-[#191F3A]/70 to-cyan-400/10 rounded-lg blur-md"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative bg-gradient-to-br from-[#15142b]/80 via-[#191F3A]/90 to-[#15142b]/80 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 shadow-xl">
            <motion.h3
              className="text-cyan-400 text-xl font-bold mb-6 text-center relative inline-block"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="absolute -inset-1 bg-cyan-400/5 rounded-md blur"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Tech Stack
            </motion.h3>

            <div className="flex flex-wrap justify-center gap-5">
              {[
                'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
                'Node.js', 'Framer Motion', 'MongoDB', 'GraphQL'
              ].map((tech) => (
                <motion.div
                  key={tech}
                  className="group relative px-4 py-2 bg-gradient-to-br from-[#191F3A] to-[#15142b] rounded-md border border-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300"
                  whileHover={{ y: -3, x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400/40 group-hover:w-full transition-all duration-300 rounded-full"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-[#B2BABB] group-hover:text-cyan-400 transition-colors duration-300">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0E0E10] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </motion.div>
  );
}