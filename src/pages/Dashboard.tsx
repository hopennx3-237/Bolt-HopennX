import { Users, GraduationCap, Euro, Calendar, TrendingUp, Wallet } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { RecentRegistrations } from '../components/dashboard/RecentRegistrations';
import { AgencyPerformance } from '../components/dashboard/AgencyPerformance';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-yellow-10">
      <div className="p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Vue d'ensemble de votre auto-école</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Clients"
            value="247"
            icon={Users}
            trend={12}
            trendLabel="vs mois dernier"
          />
          <StatCard
            title="Inscriptions Actives"
            value="189"
            icon={GraduationCap}
            trend={8}
            trendLabel="vs mois dernier"
          />
          <StatCard
            title="Revenu Mensuel"
            value="45,230 €"
            icon={Euro}
            trend={15}
            trendLabel="vs mois dernier"
          />
          <StatCard
            title="Sessions d'Examen"
            value="24"
            icon={Calendar}
            trend={4}
            trendLabel="vs mois dernier"
          />
          <StatCard
            title="Taux de Réussite"
            value="78%"
            icon={TrendingUp}
            trend={5}
            trendLabel="vs mois dernier"
          />
          <StatCard
            title="Paiements en Attente"
            value="12,450 €"
            icon={Wallet}
            trend={-3}
            trendLabel="vs mois dernier"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentRegistrations />
          <AgencyPerformance />
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-6 text-gray-900">
        
        <div className="absolute top-0 right-0 w-40 h-10 bg-black/10 rounded-full -mr-10 -mt-10" />
        <div className="flex items-center justify-between">
          <div>
          <h2 className="text-2xl font-bold mb-3">
            Mode Démo Actif
          </h2>
          <p className="text-black/100 text-base leading-relaxed max-w-lg">
            Vous utilisez actuellement une version de démonstration de Hopenn Drive Data.
            Toutes les données affichées sont fictives et à titre d'exemple.
          </p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-7 h-7" />
          </div>
        
        </div>
      </div>
    </div>
  );
}
