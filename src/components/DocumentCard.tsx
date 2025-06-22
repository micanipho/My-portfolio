// src/components/DocumentCard.tsx
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFilePdf, 
  FaFileWord, 
  FaFilePowerpoint, 
  FaFileAlt, 
  FaDownload, 
  FaEye,
  FaCertificate,
  FaGraduationCap,
  FaProjectDiagram,
  FaUser,
  FaPresentation,
  FaFile
} from 'react-icons/fa';
import { Document, DocumentCardProps } from '../types/document';

// File type icon mapping
const getFileTypeIcon = (fileType: string) => {
  switch (fileType.toLowerCase()) {
    case 'pdf':
      return <FaFilePdf className="text-red-500" />;
    case 'doc':
    case 'docx':
      return <FaFileWord className="text-blue-500" />;
    case 'ppt':
    case 'pptx':
      return <FaFilePowerpoint className="text-orange-500" />;
    case 'txt':
    case 'md':
      return <FaFileAlt className="text-gray-400" />;
    default:
      return <FaFile className="text-gray-400" />;
  }
};

// Category icon mapping
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'resume':
      return <FaUser className="text-cyan-400" />;
    case 'certificates':
      return <FaCertificate className="text-yellow-500" />;
    case 'academic':
      return <FaGraduationCap className="text-green-500" />;
    case 'projects':
      return <FaProjectDiagram className="text-purple-500" />;
    case 'presentations':
      return <FaPresentation className="text-pink-500" />;
    default:
      return <FaFile className="text-gray-400" />;
  }
};

// Category display names
const getCategoryDisplayName = (category: string) => {
  switch (category) {
    case 'resume':
      return 'Resume/CV';
    case 'certificates':
      return 'Certificates';
    case 'academic':
      return 'Academic Papers';
    case 'projects':
      return 'Project Docs';
    case 'presentations':
      return 'Presentations';
    default:
      return 'Other';
  }
};

const DocumentCard: React.FC<DocumentCardProps> = memo(({ 
  document, 
  onView, 
  onDownload 
}) => {
  const handleView = () => {
    onView(document);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload(document);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-[#1e1e24] to-[#2a2a35] rounded-lg border border-[#00FFFF]/20 p-6 hover:border-[#00FFFF]/40 transition-all duration-300 cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleView}
    >
      {/* Featured badge */}
      {document.featured && (
        <motion.div
          className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Featured
        </motion.div>
      )}

      {/* Header with icons */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">
            {getFileTypeIcon(document.fileType)}
          </div>
          <div className="text-lg">
            {getCategoryIcon(document.category)}
          </div>
        </div>
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            onClick={handleView}
            className="p-2 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEye className="text-cyan-400" />
          </motion.button>
          <motion.button
            onClick={handleDownload}
            className="p-2 bg-green-400/20 hover:bg-green-400/30 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaDownload className="text-green-400" />
          </motion.button>
        </div>
      </div>

      {/* Document info */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-[#B2BABB] group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {document.title}
        </h3>
        
        <p className="text-sm text-[#B2BABB]/70 line-clamp-3">
          {document.description}
        </p>

        {/* Category and file info */}
        <div className="flex items-center justify-between text-xs text-[#B2BABB]/60">
          <span className="bg-[#191F3A]/50 px-2 py-1 rounded">
            {getCategoryDisplayName(document.category)}
          </span>
          <span>{document.fileSize}</span>
        </div>

        {/* Tags */}
        {document.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {document.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            {document.tags.length > 3 && (
              <span className="text-xs text-[#B2BABB]/50">
                +{document.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Upload date */}
        <div className="text-xs text-[#B2BABB]/50 pt-2 border-t border-[#00FFFF]/10">
          Updated: {new Date(document.lastModified).toLocaleDateString()}
        </div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
});

DocumentCard.displayName = 'DocumentCard';

export default DocumentCard;
