// src/components/SocialLinks.tsx
import Link from 'next/link';
// Import necessary icons - Added WhatsApp, Instagram, Telegram
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaTelegramPlane } from 'react-icons/fa6';
// Keep BiEnvelope if you still want an email link
// import { BiEnvelope } from 'react-icons/bi';

// Define your social links here - ADDED WhatsApp, Instagram, Telegram
const socialLinks = [
    { label: 'GitHub', href: '...', icon: FaGithub },
    { label: 'LinkedIn', href: '...', icon: FaLinkedin },
    { label: 'WhatsApp', href: '...', icon: FaWhatsapp },
    { label: 'Instagram', href: '...', icon: FaInstagram },
    // { // <-- Start comment
    //   label: 'Telegram',
    //   href: 'https://t.me/x_dash_io',
    //   icon: FaTelegramPlane,
    // }, // <-- End comment
  ];
export default function SocialLinks() {
  return (
    // Keep existing positioning and styling
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        // Add checks for new placeholders if needed
         if (link.href.includes('YOUR_') || (link.label === 'WhatsApp' && link.href.includes('NUMBER'))) {
             // Optionally hide link if placeholder URL/number is still present
             // return null;
         }


        return (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to my ${link.label}`}
            title={link.label}
            className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full text-neutral-800 dark:text-neutral-200 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-colors duration-200 shadow-md"
          >
            <IconComponent className="w-5 h-5" />
          </Link>
        );
      })}
    </div>
  );
}