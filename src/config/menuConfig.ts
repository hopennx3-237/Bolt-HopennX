import {
  LayoutDashboard,
  MapPin,
  Building2,
  Map,
  Users,
  Briefcase,
  Calendar,
  UserCheck,
  GraduationCap,
  CreditCard,
  History,
  UserCog,
  Receipt,
  BarChart3,
  TrendingUp,
  DollarSign,
  Settings,
  Shield,
  Package
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  path: string;
  badge?: number;
  children?: MenuItem[];
}

export const menuConfig: MenuItem[] = [
  {
    id: 'home',
    label: 'Accueil',
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  {
    id: 'data',
    label: 'Données de Base',
    icon: Package,
    path: '/data',
    children: [
      { id: 'cities', label: 'Villes', icon: MapPin, path: '/data/cities' },
      { id: 'agencies', label: 'Agences', icon: Building2, path: '/data/agencies' },
      { id: 'zones', label: 'Zones', icon: Map, path: '/data/zones' },
      { id: 'sales', label: 'Commerciaux', icon: Users, path: '/data/sales' },
      { id: 'services', label: 'Services', icon: Briefcase, path: '/data/services' },
      { id: 'exam-sessions', label: "Sessions d'examen", icon: Calendar, path: '/data/exam-sessions' },
      { id: 'clients', label: 'Clients', icon: UserCheck, path: '/data/clients' },
      { id: 'trainings', label: 'Formations', icon: GraduationCap, path: '/data/trainings' }
    ]
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: CreditCard,
    path: '/finance',
    children: [
      { id: 'registrations', label: 'Inscriptions', icon: UserCheck, path: '/finance/registrations', badge: 5 },
      { id: 'payment-history', label: 'Histo. Paiement', icon: History, path: '/finance/payment-history' },
      { id: 'client-tracking', label: 'Suivie Clients', icon: UserCog, path: '/finance/client-tracking' },
      { id: 'expense-history', label: 'Histo. Dépenses', icon: Receipt, path: '/finance/expense-history' },
      { id: 'transaction-history', label: 'Histo. Transaction', icon: History, path: '/finance/transaction-history' }
    ]
  },
  {
    id: 'reporting',
    label: 'Reporting Financier',
    icon: BarChart3,
    path: '/reporting',
    children: [
      { id: 'reg-stats', label: 'Stats. inscriptions', icon: TrendingUp, path: '/reporting/registration-stats' },
      { id: 'city-perf', label: 'Performance Villes', icon: MapPin, path: '/reporting/city-performance' },
      { id: 'agency-perf', label: 'Perfor. Agences', icon: Building2, path: '/reporting/agency-performance' },
      { id: 'zone-perf', label: 'Perfor. Zones', icon: Map, path: '/reporting/zone-performance' },
      { id: 'training-perf', label: 'Perfor. Formations', icon: GraduationCap, path: '/reporting/training-performance' },
      { id: 'sales-perf', label: 'Perfor. commerciaux', icon: Users, path: '/reporting/sales-performance' },
      { id: 'transaction-report', label: 'Bilan Transaction', icon: DollarSign, path: '/reporting/transaction-report' }
    ]
  },
  {
    id: 'settings',
    label: 'Paramètres',
    icon: Settings,
    path: '/settings',
    children: [
      { id: 'users', label: 'Utilisateurs', icon: Users, path: '/settings/users' },
      { id: 'roles', label: 'Rôles & permissions', icon: Shield, path: '/settings/roles' },
      { id: 'service-packs', label: 'Services / Packs', icon: Package, path: '/settings/service-packs' },
      { id: 'system', label: 'Paramètres système', icon: Settings, path: '/settings/system' }
    ]
  }
];
