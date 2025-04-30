// src/lib/data/skills.ts
import { IconType } from 'react-icons';
// Example icon imports (choose icons you like from react-icons)
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb"; // Example Next.js icon

export interface Skill {
  name: string;
  icon?: IconType; // Icon component from react-icons
  // Optional: Add level or proficiency later if desired
  // level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Define your skills here, grouped by category
export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJsSquare },
      { name: 'TypeScript', icon: SiTypescript },
      // Add others like Python, SQL etc. if applicable
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: TbBrandNextjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      // Add others like Vue, Svelte, Redux, etc.
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express' }, // Example without icon
      // Add others like Python/Django/Flask, APIs, etc.
    ],
  },
  {
    name: 'Databases',
    skills: [
       { name: 'PostgreSQL', icon: SiPostgresql },
       { name: 'MongoDB', icon: SiMongodb },
      // Add others like MySQL, SQLite
    ],
  },
   {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', icon: FaGitAlt },
      { name: 'Docker', icon: FaDocker },
      { name: 'Vercel' },
      // Add others like AWS, Linux, CI/CD, Testing libs
    ],
  },
  {
    name: 'Design',
    skills: [
      { name: 'Figma', icon: FaFigma },
      { name: 'Responsive Design' },
      // Add UI/UX principles, other tools
    ],
  },
];