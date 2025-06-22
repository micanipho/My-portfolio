// src/components/TechStackSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { getTechIcon } from '../utils/techIcons';

interface TechStackSectionProps {
  techStackNames: string[];
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ techStackNames }) => {
  return (
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
            {techStackNames.map((techName) => {
              const tech = getTechIcon(techName);
              if (!tech) return null;

              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={techName}
                  className="group relative p-4 bg-gradient-to-br from-[#191F3A] to-[#15142b] rounded-lg transition-all duration-300 w-16 h-16"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: techStackNames.indexOf(techName) * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    rotateY: 10,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  title={tech.name}
                  role="button"
                  tabIndex={0}
                  aria-label={`Technology: ${tech.name}`}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${tech.color}20 0%, transparent 70%)`
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: techStackNames.indexOf(techName) * 0.2
                    }}
                  />

                  {/* Animated bottom accent line */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400/40 group-hover:w-full transition-all duration-300 rounded-full"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scaleX: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: techStackNames.indexOf(techName) * 0.15
                    }}
                  />

                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.div
                      className="absolute top-1 right-1 w-1 h-1 bg-cyan-400/30 rounded-full"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: techStackNames.indexOf(techName) * 0.3
                      }}
                    />
                  </motion.div>

                  <div className="flex items-center justify-center relative z-10">
                    <motion.div
                      className="text-[#B2BABB] group-hover:text-cyan-400 transition-colors duration-300"
                      animate={{
                        rotateZ: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: techStackNames.indexOf(techName) * 0.25
                      }}
                      whileHover={{
                        color: tech.color,
                        scale: 1.3,
                        rotateZ: 0,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent
                        size={24}
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStackSection;
