interface Registration {
  id: string;
  name: string;
  training: string;
  date: string;
  status: 'confirmed' | 'pending';
}

const mockRegistrations: Registration[] = [
  { id: '1', name: 'Marie Dubois', training: 'Permis B', date: '20/02/2026', status: 'confirmed' },
  { id: '2', name: 'Jean Martin', training: 'Permis B + AAC', date: '19/02/2026', status: 'pending' },
  { id: '3', name: 'Sophie Bernard', training: 'Permis B', date: '18/02/2026', status: 'confirmed' },
  { id: '4', name: 'Luc Petit', training: 'Code + Conduite', date: '17/02/2026', status: 'confirmed' }
];

export function RecentRegistrations() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Inscriptions Récentes</h2>
      <div className="space-y-4">
        {mockRegistrations.map((registration) => (
          <div
            key={registration.id}
            className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0"
          >
            <div>
              <p className="font-medium text-gray-900">{registration.name}</p>
              <p className="text-sm text-gray-500">{registration.training}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">{registration.date}</p>
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  registration.status === 'confirmed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {registration.status === 'confirmed' ? 'Confirmé' : 'En attente'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
