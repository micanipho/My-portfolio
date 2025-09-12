import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    status: 'Completed' | 'In Development' | 'Planned';
    url?: string;
    github?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageSrc, setImageSrc] = useState('');

  // Determine the correct image path based on environment
  useEffect(() => {
    if (project.image) {
      const getImagePath = () => {
        const cleanImage = project.image!.startsWith('/projects/') ? project.image : `/projects/${project.image}`;

        if (typeof window !== 'undefined') {
          const isGitHubPages = window.location.hostname.includes('github.io') ||
                               window.location.pathname.startsWith('/My-portfolio');
          return isGitHubPages ? `/My-portfolio${cleanImage}` : cleanImage;
        }
        return cleanImage;
      };

      setImageSrc(getImagePath());
    }
  }, [project.image]);

  return (
    <motion.div
      className="bg-[#1E1E24] rounded-xl overflow-hidden shadow-lg shadow-black/30 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={imageSrc}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              console.log('Project image failed to load, trying fallback');
              const img = e.currentTarget;

              // Try GitHub Pages path if not already used
              if (!img.src.includes('/My-portfolio/')) {
                img.src = '/My-portfolio/projects/fallback-project.svg';
              } else if (!img.src.includes('fallback-project.svg')) {
                img.src = img.src.replace(project.image!, 'fallback-project.svg');
              } else {
                // All fallbacks failed, show placeholder
                const parent = img.parentElement;
                if (parent) {
                  img.style.display = 'none';
                  parent.innerHTML = `
                    <div class="w-full h-full bg-[#191F3A] flex items-center justify-center">
                      <span class="text-[#3cc698]">Image Coming Soon</span>
                    </div>
                  `;
                }
              }
              img.onerror = null;
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
      
      {/* Rest of your component */}
    </motion.div>
  );
};

export default ProjectCard;