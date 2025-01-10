import React, { createContext, useState, useContext, useEffect } from 'react';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  toggleSidebar: () => {},
});

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize based on screen size
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => {
      // Only auto-collapse on mobile
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext); 