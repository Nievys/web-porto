import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently visible in the viewport.
 * Automatically updates activeSection ID (e.g., 'hero', 'about', 'projects', etc.)
 */
export function useActiveSection(sectionIds: string[], offsetPercent = 0.35): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetPercent;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offsetPercent]);

  return activeSection;
}
