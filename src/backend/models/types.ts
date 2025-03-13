
/**
 * Backend Data Types
 * 
 * Define your data models and types here.
 */

export interface UserCompany {
  id: string;
  name: string;
  email: string;
  size: string;
  industry: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  companyId: string;
  role: 'admin' | 'manager' | 'employee';
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'maintenance';
  assignedTo?: string;
  companyId: string;
  purchaseDate?: Date;
  purchaseValue?: number;
  currentValue?: number;
  createdAt: Date;
  updatedAt: Date;
}
