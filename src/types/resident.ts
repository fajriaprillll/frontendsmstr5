export interface Resident {
  id: string;
  name: string;
  nik: string;
  agama: 'islam' | 'kristen' | 'katolik' | 'hindu' | 'Budha' | 'Khonghucu';
  address: string;
  gender: 'male' | 'female';
  birthDate: string;
}