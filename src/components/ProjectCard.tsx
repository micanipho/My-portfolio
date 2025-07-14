import React from 'react';
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
            src={project.image.startsWith('/projects/') ? project.image : `/projects/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = '/projects/fallback-project.svg';
              e.currentTarget.onerror = null;
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