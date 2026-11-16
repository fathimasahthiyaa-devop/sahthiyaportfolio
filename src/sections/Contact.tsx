import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Mail, Linkedin, Copy, Check, MapPin, ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Contact: React.FC = () => {
  const { personal, contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-8 sm:py-12 md:py-14 scroll-mt-16 bg-bg text-text-primary relative flex flex-col justify-center"
      aria-label="Contact Information"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col">
        <div className="max-w-3xl mx-auto text-center w-full flex flex-col items-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title={contact.heading}
            subtitle={contact.copy}
            align="center"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 sm:mt-10 p-6 sm:p-10 rounded-3xl bg-surface border border-border shadow-theme relative overflow-hidden w-full flex flex-col items-center"
          >
            <div className="relative z-10 flex flex-col items-center w-full">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent-soft border border-border flex items-center justify-center text-accent mb-4 sm:mb-6 shadow-xs shrink-0"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>

              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2 font-bold">
                Direct Email
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-2xl font-mono font-semibold text-text-primary hover:text-accent transition-colors duration-180 break-all"
              >
                {personal.email}
              </a>

              {/* Action Buttons (Phone flex-col full-width, Desktop flex-row) */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-button-text bg-button-bg hover:bg-accent-hover transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-theme w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </motion.a>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-text-primary bg-surface border border-border hover:border-accent hover:text-accent transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-xs w-full sm:w-auto cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="copied"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2 text-accent"
                      >
                        <Check className="w-4 h-4 text-accent" />
                        <span className="font-semibold">Copied to Clipboard!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4 text-text-muted" />
                        <span>Copy Email</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-text-primary bg-surface border border-border hover:border-accent hover:text-accent transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-xs w-full sm:w-auto"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </motion.a>

                {personal.githubUrl && (
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-text-primary bg-surface border border-border hover:border-accent hover:text-accent transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-xs w-full sm:w-auto"
                  >
                    <Github className="w-4 h-4 text-accent" />
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </motion.a>
                )}
              </div>

              {/* Verified Location and Privacy details */}
              <div className="mt-8 sm:mt-10 pt-6 border-t border-border w-full flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-2 text-center sm:text-left">
                <div className="flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div>
                  <span>Response via professional email or LinkedIn</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
