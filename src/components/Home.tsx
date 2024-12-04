import React from 'react';
import { Users } from 'lucide-react';

export function Home() {
  return (
    <div className="text-center max-w-2xl mx-auto py-12">
      <Users size={64} className="mx-auto text-blue-600 mb-6" />
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Selamat Datang di Sistem Informasi Penduduk
      </h2>
      <p className="text-lg text-gray-600">
        Sistem ini membantu Anda mengelola data penduduk dengan mudah dan efisien.
        Gunakan menu di atas untuk navigasi ke halaman yang diinginkan.
      </p>
    </div>
  );
}