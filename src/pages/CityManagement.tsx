import { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2 } from 'lucide-react';
import { CityModal } from '../components/cities/CityModal';
import { CityTable } from '../components/cities/CityTable';

export interface City {
  id: number;
  num: number;
  libelle: string;
  description: string;
}

const mockCities: City[] = [
  { id: 1, num: 1, libelle: 'Douala', description: 'Capitale économique du Cameroun' },
  { id: 2, num: 2, libelle: 'Yaoundé', description: 'Capitale politique du Cameroun' },
  { id: 3, num: 3, libelle: 'Bafoussam', description: "Chef-lieu de la région de l'Ouest" },
  { id: 4, num: 4, libelle: 'Buea', description: 'Capitale du Cameroun anglophone' },
  { id: 5, num: 5, libelle: 'Kumba', description: 'Ville du Cameroun anglophone' }
];

export function CityManagement() {
  const [cities, setCities] = useState<City[]>(mockCities);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCity, setEditingCity] = useState<City | null>(null);

  const handleAddCity = (city: Omit<City, 'id'>) => {
    const newCity: City = {
      ...city,
      id: Math.max(...cities.map(c => c.id), 0) + 1
    };
    setCities([...cities, newCity]);
    setIsModalOpen(false);
  };

  const handleEditCity = (city: City) => {
    setEditingCity(city);
    setIsModalOpen(true);
  };

  const handleSaveCity = (updatedCity: Omit<City, 'id'>) => {
    if (editingCity) {
      setCities(cities.map(c => c.id === editingCity.id ? { ...c, ...updatedCity } : c));
      setEditingCity(null);
    }
    setIsModalOpen(false);
  };

  const handleDeleteCity = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette ville ?')) {
      setCities(cities.filter(c => c.id !== id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCity(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="p-6 lg:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Villes</h1>
                <span className="inline-block mt-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  Mode démo
                </span>
              </div>
            </div>
            <p className="text-gray-600">Gestion des villes du réseau (données mockées)</p>
          </div>
          <button
            onClick={() => {
              setEditingCity(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
          >
            <Plus size={20} />
            Nouvelle ville
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <CityTable
            cities={cities}
            onEdit={handleEditCity}
            onDelete={handleDeleteCity}
          />
        </div>
      </div>

      <CityModal
        isOpen={isModalOpen}
        city={editingCity}
        onClose={handleCloseModal}
        onSave={editingCity ? handleSaveCity : handleAddCity}
      />
    </div>
  );
}
