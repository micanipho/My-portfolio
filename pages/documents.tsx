// pages/documents.tsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaEye,
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileAlt,
  FaCertificate,
  FaGraduationCap,
  FaProjectDiagram,
  FaUser,
  FaChalkboardTeacher,
  FaFile
} from 'react-icons/fa';

// Utility function to get the correct base path for URLs
const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/My-portfolio' : '';
};

// Document interface
interface Document {
  id: string;
  title: string;
  description: string;
  category: 'resume' | 'certificates' | 'academic' | 'projects' | 'presentations' | 'other';
  fileType: 'pdf' | 'doc' | 'docx' | 'ppt' | 'pptx' | 'txt' | 'html';
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  tags: string[];
  featured: boolean;
}

// Sample documents data
const sampleDocuments: Document[] = [
  {
    id: '1',
    title: 'Nhlakanipho Q. Masilela - Resume/CV',
    description: 'Professional resume with modern dark theme styling matching the portfolio design. Features Computer Science education from Wits University, academic excellence, and WeThinkCode_ training.',
    category: 'resume',
    fileType: 'html',
    fileName: 'resume.html',
    fileSize: '18.5 KB',
    uploadDate: '2024-01-15',
    downloadUrl: `${getBasePath()}/documents/resume.html`,
    tags: ['resume', 'cv', 'styled', 'modern design', 'computer science', 'wits university'],
    featured: true
  },
  {
    id: '2',
    title: 'CS50AI: Introduction to Artificial Intelligence with Python',
    description: 'Verified certificate from HarvardX for completing CS50\'s Introduction to Artificial Intelligence with Python. Covers machine learning, neural networks, natural language processing, and computer vision using Python.',
    category: 'certificates',
    fileType: 'pdf',
    fileName: 'cs50ai-certificate.pdf',
    fileSize: '245 KB',
    uploadDate: '2024-12-15',
    downloadUrl: `${getBasePath()}/documents/cs50ai-certificate.pdf`,
    tags: ['artificial intelligence', 'machine learning', 'python', 'harvard', 'cs50', 'neural networks', 'computer vision', 'nlp'],
    featured: true
  }
];

// File type icons
const getFileTypeIcon = (fileType: string) => {
  switch (fileType) {
    case 'pdf': return <FaFilePdf className="text-red-500" />;
    case 'doc':
    case 'docx': return <FaFileWord className="text-blue-500" />;
    case 'ppt':
    case 'pptx': return <FaFilePowerpoint className="text-orange-500" />;
    case 'html': return <FaFile className="text-cyan-400" />;
    case 'txt': return <FaFileAlt className="text-gray-400" />;
    default: return <FaFileAlt className="text-gray-400" />;
  }
};

// Category icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'resume': return <FaUser className="text-cyan-400" />;
    case 'certificates': return <FaCertificate className="text-yellow-500" />;
    case 'academic': return <FaGraduationCap className="text-green-500" />;
    case 'projects': return <FaProjectDiagram className="text-purple-500" />;
    case 'presentations': return <FaChalkboardTeacher className="text-pink-500" />;
    default: return <FaFile className="text-gray-400" />;
  }
};

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const categories = [
    { value: 'all', label: 'All Documents' },
    { value: 'resume', label: 'Resume/CV' },
    { value: 'certificates', label: 'Certificates' }
  ];

  // Filter documents
  const filteredDocuments = useMemo(() => {
    return sampleDocuments.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
      const matchesFeatured = !showFeaturedOnly || doc.featured;
      
      return matchesSearch && matchesCategory && matchesFeatured;
    });
  }, [searchTerm, selectedCategory, showFeaturedOnly]);

  const handleDownload = (document: Document) => {
    // Trigger the actual download
    console.log('Downloading:', document.fileName);
    window.open(document.downloadUrl, '_blank');
  };

  const handleView = (document: Document) => {
    // Open document in a new tab for viewing
    console.log('Viewing:', document.fileName);

    // For HTML files, open directly
    if (document.fileName.endsWith('.html')) {
      window.open(document.downloadUrl, '_blank', 'noopener,noreferrer');
    } else {
      // For other file types, try to open directly
      window.open(document.downloadUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E0E10] via-[#191F3A] to-[#0E0E10] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-[#B2BABB] mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Documents
            </span>
          </h1>
          <p className="text-xl text-[#B2BABB]/70 max-w-3xl mx-auto">
            Access my resume, certificates, project documentation, and academic papers
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          className="bg-[#1e1e24]/50 backdrop-blur-sm rounded-lg border border-[#00FFFF]/20 p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:w-auto">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B2BABB]/50" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#191F3A]/50 border border-[#00FFFF]/20 rounded-lg text-[#B2BABB] placeholder-[#B2BABB]/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B2BABB]/50" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-[#191F3A]/50 border border-[#00FFFF]/20 rounded-lg text-[#B2BABB] focus:outline-none focus:border-cyan-400 transition-colors duration-300 appearance-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Featured Toggle */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                showFeaturedOnly ? 'bg-cyan-400' : 'bg-[#191F3A]'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  showFeaturedOnly ? 'translate-x-6' : 'translate-x-0.5'
                } mt-0.5`} />
              </div>
              <span className="text-[#B2BABB] text-sm">Featured Only</span>
            </label>
          </div>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence>
            {filteredDocuments.map((document, index) => (
              <motion.div
                key={document.id}
                className="bg-gradient-to-br from-[#1e1e24] to-[#2a2a35] rounded-lg border border-[#00FFFF]/20 p-6 hover:border-[#00FFFF]/40 transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0, 255, 255, 0.1)'
                }}
              >
                {/* Featured Badge */}
                {document.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </div>
                )}

                {/* Header */}
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
                      onClick={() => handleView(document)}
                      className="p-2 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEye className="text-cyan-400" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleDownload(document)}
                      className="p-2 bg-green-400/20 hover:bg-green-400/30 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaDownload className="text-green-400" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#B2BABB] group-hover:text-cyan-400 transition-colors duration-300">
                    {document.title}
                  </h3>
                  
                  <p className="text-sm text-[#B2BABB]/70 overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {document.description}
                  </p>

                  {/* File Info */}
                  <div className="flex items-center justify-between text-xs text-[#B2BABB]/60">
                    <span className="bg-[#191F3A]/50 px-2 py-1 rounded capitalize">
                      {document.category.replace('_', ' ')}
                    </span>
                    <span>{document.fileSize}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {document.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
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

                  {/* Upload Date */}
                  <div className="text-xs text-[#B2BABB]/50 pt-2 border-t border-[#00FFFF]/10">
                    Updated: {new Date(document.uploadDate).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaFile className="text-6xl text-[#B2BABB]/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#B2BABB] mb-2">No documents found</h3>
            <p className="text-[#B2BABB]/70">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Documents;
