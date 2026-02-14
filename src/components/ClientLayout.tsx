'use client';

import { usePathname } from 'next/navigation';
import FloatingHearts from "@/components/FloatingHearts";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";
import RandomSurprise from "@/components/RandomSurprise";
import EasterEgg from "@/components/EasterEgg";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAskPage = pathname === '/';

  return (
    <>
      <FloatingHearts />
      <CursorTrail />
      <RandomSurprise />
      <EasterEgg />
      {!isAskPage && <Navigation />}
      <main style={{ 
        paddingTop: isAskPage ? '0' : '80px', 
        position: 'relative', 
        zIndex: 1 
      }}>
        {children}
      </main>
    </>
  );
}
