// src/components/Navbar.tsx
"use client";

// Import the toggle button
import { ManualThemeToggle } from './ManualThemeToggle';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Import desired icons from react-icons, e.g., BoxIcons (Bi)
import {
  BiHomeAlt,
  BiUser,
  BiBriefcaseAlt2,
  BiWrench,
  BiFileBlank,
  BiEnvelope
} from 'react-icons/bi';

// Define links data including icons
const navLinks = [
  { href: '/', label: 'Home', icon: BiHomeAlt },
  { href: '/about', label: 'About', icon: BiUser },
  { href: '/projects', label: 'Projects', icon: BiBriefcaseAlt2 },
  { href: '/skills', label: 'Skills', icon: BiWrench },
  { href: '/resume', label: 'Resume', icon: BiFileBlank },
  { href: '/contact', label: 'Contact', icon: BiEnvelope },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    // Universal Floating Island Nav
    <nav className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs sm:max-w-lg md:max-w-xl">
      {/* Changed justify-around to justify-center, adjusted padding slightly */}
      <ul className="flex justify-center items-center space-x-1 sm:space-x-2 bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg px-2 sm:px-3 py-1.5">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const IconComponent = link.icon; // Get the icon component

          return (
            <li key={link.href} className="flex-shrink-0">
              <Link
                href={link.href}
                title={link.label}
                className={`flex justify-center items-center h-10 w-10 md:h-auto md:w-auto md:px-4 md:py-2 rounded-full text-sm transition-colors duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-white scale-110'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {/* Icon: Visible on mobile, hidden on md+ */}
                <IconComponent className="md:hidden h-5 w-5" />
                {/* Label: Hidden on mobile, visible on md+ */}
                <span className="hidden md:inline">{link.label}</span>
              </Link>
            </li>
          );
        })}

        {/* Add the Theme Toggle Button as the last item */}
        {/* Added margin only on medium screens and up */}
        <li className="md:ml-2 flex items-center"> {/* Added flex items-center */}
           <ManualThemeToggle />
        </li>

      </ul>
    </nav>
  );
}