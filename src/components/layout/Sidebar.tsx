import { useState } from 'react';
import { LogOut, X, Menu } from 'lucide-react';
import { menuConfig } from '../../config/menuConfig';
import { CollapsibleSection } from './CollapsibleSection';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Sidebar({ currentPath, onNavigate }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    console.log('Déconnexion en mode démo');
  };

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setIsMobileOpen(false);
    window.location.reload();
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-gray-950 text-gray-300">
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-bold text-xl">H</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-sm leading-tight">Hopenn Drive</h1>
            <p className="text-gray-500 text-xs">Data Management</p>
          </div>
        </div>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        {menuConfig.map((item) => {
          const Icon = item.icon;

          if (item.children && item.children.length > 0) {
            return (
              <CollapsibleSection
                key={item.id}
                item={item}
                currentPath={currentPath}
                onNavigate={handleNavigate}
              />
            );
          }

          const isActive = currentPath === item.path;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 rounded-lg ${
                isActive
                  ? 'bg-yellow-500/10 text-yellow-500 border-l-4 border-yellow-500 font-medium'
                  : 'text-gray-300 hover:bg-gray-800 border-l-4 border-transparent'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-gray-800 p-4 space-y-3">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Admin User</p>
            <p className="text-gray-500 text-xs truncate">admin@hopenn.com</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          <span>Déconnexion</span>
        </button>

        <div className="flex items-center gap-2 px-2 py-1.5 bg-yellow-500/10 rounded-lg">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-yellow-500 text-xs font-medium">Mode démo</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-gray-900 text-white rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      <aside className="hidden lg:block w-66 h-screen fixed left-0 top-0 z-30"> 
        <SidebarContent />
      </aside>

      {isMobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="lg:hidden fixed left-0 top-0 bottom-0 w-64 z-50">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
