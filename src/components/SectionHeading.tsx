import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}) => {
  const alignmentClass =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-center sm:items-start text-center sm:text-left';

  return (
    <div className={`mb-6 sm:mb-8 md:mb-10 max-w-2xl w-full flex flex-col ${alignmentClass}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 text-xs font-mono font-bold tracking-wider uppercase text-accent bg-accent-soft border border-border rounded-full shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-text-body leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
