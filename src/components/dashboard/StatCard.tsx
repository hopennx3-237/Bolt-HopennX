import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend: number;
  trendLabel: string;
}

export function StatCard({ title, value, icon: Icon, trend, trendLabel }: StatCardProps) {
  const isPositive = trend > 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-3">{value}</p>
          <div className="flex items-center gap-1">
            <TrendIcon
              size={16}
              className={isPositive ? 'text-green-600' : 'text-red-600'}
            />
            <span
              className={`text-sm font-medium ${
                isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {isPositive ? '+' : ''}{trend}%
            </span>
            <span className="text-gray-500 text-sm">{trendLabel}</span>
          </div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <Icon size={24} className="text-yellow-600" />
        </div>
      </div>
    </div>
  );
}
