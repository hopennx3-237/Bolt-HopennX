import { Edit2, Trash2 } from 'lucide-react';
import { City } from '../../pages/CityManagement';

interface CityTableProps {
  cities: City[];
  onEdit: (city: City) => void;
  onDelete: (id: number) => void;
}

export function CityTable({ cities, onEdit, onDelete }: CityTableProps) {
  if (cities.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Aucune ville enregistrée</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Num</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Libellé</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => (
            <tr
              key={city.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{city.num}</td>
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">{city.libelle}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{city.description}</td>
              <td className="px-6 py-4 text-sm">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(city)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Modifier"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(city.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
