// src/components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

export type Project = {
  slug: string;
  title: string;
  projectImage: { url: string; alt: string; } | null;
  technologies: Array<{ name: string; id?: string | null }> | null;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, projectImage, technologies } = project;
  // Removed serverUrl

  // Removed console logs

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 hover:shadow-xl transition-shadow duration-300 group">
      {projectImage?.url ? (
         <div className="relative h-48 w-full overflow-hidden">
           <Image
             // Use the URL directly (should be like /images/...)
             src={projectImage.url}
             alt={projectImage.alt || title}
             fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             className="object-cover transition-transform duration-300 group-hover:scale-105"
           />
        </div>
      ) : (
        <div className="relative h-48 w-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4 min-h-[3rem]">
          {technologies?.map((tech) => (
            <span key={tech.id || tech.name} className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-cyan-900 dark:text-cyan-300">
              {tech.name}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`} className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-200 inline-block mt-2">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}