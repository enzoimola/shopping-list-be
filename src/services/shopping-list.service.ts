import { Item, Prisma } from '@prisma/client';
import prisma from 'root/prisma/client';
import { ApiError } from 'utils/apiError';
import { errors } from 'config/errors';
import {
  CreateItemParams, DatabaseItem, ReturnItem, UpdateItemParams,
} from 'types/item';

export class ShoppingListService {
  static find = async (id: number): Promise<Item | null> => {
    const item = await prisma.item.findUnique({ where: { id } });
    if (!item) {
      throw new ApiError(errors.NOT_FOUND_ITEM);
    }
    return item;
  };

  static all = async (): Promise<Array<Item>> => prisma.item.findMany();

  static create = async (itemBody: CreateItemParams): Promise<any> => {
    let item: DatabaseItem | null = null;

    const data = {
      name: itemBody.name,
      description: itemBody.description,
      quantity: itemBody.quantity,
      purchased: false,
    };

    try {
      item = await prisma.item.create({ data });
    } catch (e) {
      // https://www.prisma.io/docs/reference/api-reference/error-reference#p2002
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
        throw new ApiError(errors.ITEM_ALREADY_EXISTS);
      }
      throw (e);
    }
    return item;
  };

  static update = async (id: number, itemData: UpdateItemParams): Promise<ReturnItem> => {
    const item = await prisma.item.findUnique({ where: { id } });
    if (!item) {
      throw new ApiError(errors.NOT_FOUND_ITEM);
    }

    const updatedUser = await prisma.item.update({
      where: { id: item.id },
      data: {
        ...itemData,
      },
    });
    return updatedUser;
  };

  static destroy = async (id : number) : Promise<void> => {
    const item = await prisma.item.findUnique({ where: { id } });

    if (!item) {
      throw new ApiError(errors.NOT_FOUND_ITEM);
    }

    await prisma.item.delete({ where: { id } });
  };
}
