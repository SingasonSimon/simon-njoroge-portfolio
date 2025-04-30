// src/app/(app)/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { hardcodedProjects } from '@/lib/data/projects'; // Import from shared data file
import type { Project as ProjectType } from '@/components/ProjectCard'; // Import the updated type

// Remove local hardcodedProjects definition

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Find the project in the imported hardcoded array
  const project = hardcodedProjects.find(p => p.slug === params.slug);

  // If project not found in the array, show 404
  if (!project) {
      notFound();
  }

  return (
        <article className="py-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            {/* Project Image - uses direct path from public folder */}
            {project.projectImage?.url && (
                <div className="relative w-full h-64 md:h-96 mb-6 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src={project.projectImage.url} // Use direct URL (e.g., /images/...)
                        alt={project.projectImage.alt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-semibold mr-2">Technologies:</span>
                {project.technologies?.map((tech) => (
                    <span key={tech.id || tech.name} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-6">
                {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline dark:text-cyan-400">
                        Live Site &rarr;
                    </Link>
                )}
                {project.repoUrl && (
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline dark:text-cyan-400">
                        Code Repository &rarr;
                    </Link>
                )}
            </div>

            {/* Description (Rendered as simple text) */}
            {/* Removed 'prose' classes as we are not rendering complex HTML */}
            <div className="max-w-none">
                <h2 className="text-2xl font-semibold mb-3">Description</h2>
                {/* Use project.description directly (should be string or null/undefined) */}
                {project.description ? (
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{project.description}</p>
                ) : (
                    <p>No description available.</p>
                )}
            </div>
        </article>
    );
}

// Metadata generation can be added later if needed for static builds
// export function generateStaticParams() { ... }
// export function generateMetadata({ params }) { ... }