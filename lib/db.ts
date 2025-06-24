export interface User {
  id: string;
  email: string;
  password: string; 
  name: string;
  phone: string;
  address: string;
  city: string;
  verified: boolean;
  verificationCode?: string;
}

export const users: User[] = [];