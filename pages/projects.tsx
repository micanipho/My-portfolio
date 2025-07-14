import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { SiNextdotjs, SiNestjs, SiTypescript, SiTailwindcss, SiPostgresql, SiGraphql, SiSpring, SiOpenjdk, SiApache, SiFramer, SiAmazonaws, SiDocker, SiSwagger } from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "A Good Man's View",
      description: "A secure, transparent multi-vendor e-commerce platform for the South African market combining Next.js, NestJS, and blockchain technology with Proof of Stake consensus.",
      image: "/projects/agoodmansview.svg",
      tags: ["Next.js", "TypeScript", "NestJS", "GraphQL", "PostgreSQL", "Blockchain", "Tailwind CSS"],
      github: "https://github.com/A-Good-Man-s-View/agoodmansview_website",
      live: null, // If not yet deployed
      status: "In Development",
      highlights: [
        "Blockchain-powered with Proof of Stake consensus",
        "Hybrid GraphQL + RESTful API architecture",
        "Integrated digital wallets with Visa gateway",
        "South African market optimization (ZAR currency)",
        "Comprehensive vendor subscription system"
      ],
      icons: [
        <SiNextdotjs key="nextjs" className="text-white" />,
        <SiNestjs key="nestjs" className="text-[#E0234E]" />,
        <SiTypescript key="typescript" className="text-[#3178C6]" />,
        <SiTailwindcss key="tailwind" className="text-[#06B6D4]" />,
        <SiPostgresql key="postgresql" className="text-[#4169E1]" />,
        <SiGraphql key="graphql" className="text-[#E10098]" />
      ]
    },
    {
      id: 2,
      title: "FinTrack - Personal Finance API",
      description: "A comprehensive Personal Finance Management API built with Spring Boot and AWS, demonstrating enterprise-grade financial software development with secure transaction processing, regulatory compliance, and modern cloud deployment patterns.",
      image: "/projects/fintrack.svg",
      tags: ["Java", "Spring Boot", "AWS", "PostgreSQL", "Docker", "JWT", "REST API"],
      github: "https://github.com/micanipho/FinTrack",
      live: null,
      status: "In Development",
      highlights: [
        "JWT-based authentication with role-based access control",
        "Precise money handling with BigDecimal calculations",
        "Real-time budget tracking with spending alerts",
        "AWS integration (RDS, S3, SES) for cloud deployment",
        "Complete audit trail with Spring Data Envers",
        "Production-ready with comprehensive monitoring and logging",
        "85%+ test coverage with unit and integration tests"
      ],
      icons: [
        <SiOpenjdk key="java" className="text-[#ED8B00]" />,
        <SiSpring key="spring" className="text-[#6DB33F]" />,
        <SiAmazonaws key="aws" className="text-[#FF9900]" />,
        <SiPostgresql key="postgresql" className="text-[#4169E1]" />,
        <SiDocker key="docker" className="text-[#2496ED]" />,
        <SiSwagger key="swagger" className="text-[#85EA2D]" />
      ]
    },
    {
      id: 3,
      title: "Library Management System",
      description: "A comprehensive Spring Boot RESTful API for managing books, users, and borrowing operations in a library. Features complete CRUD operations, book availability tracking, and automated fine calculations.",
      image: "/projects/lms.svg",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Maven", "REST API", "JPA"],
      github: "https://github.com/micanipho/Library-management-system",
      live: null,
      status: "Completed",
      highlights: [
        "Complete RESTful API with 15+ endpoints for books and users",
        "Automated borrowing/returning system with due date tracking",
        "PostgreSQL integration with Spring Data JPA",
        "Fine calculation system for late book returns",
        "Comprehensive search functionality by title and author",
        "Maven-based project with clean architecture"
      ],
      icons: [
        <SiOpenjdk key="java" className="text-[#ED8B00]" />,
        <SiSpring key="spring" className="text-[#6DB33F]" />,
        <SiPostgresql key="postgresql" className="text-[#4169E1]" />,
        <SiApache key="maven" className="text-[#C71A36]" />
      ]
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10] p-8 pt-24 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Kaiju cosmic background effects - CYAN GLOW PARTICLES */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Glowing cosmic dust with cyan theme */}
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full blur-sm"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 5 === 0 ? '#3cc698' : '#00FFFF',
              boxShadow: i % 5 === 0 ? '0 0 10px 3px #3cc698' : '0 0 12px 4px #00FFFF'
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
        
        {/* Larger cyan orbs with intense glow */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-md"
            style={{ 
              left: `${10 + Math.random() * 80}%`, 
              top: `${10 + Math.random() * 80}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              background: 'rgba(0, 255, 255, 0.7)',
              boxShadow: '0 0 20px 8px rgba(0, 255, 255, 0.5)'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20]
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Kaiju energy particles with cyan glow */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
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
        
        {/* Subtle nebula effect */}
        <motion.div
          className="absolute rounded-full opacity-20 blur-3xl"
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
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#B2BABB]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Projects
        </motion.h1>
        
        <motion.div
          className="w-24 h-1 bg-[#3cc698] mx-auto mb-12 rounded-full overflow-hidden"
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

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#1E1E24]/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-[#3cc698]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3cc698]/20 to-[#191F3A]/50 z-10" />
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${project.image}`);
                        // Try multiple fallback strategies
                        const target = e.currentTarget;
                        if (target.src.includes('/projects/')) {
                          // If the original path failed, try without /projects/ prefix
                          target.src = project.image.replace('/projects/', '/');
                        } else {
                          // Final fallback to a placeholder
                          target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTkxRjNBIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjM2NjNjk4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD4KPC9zdmc+';
                        }
                        target.onerror = null; // Prevent infinite loop
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#191F3A] flex items-center justify-center">
                      <span className="text-[#3cc698]">Image Coming Soon</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed" ? "bg-green-500/20 text-green-300" : 
                      project.status === "In Development" ? "bg-yellow-500/20 text-yellow-300" :
                      "bg-blue-500/20 text-blue-300"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#B2BABB] mb-3 flex items-center">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.icons && project.icons.map((icon, i) => (
                      <motion.div
                        key={i}
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.1,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        whileHover={{
                          scale: 1.2,
                          y: -3,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Animated background glow */}
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                          }}
                          style={{
                            background: `radial-gradient(circle, currentColor20 0%, transparent 70%)`
                          }}
                        />

                        {/* Floating particle effect */}
                        <motion.div
                          className="absolute top-0 right-0 w-1 h-1 bg-cyan-400/40 rounded-full"
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                        />

                        <motion.div
                          className="text-xl relative z-10"
                          animate={{
                            rotateZ: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4
                          }}
                          whileHover={{
                            rotateZ: 0,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {icon}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-[#B2BABB]/80 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#3cc698] mb-2">KEY FEATURES</h4>
                    <ul className="list-disc list-inside text-[#B2BABB]/70 text-sm space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-[#3cc698]/10 text-[#3cc698] rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#1E1E24] text-[#B2BABB] rounded-md hover:bg-[#3cc698]/20 transition-colors duration-300"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    
                    {project.live ? (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#3cc698]/20 text-[#3cc698] rounded-md hover:bg-[#3cc698]/30 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 px-4 py-2 bg-[#1E1E24]/50 text-[#B2BABB]/50 rounded-md cursor-not-allowed">
                        <FaLock className="text-sm" /> Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}