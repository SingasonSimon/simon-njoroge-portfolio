// src/app/(app)/about/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link'; // Import Link

export const metadata: Metadata = {
  title: 'About Me | Simon Njoroge Portfolio',
  description: 'Learn more about Simon Njoroge, his skills, and journey as a web developer and designer based in Kenya.',
};

export default function AboutPage() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 md:mb-16">About Me</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 relative overflow-hidden rounded-full shadow-lg border-4 border-neutral-200 dark:border-neutral-700">
            <Image
              src="/images/profile-photo.jpg" // <<< REPLACE with your image file name in /public/images/
              alt="A photo of Simon Njoroge"   // <<< REPLACE with good alt text
              fill
              sizes="(max-width: 768px) 192px, 240px"
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content - DRAFT - Needs your input */}
          <div className="text-lg text-neutral-700 dark:text-neutral-300 space-y-4 text-center md:text-left">
            <p>
              Hello! I'm <strong className="font-semibold">Simon Njoroge</strong>, a motivated **Web Developer and Designer** based in Rongai, Nakuru County, Kenya. I'm driven by the challenge and creativity involved in building engaging, user-friendly, and visually appealing digital experiences on the web. What excites me most is [Your "Why" - e.g., the process of turning ideas into functional applications, solving complex frontend puzzles, crafting intuitive interfaces, learning new technologies].
            </p>
            <p>
              I'm currently expanding my knowledge and skills as a student at <strong className="font-semibold">Kabarak University</strong>, where I'm pursuing a degree in <strong className="font-semibold">[Your Course/Major]</strong>. My journey into this field began when [Your Origin Story - e.g., I built my first static website for fun, I took an introductory programming class, I became fascinated by how websites worked]. Since then, my passion for technology and design has only grown.
            </p>
             <p>
               During my studies and personal projects, I've particularly enjoyed working with <strong className="font-semibold">[Mention 1-2 Specific Technologies, e.g., React and Next.js]</strong> and I've gained practical understanding of core concepts like <strong className="font-semibold">[Mention 1-2 Specific Concepts, e.g., responsive design principles and component-based architecture]</strong>. You can see some examples on my <Link href="/projects" className="text-cyan-600 hover:underline dark:text-cyan-400 font-medium">Projects</Link> page.
            </p>
            <p>
              My approach to work involves striving to write <strong className="font-semibold">clean, maintainable code</strong> while always prioritizing a <strong className="font-semibold">positive and intuitive user experience</strong>. I believe great web applications are built not just with code, but with careful consideration for the end-user. Check out my detailed <Link href="/skills" className="text-cyan-600 hover:underline dark:text-cyan-400 font-medium">Skills</Link> list for more.
            </p>
            <p>
              Looking ahead, I'm actively <strong className="font-semibold">[Your Goal - e.g., seeking internship opportunities where I can contribute to real-world projects using Next.js, or eager to collaborate on freelance projects focused on frontend development and UI design]</strong>. I'm always open to learning and tackling new challenges.
            </p>
            <p>
              Outside of tech, I enjoy [Your Hobbies/Interests - e.g., reading tech blogs, exploring the Rift Valley, playing football, listening to podcasts]. Don't hesitate to <Link href="/contact" className="text-cyan-600 hover:underline dark:text-cyan-400 font-medium">reach out</Link>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}