// src/components/ThemeProvider.tsx
"use client"; // This component needs to be a Client Component

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // attribute="class": Adds 'dark' class to <html> tag
  // defaultTheme="system": Uses system preference initially
  // enableSystem: Allows respecting system preference changes
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}