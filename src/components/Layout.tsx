import { motion } from 'framer-motion';
        import { ReactNode } from 'react';

        interface LayoutProps {
          children: ReactNode;
          className?: string;
        }

        const Layout = ({ children, className = '' }: LayoutProps) => {
          // @ts-ignore
            return (
            <motion.div
              as="main"
              className={`min-h-screen ${className}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          );
        };

        export default Layout;