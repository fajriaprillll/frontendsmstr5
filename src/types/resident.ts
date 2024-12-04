export interface Resident {
  id: string;
  name: string;
  nik: string;
  agama: string;
  address: string;
  gender: 'male' | 'female';
  birthDate: string;
  isActive: boolean;  // Menambahkan properti isActive
}
