// src/components/ManualThemeToggle.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useThemeContext } from '@/context/ThemeContext'; // Import the custom hook
import { BiSun, BiMoon } from 'react-icons/bi';

export function ManualThemeToggle() {
  const { theme, toggleTheme } = useThemeContext(); // Use the context

  // Prevent hydration mismatch by delaying render of theme-dependent UI
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render placeholder or null during server render / initial mount
    return <div className="w-8 h-8" />; // Match button size
  }

  const isDarkMode = theme === 'dark';

  return (
    <button
      aria-label={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      title={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      onClick={toggleTheme} // Call toggle function from context
      className="p-2 rounded-full transition-colors duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
    >
      {isDarkMode ? <BiSun className="w-4 h-4" /> : <BiMoon className="w-4 h-4" />}
    </button>
  );
}