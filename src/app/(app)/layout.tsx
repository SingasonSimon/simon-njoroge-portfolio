// src/app/(app)/layout.tsx
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks'; // <-- Import SocialLinks

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <SocialLinks /> {/* <-- Add SocialLinks component */}
      <main className="container mx-auto px-4 py-8 min-h-screen pb-28">
        {children}
      </main>
    </>
  );
}