import React from 'react';
import { Users } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users size={32} />
            <h1 className="text-2xl font-bold">Sistem Informasi Penduduk</h1>
          </div>
          <nav className="space-x-1">
            {['home', 'input', 'list'].map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-blue-600'
                    : 'text-white hover:bg-blue-500'
                }`}
              >
                {tab === 'home' && 'Home'}
                {tab === 'input' && 'Input Penduduk'}
                {tab === 'list' && 'Daftar Penduduk'}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}