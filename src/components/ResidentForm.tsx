import React, { useState } from 'react';
import type { Resident } from '../types/resident';

interface ResidentFormProps {
  onSubmit: (resident: Omit<Resident, 'id'>) => void;
}

export function ResidentForm({ onSubmit }: ResidentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
    agama:'',
    address: '',
    gender: 'male',
    birthDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      nik: '',
      agama:'',
      address: '',
      gender: 'male',
      birthDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">NIK</label>
          <input
            type="text"
            required
            pattern="[0-9]{16}"
            title="NIK harus 16 digit"
            value={formData.nik}
            onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Agama</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.agama === 'Islam'}
                onChange={() => setFormData({ ...formData, agama: 'Islam' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Islam</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.agama === 'Kristen'}
                onChange={() => setFormData({ ...formData, agama: 'Kristen' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Kristen</span>
            </label>
          </div>
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700">Alamat</label>
          <textarea
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.gender === 'Male'}
                onChange={() => setFormData({ ...formData, gender: 'Male' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Pria</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.gender === 'Female'}
                onChange={() => setFormData({ ...formData, gender: 'Female' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Wanita</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
          <input
            type="date"
            required
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}