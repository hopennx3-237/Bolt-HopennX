import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { City } from '../../pages/CityManagement';

interface CityModalProps {
  isOpen: boolean;
  city: City | null;
  onClose: () => void;
  onSave: (city: Omit<City, 'id'>) => void;
}

export function CityModal({ isOpen, city, onClose, onSave }: CityModalProps) {
  const [formData, setFormData] = useState({ num: '', libelle: '', description: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (city) {
      setFormData({
        num: city.num.toString(),
        libelle: city.libelle,
        description: city.description
      });
    } else {
      setFormData({ num: '', libelle: '', description: '' });
    }
    setErrors({});
  }, [city, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.num.trim()) {
      newErrors.num = 'Le numéro est requis';
    } else if (isNaN(Number(formData.num))) {
      newErrors.num = 'Le numéro doit être un nombre';
    }

    if (!formData.libelle.trim()) {
      newErrors.libelle = 'Le libellé est requis';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La description est requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSave({
        num: Number(formData.num),
        libelle: formData.libelle,
        description: formData.description
      });
      setFormData({ num: '', libelle: '', description: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">
              {city ? 'Modifier la ville' : 'Nouvelle ville'}
            </h2>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Numéro
              </label>
              <input
                type="number"
                value={formData.num}
                onChange={(e) => setFormData({ ...formData, num: e.target.value })}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.num ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Ex: 1"
              />
              {errors.num && <p className="text-red-600 text-sm mt-1">{errors.num}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Libellé
              </label>
              <input
                type="text"
                value={formData.libelle}
                onChange={(e) => setFormData({ ...formData, libelle: e.target.value })}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.libelle ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Ex: Douala"
              />
              {errors.libelle && <p className="text-red-600 text-sm mt-1">{errors.libelle}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                  errors.description ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Ex: Capitale économique du Cameroun"
                rows={3}
              />
              {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {city ? 'Modifier' : 'Créer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
