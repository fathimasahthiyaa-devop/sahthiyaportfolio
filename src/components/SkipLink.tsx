import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-button-bg focus:text-button-text focus:font-semibold focus:rounded-xl focus:shadow-theme focus:outline-none focus:ring-2 focus:ring-focus"
    >
      Skip to main content
    </a>
  );
};
