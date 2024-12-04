import React, { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ResidentForm } from './components/ResidentForm';
import { ResidentList } from './components/ResidentList';
import type { Resident } from './types/resident';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [residents, setResidents] = useState<Resident[]>([]);
  const [editingResident, setEditingResident] = useState<Resident | null>(null);

  const handleSubmit = (data: Omit<Resident, 'id' | 'isActive'>) => {
    if (editingResident) {
      setResidents(residents.map(r =>
        r.id === editingResident.id ? { ...data, id: r.id, isActive: r.isActive } : r
      ));
      setEditingResident(null);
    } else {
      setResidents([...residents, { ...data, id: crypto.randomUUID(), isActive: true }]);
    }
    setActiveTab('list');
  };

  const handleEdit = (resident: Resident) => {
    setEditingResident(resident);
    setActiveTab('input');
  };

  const handleDeactivate = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menonaktifkan data ini?')) {
      setResidents(residents.map(r =>
        r.id === id ? { ...r, isActive: false } : r
      ));
    }
  };

  const handleActivate = (id: string) => {
    setResidents(residents.map(r =>
      r.id === id ? { ...r, isActive: true } : r
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && <Home />}
        {activeTab === 'input' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingResident ? 'Edit Data Penduduk' : 'Input Data Penduduk'}
            </h2>
            <ResidentForm onSubmit={handleSubmit} />
          </div>
        )}
        {activeTab === 'list' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Daftar Penduduk</h2>
            <ResidentList
              residents={residents}
              onEdit={handleEdit}
              onDeactivate={handleDeactivate}
              onActivate={handleActivate}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
