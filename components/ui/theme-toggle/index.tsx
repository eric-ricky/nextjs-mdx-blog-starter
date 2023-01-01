import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderTheme = () => {
    if (!mounted) return null;

    return (
      <div
        className="flex items-center bg-slate-100 dark:bg-slate-600 cursor-pointer p-2 rounded-md"
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      >
        {currentTheme === 'dark' ? (
          <SunIcon className="h-4" />
        ) : (
          <MoonIcon className="h-4" />
        )}
      </div>
    );
  };
  return <>{renderTheme()}</>;
};

export default ThemeToggle;
