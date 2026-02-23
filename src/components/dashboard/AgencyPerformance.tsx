interface Agency {
  id: string;
  name: string;
  revenue: number;
  maxRevenue: number;
}

const mockAgencies: Agency[] = [
  { id: '1', name: 'Agence Paris Centre', revenue: 15230, maxRevenue: 16000 },
  { id: '2', name: 'Agence Lyon Part-Dieu', revenue: 12450, maxRevenue: 16000 },
  { id: '3', name: 'Agence Marseille Vieux-Port', revenue: 10890, maxRevenue: 16000 },
  { id: '4', name: 'Agence Toulouse Capitole', revenue: 6660, maxRevenue: 16000 }
];

export function AgencyPerformance() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Performance par Agence</h2>
      <div className="space-y-5">
        {mockAgencies.map((agency) => {
          const percentage = (agency.revenue / agency.maxRevenue) * 100;

          return (
            <div key={agency.id}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{agency.name}</span>
                <span className="text-sm font-bold text-gray-900">{formatCurrency(agency.revenue)}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
