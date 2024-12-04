import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import type { Resident } from '../types/resident';

interface ResidentListProps {
  residents: Resident[];
  onEdit: (resident: Resident) => void;
  onDelete: (id: string) => void;
}

export function ResidentList({ residents, onEdit, onDelete }: ResidentListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agama</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Kelamin</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Lahir</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {residents.map((resident, index) => (
            <tr key={resident.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{resident.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.nik}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{resident.agama}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{resident.address}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {resident.gender === 'male' ? 'Pria' : 'Wanita'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(resident.birthDate).toLocaleDateString('id-ID')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                <button
                  onClick={() => onEdit(resident)}
                  className="text-yellow-600 hover:text-yellow-900"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => onDelete(resident.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}