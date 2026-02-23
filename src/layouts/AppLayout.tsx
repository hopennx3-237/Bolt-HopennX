import { useState, ReactNode } from 'react';
import { Sidebar } from '../components/layout/Sidebar';

interface AppLayoutProps {
  children: ReactNode;
  page: string;
}

export function AppLayout({ children, page }: AppLayoutProps) {
  const [currentPath, setCurrentPath] = useState(page);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath={currentPath} onNavigate={handleNavigate} />

      <main className="lg:ml-64 min-h-screen pb-20">
        {children}
      </main>
    </div>
  );
}
