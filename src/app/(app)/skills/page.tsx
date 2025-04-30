// src/app/(app)/skills/page.tsx
import type { Metadata } from 'next';
import { skillsData } from '@/lib/data/skills'; // Import your skills data

export const metadata: Metadata = {
  title: 'My Skills | Portfolio',
  description: 'Overview of my technical skills in web development, design, and related technologies.',
};

export default function SkillsPage() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 md:mb-16">My Skills</h1>

        <div className="space-y-10">
          {skillsData.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-neutral-300 dark:border-neutral-700">
                {category.name}
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon; // Get icon component
                  return (
                    <li
                      key={skill.name}
                      className="flex flex-col items-center p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      {IconComponent && (
                        <IconComponent className="w-10 h-10 mb-3 text-cyan-600 dark:text-cyan-400" />
                      )}
                      <span className="text-sm font-medium text-center text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                      </span>
                      {/* Optional: Add level indicator here if you add it to data */}
                      {/* {skill.level && <span className="text-xs text-neutral-500 mt-1">{skill.level}</span>} */}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}