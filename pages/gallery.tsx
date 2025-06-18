import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Type definitions
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['all', 'web', 'mobile', 'design', 'animation'];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      category: 'web',
      description: 'Modern admin dashboard with real-time analytics and beautiful data visualizations.',
      image: '/images/gallery-1.jpg',
      technologies: ['React', 'Chart.js', 'Tailwind CSS'],
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: '/images/gallery-2.jpg',
      technologies: ['React Native', 'TypeScript', 'Redux'],
      featured: true
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity package including logo, colors, and typography.',
      image: '/images/gallery-3.jpg',
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
      featured: false
    },
    {
      id: 4,
      title: 'Interactive Landing Page',
      category: 'animation',
      description: 'Engaging landing page with smooth animations and micro-interactions.',
      image: '/images/gallery-4.jpg',
      technologies: ['Next.js', 'Framer Motion', 'GSAP'],
      featured: true
    },
    {
      id: 5,
      title: 'Task Management Web App',
      category: 'web',
      description: 'Collaborative task management platform with drag-and-drop functionality.',
      image: '/images/gallery-5.jpg',
      technologies: ['Vue.js', 'Node.js', 'Socket.io'],
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Comprehensive fitness tracking app with workout plans and progress monitoring.',
      image: '/images/gallery-6.jpg',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      featured: false
    },
    {
      id: 7,
      title: 'UI/UX Design System',
      category: 'design',
      description: 'Comprehensive design system with reusable components and guidelines.',
      image: '/images/gallery-7.jpg',
      technologies: ['Figma', 'Storybook', 'Design Tokens'],
      featured: true
    },
    {
      id: 8,
      title: 'Portfolio Animation',
      category: 'animation',
      description: 'Creative portfolio showcase with stunning animations and transitions.',
      image: '/images/gallery-8.jpg',
      technologies: ['Three.js', 'WebGL', 'CSS3'],
      featured: false
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const GalleryCard = ({ item, index }: { item: GalleryItem; index: number }) => (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setSelectedItem(item)}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-[#191F3A]/70 to-kaiju-green/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <div className="relative bg-gradient-to-br from-[#15142b]/90 via-[#191F3A]/95 to-[#15142b]/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg overflow-hidden h-full">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-[#191F3A] to-[#15142b] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-kaiju-green/10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-4xl text-cyan-400/40"
              animate={{ 
                rotate: item.category === 'animation' ? [0, 360] : 0,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {item.category === 'web' && '🌐'}
              {item.category === 'mobile' && '📱'}
              {item.category === 'design' && '🎨'}
              {item.category === 'animation' && '✨'}
            </motion.div>
          </div>
          {item.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-kaiju-green/20 text-kaiju-green text-xs font-medium rounded-full border border-kaiju-green/30">
                Featured
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30 capitalize">
              {item.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-cyan-400 mb-2">{item.title}</h3>
          <p className="text-[#B2BABB] text-sm leading-relaxed mb-4 line-clamp-2">{item.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1">
            {item.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={tech}
                className="px-2 py-1 bg-[#191F3A]/50 text-cyan-400/70 text-xs rounded border border-cyan-400/10"
              >
                {tech}
              </span>
            ))}
            {item.technologies.length > 3 && (
              <span className="px-2 py-1 bg-[#191F3A]/50 text-[#B2BABB]/70 text-xs rounded border border-cyan-400/10">
                +{item.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const Modal = ({ item, onClose }: { item: GalleryItem; onClose: () => void }) => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-2xl w-full bg-gradient-to-br from-[#15142b]/95 via-[#191F3A]/98 to-[#15142b]/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-[#191F3A]/80 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-64 bg-gradient-to-br from-[#191F3A] to-[#15142b] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-kaiju-green/20"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-8xl text-cyan-400/40"
              animate={{ 
                rotate: item.category === 'animation' ? [0, 360] : 0,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {item.category === 'web' && '🌐'}
              {item.category === 'mobile' && '📱'}
              {item.category === 'design' && '🎨'}
              {item.category === 'animation' && '✨'}
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-cyan-400">{item.title}</h2>
            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30 capitalize">
              {item.category}
            </span>
            {item.featured && (
              <span className="px-3 py-1 bg-kaiju-green/20 text-kaiju-green text-sm font-medium rounded-full border border-kaiju-green/30">
                Featured
              </span>
            )}
          </div>
          
          <p className="text-[#B2BABB] leading-relaxed mb-6">{item.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#191F3A]/50 text-cyan-400/80 text-sm rounded border border-cyan-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              className="flex-1 px-6 py-3 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-md font-medium hover:bg-cyan-400/20 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Project
            </motion.button>
            <motion.button
              className="flex-1 px-6 py-3 bg-kaiju-green/10 text-kaiju-green border border-kaiju-green/30 rounded-md font-medium hover:bg-kaiju-green/20 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Code
            </motion.button>
          </div>
        </div>
      </motion.div>
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
            className="absolute h-px bg-gradient-to-r from-transparent via-kaiju-green to-transparent w-full"
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
              <span className="text-[#B2BABB]">Creative</span>
              <span className="text-cyan-400 relative ml-4">
                Gallery
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
              A curated collection of my creative work spanning web development, mobile apps, design, and animations.
              Each piece represents a unique challenge and creative solution.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/40'
                    : 'bg-[#191F3A]/50 text-[#B2BABB] border border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#B2BABB] mb-8">
              Like what you see?
            </h2>
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
                  <span>View All Projects</span>
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
                  <span>Let's Work Together</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>

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

export default Gallery;
