import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Mail } from 'lucide-react';

export const FloatingNav: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-surface/95 backdrop-blur-md border border-border shadow-theme"
        >
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-text-body hover:text-accent hover:bg-accent-soft transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            aria-label="Jump to Contact"
          >
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span className="hidden sm:inline">Connect</span>
          </a>

          <div className="w-[1px] h-4 bg-border" aria-hidden="true" />

          <button
            type="button"
            onClick={scrollToTop}
            className="p-1.5 rounded-full text-text-muted hover:text-accent hover:bg-accent-soft transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
