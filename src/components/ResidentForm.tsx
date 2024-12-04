import React, { useState } from 'react';
import type { Resident } from '../types/resident';

interface ResidentFormProps {
  onSubmit: (resident: Omit<Resident, 'id'>) => void;
}

export function ResidentForm({ onSubmit }: ResidentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
    agama: '',
    address: '',
    gender: 'male',
    birthDate: '',
    placeOfBirth: '',      // Tambahkan tempat lahir
    maritalStatus: '',     // Status perkawinan
    nationality: '',       // Kewarganegaraan
    bloodType: '',         // Golongan darah
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
      agama: '',
      address: '',
      gender: 'male',
      birthDate: '',
      placeOfBirth: '',
      maritalStatus: '',
      nationality: '',
      bloodType: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        {/* Nama Lengkap */}
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

        {/* NIK */}
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

        {/* Agama */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Agama</label>
          <div className="mt-2 space-x-4">
            {['Islam', 'Kristen', 'Katolik', 'Hindu', 'Budha', 'Khonghucu', 'Lainnya'].map((agama) => (
              <label className="inline-flex items-center" key={agama}>
                <input
                  type="radio"
                  checked={formData.agama === agama}
                  onChange={() => setFormData({ ...formData, agama: agama === 'Lainnya' ? '' : agama })}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">{agama}</span>
              </label>
            ))}
          </div>
          {formData.agama === 'Lainnya' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Sebutkan Agama</label>
              <input
                type="text"
                value={formData.agama || ''}
                onChange={(e) => setFormData({ ...formData, agama: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Masukkan agama"
              />
            </div>
          )}
        </div>

        {/* Alamat */}
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

        {/* Jenis Kelamin */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.gender === 'male'}
                onChange={() => setFormData({ ...formData, gender: 'male' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Pria</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={formData.gender === 'female'}
                onChange={() => setFormData({ ...formData, gender: 'female' })}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Wanita</span>
            </label>
          </div>
        </div>

        {/* Tanggal Lahir */}
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

        {/* Tempat Lahir */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tempat Lahir</label>
          <input
            type="text"
            value={formData.placeOfBirth}
            onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Status Perkawinan */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Status Perkawinan</label>
          <select
            value={formData.maritalStatus}
            onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Pilih Status</option>
            <option value="Belum Menikah">Belum Menikah</option>
            <option value="Menikah">Menikah</option>
            <option value="Cerai">Cerai</option>
          </select>
        </div>

        {/* Kewarganegaraan */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Kewarganegaraan</label>
          <input
            type="text"
            value={formData.nationality}
            onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Contoh: Indonesia"
          />
        </div>

        {/* Golongan Darah */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Golongan Darah</label>
          <select
            value={formData.bloodType}
            onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Pilih Golongan Darah</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
            <option value="Other">Lainnya</option>
          </select>
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
