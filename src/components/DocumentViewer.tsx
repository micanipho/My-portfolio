// src/components/DocumentViewer.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaExpand, FaCompress, FaSpinner } from 'react-icons/fa';

interface DocumentViewerProps {
  isOpen: boolean;
  onClose: () => void;
  documentUrl: string;
  documentTitle: string;
  documentType: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  isOpen,
  onClose,
  documentUrl,
  documentTitle,
  documentType
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setError(null);
      // Simulate loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, documentUrl]);

  const handleDownload = () => {
    // In a real implementation, this would trigger the download
    const link = document.createElement('a');
    link.href = documentUrl;
    link.download = documentTitle;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderDocumentContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <FaSpinner className="text-4xl text-cyan-400 animate-spin mx-auto mb-4" />
            <p className="text-[#B2BABB]">Loading document...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-4xl text-red-400 mb-4">⚠️</div>
            <p className="text-[#B2BABB] mb-2">Failed to load document</p>
            <p className="text-[#B2BABB]/70 text-sm">{error}</p>
          </div>
        </div>
      );
    }

    // For PDF files, we would use PDF.js or an iframe
    if (documentType === 'pdf') {
      return (
        <iframe
          src={`${documentUrl}#toolbar=1&navpanes=1&scrollbar=1`}
          className="w-full h-full border-0"
          title={documentTitle}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError('Failed to load PDF document');
          }}
        />
      );
    }

    // For HTML files, use iframe without PDF-specific parameters
    if (documentType === 'html') {
      return (
        <iframe
          src={documentUrl}
          className="w-full h-full border-0"
          title={documentTitle}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError('Failed to load HTML document');
          }}
        />
      );
    }

    // For other document types, show a preview message
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">📄</div>
          <h3 className="text-xl font-semibold text-[#B2BABB] mb-2">
            {documentTitle}
          </h3>
          <p className="text-[#B2BABB]/70 mb-6">
            This document type cannot be previewed in the browser. 
            Click download to view the full document.
          </p>
          <motion.button
            onClick={handleDownload}
            className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="inline mr-2" />
            Download Document
          </motion.button>
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm ${
            isFullscreen ? 'p-0' : ''
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className={`bg-[#1e1e24] rounded-lg border border-[#00FFFF]/20 overflow-hidden ${
              isFullscreen 
                ? 'w-full h-full rounded-none' 
                : 'w-full max-w-6xl h-[80vh]'
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#00FFFF]/20 bg-[#191F3A]/50">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-[#B2BABB] truncate">
                  {documentTitle}
                </h2>
                <p className="text-sm text-[#B2BABB]/70 capitalize">
                  {documentType.toUpperCase()} Document
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={handleDownload}
                  className="p-2 bg-green-400/20 hover:bg-green-400/30 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Download"
                >
                  <FaDownload className="text-green-400" />
                </motion.button>
                
                <motion.button
                  onClick={toggleFullscreen}
                  className="p-2 bg-blue-400/20 hover:bg-blue-400/30 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? (
                    <FaCompress className="text-blue-400" />
                  ) : (
                    <FaExpand className="text-blue-400" />
                  )}
                </motion.button>
                
                <motion.button
                  onClick={onClose}
                  className="p-2 bg-red-400/20 hover:bg-red-400/30 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Close"
                >
                  <FaTimes className="text-red-400" />
                </motion.button>
              </div>
            </div>

            {/* Document Content */}
            <div className="flex-1 h-full bg-white">
              {renderDocumentContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DocumentViewer;
