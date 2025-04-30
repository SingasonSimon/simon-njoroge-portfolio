// src/app/(app)/contact/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
// Import icons if you want to add them to email/social links
import { BiEnvelope, BiLinkExternal } from 'react-icons/bi'; // Example icons

export const metadata: Metadata = {
  title: 'Contact Me | Simon Njoroge Portfolio', // Use your name
  description: 'Get in touch with me for collaborations, questions, or hiring opportunities.',
};

export default function ContactPage() {
  // Replace with your actual email
  const contactEmail = "your.email@example.com";

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 md:mb-16">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h2 className='text-2xl font-semibold mb-4'>Get In Touch</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              I'm currently open to new opportunities, collaborations, or freelance projects. Feel free to reach out if you have any questions or just want to connect!
            </p>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              The best way to reach me is via email:
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-cyan-600 hover:underline dark:text-cyan-400 text-lg"
            >
              <BiEnvelope /> {contactEmail}
            </a>
            {/* Add links to LinkedIn, GitHub, etc. here if desired */}
            {/* Example:
            <p className="text-lg text-neutral-700 dark:text-neutral-300 pt-4">
              You can also find me on:
            </p>
            <div className="flex space-x-4">
               <Link href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400"><FaLinkedin className="w-6 h-6" /></Link>
               <Link href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400"><FaGithub className="w-6 h-6" /></Link>
            </div>
            */}
          </div>

          {/* Contact Form Section */}
          <div>
             <h2 className='text-2xl font-semibold mb-4'>Send a Message</h2>
            {/* The form won't submit data anywhere yet */}
            <form action="#" method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
               <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="Regarding project..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm bg-white dark:bg-neutral-800 text-black dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  // Add disabled state styling later if adding client-side logic
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-neutral-900 focus:ring-cyan-500"
                >
                  Send Message
                </button>
                 <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mt-3">
                   (Note: Form submission is not yet functional)
                 </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}