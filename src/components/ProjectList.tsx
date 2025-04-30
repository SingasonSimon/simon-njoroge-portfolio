// src/components/ProjectList.tsx
import ProjectCard from './ProjectCard';

// Reuse the Project type definition (or import from a shared types file later)
type Project = {
  slug: string;
  title: string;
  projectImage: { url: string; alt: string; } | null;
  technologies: Array<{ name: string; id?: string | null }> | null;
   // Include any other fields needed by ProjectCard
};

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}