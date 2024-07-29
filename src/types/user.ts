export type UserRole = 'ADMIN' | 'WORKER';

// export { User as DatabaseUser } from '@prisma/client';

type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  role?: UserRole | null;
};

export type ReturnUser = Omit<User, 'password'>;

export type CreateItemParams = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateItemParams = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
