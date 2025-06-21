// src/utils/techIcons.tsx
import React from 'react';
import {
  SiPython,
  SiOpenjdk,
  SiReact,
  SiFlask,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiFlutter,
  SiFirebase,
  SiFigma,
  SiStorybook,
  SiThreedotjs,
  SiWebgl,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiVercel
} from 'react-icons/si';
import { IconType } from 'react-icons';

export interface TechIcon {
  name: string;
  icon: IconType;
  color: string;
  category?: string;
}

// Comprehensive technology icon mapping
export const techIconMap: Record<string, TechIcon> = {
  // Programming Languages
  'Python': { name: 'Python', icon: SiPython, color: '#3776AB', category: 'language' },
  'Java': { name: 'Java', icon: SiOpenjdk, color: '#ED8B00', category: 'language' },
  'JavaScript': { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'language' },
  'TypeScript': { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'language' },
  'Dart': { name: 'Dart', icon: SiFlutter, color: '#0175C2', category: 'language' },

  // Frontend Frameworks & Libraries
  'React': { name: 'React', icon: SiReact, color: '#61DAFB', category: 'frontend' },
  'Next.js': { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'frontend' },
  'Framer Motion': { name: 'Framer Motion', icon: SiFramer, color: '#0055FF', category: 'frontend' },

  // Backend Frameworks
  'Flask': { name: 'Flask', icon: SiFlask, color: '#000000', category: 'backend' },
  'Spring Boot': { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F', category: 'backend' },
  'Node.js': { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'backend' },
  'Express': { name: 'Express', icon: SiExpress, color: '#000000', category: 'backend' },

  // Styling & CSS
  'HTML': { name: 'HTML', icon: SiHtml5, color: '#E34F26', category: 'frontend' },
  'CSS': { name: 'CSS', icon: SiCss3, color: '#1572B6', category: 'frontend' },
  'HTML/CSS': { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26', category: 'frontend' },
  'Tailwind CSS': { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
  'Bootstrap': { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'frontend' },
  'CSS3': { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'frontend' },

  // Databases
  'MySQL': { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'database' },
  'PostgreSQL': { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'database' },
  'MongoDB': { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'database' },
  'Firebase': { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'database' },

  // Tools & Development
  'Git': { name: 'Git', icon: SiGit, color: '#F05032', category: 'tool' },
  'GitHub': { name: 'GitHub', icon: SiGithub, color: '#181717', category: 'tool' },
  'VS Code': { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC', category: 'tool' },

  // Mobile Development
  'Flutter': { name: 'Flutter', icon: SiFlutter, color: '#02569B', category: 'mobile' },

  // Design & UI/UX
  'Figma': { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'design' },
  'Storybook': { name: 'Storybook', icon: SiStorybook, color: '#FF4785', category: 'design' },
  'Design Tokens': { name: 'Design Tokens', icon: SiFigma, color: '#F24E1E', category: 'design' },

  // 3D & Animation
  'Three.js': { name: 'Three.js', icon: SiThreedotjs, color: '#000000', category: 'animation' },
  'WebGL': { name: 'WebGL', icon: SiWebgl, color: '#990000', category: 'animation' },

  // Cloud & Deployment
  'Docker': { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'devops' },
  'Kubernetes': { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'devops' },
  'AWS': { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', category: 'cloud' },
  'Vercel': { name: 'Vercel', icon: SiVercel, color: '#000000', category: 'cloud' }
};

// Helper function to get tech icon by name
export const getTechIcon = (techName: string): TechIcon | null => {
  return techIconMap[techName] || null;
};

// Helper function to get all technologies by category
export const getTechsByCategory = (category: string): TechIcon[] => {
  return Object.values(techIconMap).filter(tech => tech.category === category);
};

// Component for rendering a technology icon with consistent styling
interface TechIconProps {
  techName: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  onClick?: () => void;
  animated?: boolean;
}

export const TechIconComponent: React.FC<TechIconProps> = ({
  techName,
  size = 20,
  showLabel = true,
  className = '',
  iconClassName = '',
  labelClassName = '',
  onClick,
  animated = false
}) => {
  const tech = getTechIcon(techName);
  
  if (!tech) {
    // Fallback for unknown technologies
    return showLabel ? (
      <span className={`text-[#B2BABB] ${labelClassName}`}>
        {techName}
      </span>
    ) : null;
  }

  const IconComponent = tech.icon;

  return (
    <div 
      className={`flex items-center gap-2 ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <IconComponent
        size={size}
        className={`text-[#B2BABB] hover:text-cyan-400 transition-colors duration-300 ${iconClassName}`}
        style={{ 
          color: animated ? undefined : tech.color 
        }}
        aria-hidden="true"
      />
      {showLabel && (
        <span className={`text-[#B2BABB] ${labelClassName}`}>
          {tech.name}
        </span>
      )}
    </div>
  );
};

export default TechIconComponent;
