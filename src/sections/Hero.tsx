import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowDown, FileText, ArrowUpRight, MapPin, GraduationCap, Code2, Mail, Copy, Check, Sparkles, Coffee } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { personal, hero } = portfolioData;
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-20 pb-8 sm:pt-26 sm:pb-10 md:pt-30 md:pb-12 overflow-hidden border-b border-border bg-bg text-text-primary flex flex-col justify-center"
      aria-label="Hero Introduction"
    >
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full flex flex-col">
        {/* Top Flex Row: Headline & Content (Left) + Portrait Card (Right) */}
        <div className="flex flex-row items-start justify-between gap-3 sm:gap-6 lg:gap-12 w-full">
          
          {/* Left Column: Eyebrow + Headline + Name + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex-1 min-w-0 flex flex-col items-start text-left"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 mb-2.5 sm:mb-3.5 text-[10px] sm:text-xs font-mono font-bold tracking-wide rounded-full bg-accent-soft text-accent border border-border shadow-xs"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
              <span>{hero.eyebrow}</span>
            </motion.div>

            {/* Target Role & Headline (Solid --text-primary) */}
            <h1 className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] w-full">
              <span className="text-text-muted block text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-1 font-semibold">
                Target Role
              </span>
              <span className="text-text-primary block">
                {hero.headline}
              </span>
            </h1>

            {/* Display Name subtitle + Location Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-lg font-bold text-accent tracking-wide flex items-center gap-1.5 sm:gap-2 flex-wrap"
            >
              <span>{personal.displayName}</span>
              <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-full border border-border bg-bg-secondary text-text-muted">
                Eravur, Sri Lanka
              </span>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-text-body leading-relaxed max-w-2xl font-normal"
            >
              {hero.supportingCopy}
            </motion.p>
          </motion.div>

          {/* Right Column: Portrait Card (Side-by-side flex on phone and desktop) */}
          <div className="shrink-0 w-[115px] xs:w-[130px] sm:w-[220px] md:w-[260px] lg:w-[310px] flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="relative w-full flex flex-col"
            >
              {/* Main Portrait Card Wrapper */}
              <div className="relative rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 border border-border bg-surface shadow-theme overflow-hidden flex flex-col w-full">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg sm:rounded-xl flex items-center justify-center bg-bg-secondary">
                  {personal.portraitPath && !imageError ? (
                    <motion.img
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      src={personal.portraitPath}
                      alt="Portrait photograph of Mohamed Roomy Fathima Sahthiya"
                      className="w-full h-full object-cover object-top filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                      onError={() => setImageError(true)}
                      width={310}
                      height={388}
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 sm:p-6 text-center">
                      <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-accent-soft border border-border flex items-center justify-center text-accent text-xl sm:text-3xl font-bold font-mono tracking-widest shadow-inner mb-2 sm:mb-3">
                        {personal.monogram}
                      </div>
                      <p className="font-semibold text-text-primary text-xs sm:text-sm">
                        {personal.displayName}
                      </p>
                      <p className="text-[10px] sm:text-xs text-text-muted mt-0.5 sm:mt-1">
                        BEng
                      </p>
                    </div>
                  )}

                  {/* Surface-matched subtle gradient at base of image */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-10 sm:h-16 pointer-events-none bg-gradient-to-t from-surface via-surface/60 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Caption below photo */}
                <div className="mt-1.5 sm:mt-2.5 px-1 sm:px-2 py-0.5 sm:py-1 flex items-center justify-between text-[10px] sm:text-xs">
                  <span className="font-mono text-text-primary font-bold truncate pr-1">
                    {personal.displayName}
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded border border-border bg-accent-soft text-accent font-bold shrink-0">
                    BEng 2024
                  </span>
                </div>
              </div>

              {/* Floating Badge 1 (Top-Right): Java Focus (Desktop & Tablet) */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2.5 -right-2.5 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-surface text-text-primary shadow-theme text-[11px] font-mono font-bold"
              >
                <Coffee className="w-3 h-3 text-accent" />
                <span>Java & Backend</span>
              </motion.div>

              {/* Floating Badge 2 (Bottom-Left): IT Lecturer (Desktop & Tablet) */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2.5 -left-2.5 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-surface text-text-primary shadow-theme text-[11px] font-mono font-semibold"
              >
                <Sparkles className="w-3 h-3 text-accent" />
                <span>IT Lecturer (2025–2026)</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Row 2: Action Buttons (Horizontal flex row on phone & desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-4 sm:mt-6 flex flex-row flex-wrap items-center gap-2 sm:gap-3 w-full"
        >
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#about"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-button-text bg-button-bg hover:bg-accent-hover rounded-xl shadow-theme transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus cursor-pointer"
          >
            <span>{hero.primaryCtaText}</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.a>

          {personal.publicCvUrl ? (
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={personal.publicCvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-text-primary bg-surface border border-border hover:border-accent hover:text-accent rounded-xl transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>{hero.secondaryCtaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </motion.a>
          ) : (
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-text-primary bg-surface border border-border hover:border-accent hover:text-accent rounded-xl transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-xs cursor-pointer"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-text-muted" />
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>
          )}

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-text-primary bg-surface border border-border hover:border-accent hover:text-accent rounded-xl transition-colors duration-180 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus shadow-xs"
          >
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>Contact</span>
          </motion.a>
        </motion.div>

        {/* Row 3: Factual Identity Pills (Horizontal flex row on phone & desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-border w-full flex flex-row flex-wrap items-center gap-2 sm:gap-2.5 text-left"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-border bg-surface text-text-primary shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="font-medium">Eravur, Batticaloa, Sri Lanka</span>
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-border bg-surface text-text-primary shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="font-medium">BEng Graduate (2024)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-border bg-surface text-text-primary shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="font-medium">Java & Backend Focus</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
