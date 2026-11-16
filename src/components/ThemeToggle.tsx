import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme switcher"
      className={`inline-flex items-center p-1 rounded-xl bg-surface border border-border shadow-xs ${className}`}
    >
      {/* Light Theme Button */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors duration-180 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
          theme === 'light'
            ? 'bg-accent-soft text-accent border border-accent/30 shadow-xs'
            : 'text-text-muted hover:text-text-primary'
        }`}
        title="Switch to Light Theme"
      >
        <Sun className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-accent fill-accent/20' : 'text-text-muted'}`} />
        <span>Light</span>
      </button>

      {/* Dark Theme Button */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors duration-180 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-focus ${
          theme === 'dark'
            ? 'bg-accent-soft text-accent border border-accent/40 shadow-xs'
            : 'text-text-muted hover:text-text-primary'
        }`}
        title="Switch to Dark Theme"
      >
        <Moon className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-accent fill-accent/20' : 'text-text-muted'}`} />
        <span>Dark</span>
      </button>
    </div>
  );
};
