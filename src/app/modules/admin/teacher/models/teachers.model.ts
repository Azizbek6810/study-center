export interface TeachersResponse {
  id: number;
  name: string;
  description: string;
  address: string;
  dateOfBirth: string; // Date
  dateOfRegister: string; // Date
  phone: string;
  email: string;
  telegramUserName: string;
  specialization: string;
}

export interface TeachersRequest {
  name: string;
  description: string;
  address: string;
  dateOfBirth: string; // Date
  dateOfRegister: string; // Date
  phone: string;
  email: string;
  telegramUserName: string;
  specialization: string;
}
