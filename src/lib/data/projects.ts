// src/lib/data/projects.ts
import type { Project as ProjectType } from '@/components/ProjectCard'; // Import type

// Define and export the single source of truth for project data
export const hardcodedProjects: ProjectType[] = [
  {
    slug: 'cool-portfolio-v1',
    title: 'My Awesome Portfolio',
    projectImage: { url: '/images/portfolio-placeholder.png', alt: 'Portfolio screenshot' },
    technologies: [{ name: 'Next.js' }, { name: 'TailwindCSS' }],
    description: 'This is the hardcoded description for the portfolio project. Built from scratch using Next.js and Tailwind.', // Simple string
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'weather-app-react',
    title: 'React Weather App',
    projectImage: { url: '/images/weather-placeholder.png', alt: 'Weather App screenshot' },
    technologies: [{ name: 'React' }, { name: 'API' }],
    description: 'A simple application allowing users to check the weather for a given city using the OpenWeatherMap API.', // Simple string
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    slug: 'node-task-manager',
    title: 'Node.js Task Manager API',
    projectImage: { url: '/images/api-placeholder.png', alt: 'API screenshot' },
    technologies: [{ name: 'Node.js' }, { name: 'Express' }],
    description: null, // Keep null for no description
    liveUrl: null,
    repoUrl: '#',
  },
  // Add more projects here
];