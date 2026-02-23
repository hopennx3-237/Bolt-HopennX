import { useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { MenuItem } from '../../config/menuConfig';

interface CollapsibleSectionProps {
  item: MenuItem;
  currentPath: string;
  onNavigate: (path: string) => void;
}


export function CollapsibleSection({ item, currentPath, onNavigate }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const Icon = item.icon;

  const hasActiveChild = item.children?.some(child => currentPath === child.path);

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 text-gray-300 hover:bg-gray-800 transition-colors duration-200 rounded-lg group"
      >
        <div className="flex items-center gap-3">
          <Icon size={20} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
          <span className="text-sm font-medium">{item.label}</span>
        </div>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button> 

      {isOpen && item.children && (
        <div className="mt-1 space-y-1">
          {item.children.map((child) => {
            const ChildIcon = child.icon;
            const isActive = currentPath === child.path;

            return (
              <button
                key={child.id}
                onClick={() => onNavigate(child.path)}
                className={`w-full flex items-center justify-between pl-12 pr-4 py-2 text-sm transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'bg-yellow-500/10 text-yellow-500 border-l-4 border-yellow-500 font-medium'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ChildIcon size={16} />
                  <span>{child.label}</span>
                </div>
                {child.badge && (
                  <span className="bg-yellow-500 text-gray-900 text-xs font-bold rounded-full px-2 py-0.5">
                    {child.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

