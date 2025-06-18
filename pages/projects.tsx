import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Type definitions
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'STUDENT MANAGEMENT SYSTEM',
      description: 'A comprehensive student management system built with Java Spring Boot, featuring student registration, course management, and grade tracking with MySQL database.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      image: '/images/project-1.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/nhlakanipho',
      featured: true
    },
    {
      id: 2,
      title: 'FLASK WEB APPLICATION',
      description: 'A dynamic web application built with Python Flask, featuring user authentication, database integration, and responsive design.',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
      image: '/images/project-2.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/nhlakanipho',
      featured: true
    },
    {
      id: 3,
      title: 'REACT PORTFOLIO WEBSITE',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/project-3.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/nhlakanipho',
      featured: false
    },
    {
      id: 4,
      title: 'CODING CHALLENGE SOLUTIONS',
      description: 'A collection of coding challenge solutions and algorithms implemented in Python and Java, showcasing problem-solving skills.',
      technologies: ['Python', 'Java', 'Algorithms', 'Data Structures'],
      image: '/images/project-4.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/nhlakanipho',
      featured: false
    }
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-[#191F3A]/70 to-kaiju-green/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="relative bg-gradient-to-br from-[#15142b]/90 via-[#191F3A]/95 to-[#15142b]/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg overflow-hidden h-full">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-[#191F3A] to-[#15142b] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-kaiju-green/10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-6xl text-cyan-400/30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.div>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-kaiju-green/20 text-kaiju-green text-xs font-medium rounded-full border border-kaiju-green/30">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.title}</h3>
          <p className="text-[#B2BABB] text-sm leading-relaxed mb-4">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-[#191F3A]/50 text-cyan-400/80 text-xs rounded border border-cyan-400/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded text-sm font-medium text-center hover:bg-cyan-400/20 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-kaiju-green/10 text-kaiju-green border border-kaiju-green/30 rounded text-sm font-medium text-center hover:bg-kaiju-green/20 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background energy lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full"
            style={{ top: `${5 + i * 12}%`, left: 0 }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-[#B2BABB]">My</span>
              <span className="text-cyan-400 relative ml-4">
                Projects
                <motion.span
                  className="absolute -inset-1 -z-10 rounded-lg blur-md bg-cyan-400/10"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-kaiju-green mx-auto mb-8 rounded-full overflow-hidden"
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
              className="text-xl text-[#B2BABB] max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore my portfolio of web applications, showcasing modern technologies and innovative solutions.
              Each project represents a unique challenge and learning experience.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#B2BABB] mb-8">
              Interested in <span className="text-cyan-400">Working Together?</span>
            </h2>
            <p className="text-xl text-[#B2BABB] mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/contact" className="relative px-8 py-3 bg-[#1e1e24] text-cyan-400 border border-cyan-400 rounded-md shadow-lg shadow-cyan-400/20 font-medium inline-flex items-center group">
                  <motion.span
                    className="absolute inset-0 rounded-md opacity-0 bg-cyan-400/10 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span>Get In Touch</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/about" className="relative px-8 py-3 bg-transparent text-kaiju-green border border-kaiju-green rounded-md shadow-lg shadow-kaiju-green/20 font-medium inline-flex items-center group">
                  <motion.span
                    className="absolute inset-0 rounded-md opacity-0 bg-kaiju-green/10 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span>Learn More About Me</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0E0E10] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </motion.div>
  );
};

export default Projects;
