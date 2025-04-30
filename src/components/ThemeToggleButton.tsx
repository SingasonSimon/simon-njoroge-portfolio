// src/components/ThemeToggleButton.tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi"; // Sun/Moon icons

export function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Avoid hydration mismatch by waiting for mount
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null until mounted
    // Helps prevent hydration mismatch for the icon/button state
    return <div className="w-8 h-8" />; // Placeholder with same size as button
  }

  // Use resolvedTheme to show correct icon even when theme is 'system'
  const isDarkMode = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      aria-label={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      title={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
    >
      {isDarkMode ? <BiSun className="w-4 h-4" /> : <BiMoon className="w-4 h-4" />}
    </button>
  );
}