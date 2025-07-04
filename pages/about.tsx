
import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TechIconComponent } from '../src/utils/techIcons';

// Type definitions
interface SkillGroup {
  category: string;
  items: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const About: React.FC = () => {
  const skills: SkillGroup[] = [
    { category: 'Programming Languages', items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'] },
    { category: 'Frameworks & Libraries', items: ['React', 'Flask', 'Spring Boot', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Databases & Tools', items: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'VS Code'] }
  ];

  const experiences: Experience[] = [
    {
      title: 'Software Engineering Student',
      company: 'WeThinkCode_',
      period: '2023 - Present',
      description: 'Intensive software engineering program focusing on Python, Java, and modern development practices. Participating in coding challenges, hackathons, and collaborative projects.'
    },
    {
      title: 'Junior Software Developer',
      company: 'Self-Directed Learning',
      period: '2022 - Present',
      description: 'Building projects with Python, Java, React, Flask, and Spring Boot. Passionate about learning new technologies and solving complex problems through code.'
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background energy lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full"
            style={{ top: `${10 + i * 15}%`, left: 0 }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + i,
              ease: "linear",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
              <span className="text-[#B2BABB]">About</span>
              <span className="text-cyan-400 relative ml-4">
                Me
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
              I'M A PASSIONATE JUNIOR SOFTWARE DEVELOPER AND SOFTWARE ENGINEERING STUDENT AT WETHINKCODE_.
              WITH EXPERTISE IN PYTHON, JAVA, AND MODERN WEB TECHNOLOGIES, I LOVE TACKLING CODING CHALLENGES
              AND BUILDING INNOVATIVE SOLUTIONS THAT MAKE A DIFFERENCE.
            </motion.p>
          </motion.div>

          {/* Personal Story Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative h-full">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 via-[#191F3A]/70 to-cyan-400/10 rounded-lg blur-md"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative bg-gradient-to-br from-[#15142b]/80 via-[#191F3A]/90 to-[#15142b]/80 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Journey</h3>
                <div className="flex-grow">
                  <p className="text-[#B2BABB] leading-relaxed mb-4">
                    My journey into software development started at WeThinkCode_, where I discovered my passion for
                    solving complex problems through code. I believe in writing clean, efficient code that not only works
                    but is also maintainable and scalable.
                  </p>
                  <p className="text-[#B2BABB] leading-relaxed">
                    When I'm not coding, you'll find me participating in hackathons, exploring new technologies,
                    or collaborating with fellow developers on exciting projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-kaiju-green/10 via-[#191F3A]/70 to-kaiju-green/10 rounded-lg blur-md"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <div className="relative bg-gradient-to-br from-[#15142b]/80 via-[#191F3A]/90 to-[#15142b]/80 backdrop-blur-sm border border-kaiju-green/20 rounded-lg p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-kaiju-green mb-4">What Drives Me</h3>
                <div className="flex-grow">
                  <p className="text-[#B2BABB] leading-relaxed mb-4">
                    I'm driven by the endless possibilities that technology offers to improve people's lives.
                    Every project is an opportunity to learn something new and push the boundaries of what's possible.
                  </p>
                  <p className="text-[#B2BABB] leading-relaxed">
                    I value collaboration, continuous learning, and creating solutions that are not just functional
                    but also accessible and user-friendly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center text-[#B2BABB] mb-12">
              Skills & <span className="text-cyan-400">Expertise</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-kaiju-green/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative bg-gradient-to-br from-[#191F3A] to-[#15142b] border border-cyan-400/20 rounded-lg p-6 h-full">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.5, y: 30 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + index * 0.1 + skillIndex * 0.08,
                            type: "spring",
                            stiffness: 150,
                            damping: 12
                          }}
                          title={skill}
                        >
                          <motion.div
                            className="p-3 bg-[#15142b]/50 rounded-lg transition-all duration-300 relative overflow-hidden"
                            whileHover={{
                              scale: 1.2,
                              y: -5,
                              rotateY: 15,
                              transition: { type: "spring", stiffness: 300, damping: 15 }
                            }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                              boxShadow: [
                                "0 0 0 rgba(0, 255, 255, 0)",
                                "0 0 20px rgba(0, 255, 255, 0.3)",
                                "0 0 0 rgba(0, 255, 255, 0)"
                              ]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: skillIndex * 0.3
                            }}
                          >
                            {/* Pulsing background */}
                            <motion.div
                              className="absolute inset-0 bg-cyan-400/5 rounded-lg"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: skillIndex * 0.2
                              }}
                            />

                            <motion.div
                              animate={{
                                rotateZ: [0, 10, -10, 0]
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: skillIndex * 0.4
                              }}
                            >
                              <TechIconComponent
                                techName={skill}
                                size={20}
                                showLabel={false}
                                className="text-[#B2BABB] relative z-10"
                                iconClassName="text-[#B2BABB] hover:text-cyan-400 transition-colors duration-300"
                              />
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-[#B2BABB] mb-12">
              Professional <span className="text-cyan-400">Experience</span>
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 via-[#191F3A]/70 to-kaiju-green/10 rounded-lg blur-md"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index }}
                  />
                  <div className="relative bg-gradient-to-br from-[#15142b]/80 via-[#191F3A]/90 to-[#15142b]/80 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                        <p className="text-kaiju-green font-medium">{exp.company}</p>
                      </div>
                      <span className="text-[#B2BABB] text-sm md:text-base">{exp.period}</span>
                    </div>
                    <p className="text-[#B2BABB] leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-[#B2BABB] mb-8">
              Let's <span className="text-cyan-400">Work Together</span>
            </h2>
            <p className="text-xl text-[#B2BABB] mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <span>View My Work</span>
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
                <Link href="/documents" className="relative px-8 py-3 bg-transparent text-[#C4FF00] border border-[#C4FF00] rounded-md shadow-lg shadow-[#C4FF00]/20 font-medium inline-flex items-center group">
                  <motion.span
                    className="absolute inset-0 rounded-md opacity-0 bg-[#C4FF00]/10 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span>View Resume & Docs</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/contact" className="relative px-8 py-3 bg-transparent text-kaiju-green border border-kaiju-green rounded-md shadow-lg shadow-kaiju-green/20 font-medium inline-flex items-center group">
                  <motion.span
                    className="absolute inset-0 rounded-md opacity-0 bg-kaiju-green/10 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span>Get In Touch</span>
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
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </motion.div>
  );
}

export default About;
