// src/app/(app)/resume/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi'; // Import download icon

export const metadata: Metadata = {
  title: 'Resume | Simon Njoroge Portfolio', // Use your name
  description: 'Download my latest resume to learn more about my skills and experience.',
};

export default function ResumePage() {
  const resumeFilename = "SimonNjoroge_Resume.pdf"; // IMPORTANT: Replace with your actual PDF filename
  const resumeUrl = `/docs/${resumeFilename}`; // Path relative to the 'public' directory

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 md:mb-8">My Resume</h1>

        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl mx-auto">
          You can view or download my latest resume for a detailed overview of my qualifications, experience, and education.
        </p>

        <Link
          href={resumeUrl}
          download={resumeFilename} // Suggests download with this filename
          target="_blank" // Opens in new tab as fallback if download attribute isn't fully supported
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-medium rounded-lg shadow hover:bg-cyan-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
        >
          <BiDownload className="w-5 h-5" />
          Download Resume (PDF)
        </Link>

        {/* Optional: You could add a preview or highlights section here later */}

      </div>
    </section>
  );
}