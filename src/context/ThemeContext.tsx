// src/context/ThemeContext.tsx
"use client"; // Context provider with hooks needs to be a Client Component

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context with a default value (can be undefined initially)
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Create the Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // State to hold the current theme
  const [theme, setTheme] = useState<Theme>('light'); // Default to light initially

  // Effect to run once on mount to set initial theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []); // Empty dependency array means run only once on mount

  // Effect to update HTML class and local storage when theme changes
  useEffect(() => {
    const root = document.documentElement; // Get the <html> element
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Save preference
  }, [theme]); // Run this effect whenever the theme state changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily use the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};