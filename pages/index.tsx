// pages/index.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '../src/utils/assetPath';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const textLines = [
    "Hi, I'm Nhlakanipho Masilela",
    "Aspiring Software Developer | Final year at WeThinkCode_",
    "Passionate about building robust API's and scalable systems.",
    "Skilled in Java, Spring Boot, Python, and Database management, with a focus on backend development.",
    "Eager to contribute to innovative projects and grow in a dynamic tech environment."
  ];

  useEffect(() => {
    if (currentLineIndex >= textLines.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentText = textLines[currentLineIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setTypedText('');
        }, 500); // Pause before next line
      }
    }, 25); // Typing speed - reduced from 35ms to 25ms for even faster typing

    return () => clearInterval(typingInterval);
  }, [currentLineIndex]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10] p-4 sm:p-8 pt-24 flex flex-col items-center justify-center overflow-hidden"
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

      {/* Main content container */}
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Main split-screen container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative z-10">

          {/* Left side - Text content */}
          <div className="flex-1 flex flex-col items-start justify-center lg:pr-8">
            <motion.div
              className="mb-8 drop-shadow-md leading-relaxed text-left w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Display completed lines */}
              {textLines.slice(0, currentLineIndex).map((line, index) => {
                // Only apply word-by-word color animation to first 2 lines
                if (isTypingComplete && index < 2) {
                  const words = line.split(' ');
                  return (
                    <motion.div
                      key={index}
                      className={`mb-2 ${
                        index === 0 
                          ? 'text-2xl sm:text-3xl lg:text-4xl font-semibold' 
                          : 'text-lg sm:text-xl lg:text-2xl'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ opacity: { duration: 0.3 } }}
                      whileHover={{
                        x: index === 0 ? 0 : 8,
                        scale: index === 0 ? 1.05 : 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {words.map((word, wordIndex) => (
                        <motion.span
                          key={wordIndex}
                          animate={{
                            color: index === 0
                              ? ["#B2BABB", "#00FFFF", "#3cc698", "#B2BABB"]
                              : ["#B2BABB", "#3cc698", "#00FFFF", "#B2BABB"]
                          }}
                          transition={{
                            duration: index === 0 ? 3 : 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: wordIndex * 0.2 + index
                          }}
                        >
                          {word}{wordIndex < words.length - 1 ? ' ' : ''}
                        </motion.span>
                      ))}
                    </motion.div>
                  );
                } else {
                  // Regular static display for lines 3, 4, 5
                  return (
                    <motion.div
                      key={index}
                      className={`mb-2 ${
                        index === 0 
                          ? 'text-2xl sm:text-3xl lg:text-4xl font-semibold' 
                          : index === 1
                          ? 'text-lg sm:text-xl lg:text-2xl'
                          : 'text-base sm:text-lg lg:text-xl'
                      } text-[#B2BABB]`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ opacity: { duration: 0.3 } }}
                      whileHover={isTypingComplete ? {
                        x: index === 0 ? 0 : 8,
                        scale: index === 0 ? 1.05 : 1.02,
                        transition: { duration: 0.3 }
                      } : {}}
                    >
                      {line}
                    </motion.div>
                  );
                }
              })}

              {/* Current typing line */}
              {currentLineIndex < textLines.length && (
                <motion.div
                  className={`mb-2 ${
                    currentLineIndex === 0 
                      ? 'text-2xl sm:text-3xl lg:text-4xl font-semibold' 
                      : currentLineIndex === 1
                      ? 'text-lg sm:text-xl lg:text-2xl'
                      : 'text-base sm:text-lg lg:text-xl'
                  } text-[#B2BABB]`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {typedText}
                  <motion.span
                    className="inline-block w-0.5 h-5 bg-cyan-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </motion.div>

            {/* Buttons - only show after typing is complete */}
            {isTypingComplete && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link href="/projects" className="relative px-6 py-3 bg-[#1e1e24] text-cyan-400 border border-cyan-400 rounded-md shadow-lg shadow-cyan-400/20 font-medium inline-flex items-center group w-full sm:w-auto justify-center overflow-hidden">
                    <motion.span
                      className="absolute inset-0 rounded-md opacity-0 bg-cyan-400/10 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="relative z-10"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Explore Projects
                    </motion.span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 relative z-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      whileHover={{ x: 3, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link href="/contact" className="relative px-6 py-3 bg-transparent text-[#C4FF00] border border-[#C4FF00] rounded-md shadow-lg shadow-[#C4FF00]/20 font-medium inline-flex items-center group w-full sm:w-auto justify-center overflow-hidden">
                    <motion.span
                      className="absolute inset-0 rounded-md opacity-0 bg-[#C4FF00]/10 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="relative z-10"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Let's Connect
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Right side - Animated circle with profile picture */}
          <div className="flex-1 flex flex-col items-center justify-center lg:pl-8">
            <motion.div
              className="relative will-change-transform"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl"></div>
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-[#1e1e24] rounded-full border-2 border-cyan-400 flex items-center justify-center relative overflow-hidden">
                {/* Profile Image */}
                <motion.img
                  src={getAssetPath('profile-picture.jpg')}
                  alt="Nhlakanipho Masilela"
                  className="w-full h-full object-cover rounded-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onError={(e) => {
                    console.log('Image failed to load, trying alternative paths');
                    const img = e.target as HTMLImageElement;
                    // Try different fallback paths
                    const fallbackPaths = [
                      '/My-portfolio/profile-picture.jpg',
                      './profile-picture.jpg',
                      '/profile-picture.jpg'
                    ];

                    let currentIndex = fallbackPaths.findIndex(path => img.src.includes(path.split('/').pop() || ''));
                    if (currentIndex < fallbackPaths.length - 1) {
                      img.src = fallbackPaths[currentIndex + 1];
                    } else {
                      // All fallbacks failed, hide the image
                      img.style.display = 'none';
                      console.error('All image fallback paths failed');
                    }
                  }}
                />

                {/* Overlay gradient animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1e1e24]/30 via-transparent to-[#3cc698]/20 opacity-40 rounded-full"
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Scanning light effect */}
                <motion.div
                  className="absolute h-full w-4 bg-cyan-400/20 rounded-full"
                  style={{ left: '-10%' }}
                  animate={{
                    left: ["-10%", "110%"],
                    opacity: [0.1, 0.6, 0.1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1
                  }}
                />

                {/* Subtle border glow animation */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                  animate={{
                    borderColor: ["rgba(0, 255, 255, 0.5)", "rgba(60, 198, 152, 0.5)", "rgba(0, 255, 255, 0.5)"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              className="w-32 h-1 bg-[#3cc698] mt-8 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="h-full w-full bg-cyan-400"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 0.6 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0E0E10] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </motion.div>
  );
}
