export { Item as DatabaseItem } from '@prisma/client';

type Item = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  purchased: boolean;
};

export type ReturnItem = Item;

export type CreateItemParams = Omit<Item, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateItemParams = Omit<Item, 'id' | 'createdAt' | 'updatedAt'>;
