import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
  isDesignsPage: false,
});

export function useRouter() {
  return useContext(RouterContext);
}

function normalizePath(pathname, hash = '') {
  // Support /designs, /work, and hash fallbacks #designs, #/designs
  if (
    pathname === '/designs' ||
    pathname === '/designs/' ||
    pathname === '/work' ||
    pathname === '/work/' ||
    hash === '#designs' ||
    hash === '#/designs'
  ) {
    return '/designs';
  }
  return '/';
}

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname, window.location.hash);
    }
    return '/';
  });

  const navigate = useCallback((to) => {
    if (typeof window === 'undefined') return;

    // Handle hash links like #services or #contact
    if (to.startsWith('#')) {
      if (currentPath === '/designs') {
        // If we are on /designs, switch back to home with the hash
        window.history.pushState(null, '', `/${to}`);
        setCurrentPath('/');
        // After DOM renders, scroll to element
        setTimeout(() => {
          const el = document.querySelector(to);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, standard scroll
        const el = document.querySelector(to);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', to);
      }
      return;
    }

    // Handle full path navigation
    const targetPath = to === '/designs' || to === '/work' ? '/designs' : '/';
    
    if (targetPath !== currentPath) {
      window.history.pushState(null, '', to);
      setCurrentPath(targetPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      const newPath = normalizePath(window.location.pathname, window.location.hash);
      setCurrentPath(newPath);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Sync document title and meta description dynamically
  useEffect(() => {
    if (currentPath === '/designs') {
      document.title = "Design Portfolio | Techshoyo";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          "Explore Techshoyo's creative portfolio featuring branding, logo design, posters, social media creatives, UI/UX, and digital design projects."
        );
      }
    } else {
      document.title = "TechShoyo — We build websites that make people stay";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          "Websites, landing pages, link pages, and forms, designed and built by a team of three Data Science & AI students at Christ University Delhi NCR."
        );
      }
    }
  }, [currentPath]);

  const isDesignsPage = currentPath === '/designs';

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isDesignsPage }}>
      {children}
    </RouterContext.Provider>
  );
}
