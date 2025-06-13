// src/components/Layout.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <motion.div
        className={`min-h-screen pt-16 ${className}`} // Added pt-16 to account for fixed navbar
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Layout;