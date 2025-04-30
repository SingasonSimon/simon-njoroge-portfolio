// src/app/(app)/projects/page.tsx
import ProjectList from '@/components/ProjectList';
import type { Project as ProjectType } from '@/components/ProjectCard';

// --- Hardcoded Project Data ---
// IMPORTANT: Update image URLs to point to files in your /public/images folder
const hardcodedProjects: ProjectType[] = [
  {
    slug: 'cool-portfolio-v1',
    title: 'My Awesome Portfolio',
    // Use relative paths from the 'public' directory
    projectImage: { url: '/images/portfolio-placeholder.png', alt: 'Portfolio screenshot' },
    technologies: [{ name: 'Next.js' }, { name: 'TailwindCSS' }], // Removed PayloadCMS for now
  },
  {
    slug: 'weather-app-react',
    title: 'React Weather App',
    projectImage: { url: '/images/weather-placeholder.png', alt: 'Weather App screenshot' },
    technologies: [{ name: 'React' }, { name: 'API' }],
  },
  {
    slug: 'node-task-manager',
    title: 'Node.js Task Manager API',
    projectImage: { url: '/images/api-placeholder.png', alt: 'API screenshot' },
    technologies: [{ name: 'Node.js' }, { name: 'Express' }],
  },
  // Add more projects here directly
];
// --- End Hardcoded Data ---

// Make the component non-async again
export default function ProjectsPage() {
  // Use the hardcoded data directly
  const projects = hardcodedProjects;

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      {projects.length > 0 ? (
         <ProjectList projects={projects} />
      ) : (
        <p>No projects available yet.</p> // Updated message slightly
      )}
    </section>
  );
}