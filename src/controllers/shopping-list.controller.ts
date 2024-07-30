import {
  Body,
  Controller, Delete, Get, Path, Post, Put, Route,
} from 'tsoa';
import { ShoppingListService } from 'services/shopping-list.service';
import httpStatus from 'http-status';
import { CreateItemParams, ReturnItem, UpdateItemParams } from 'types/item';
import { Item } from '@prisma/client';

@Route('shopping-list')
export class ShoppingListController extends Controller {
  @Get()
  public async index(): Promise<Array<Item>> {
    const items = await ShoppingListService.all();
    this.setStatus(httpStatus.OK);
    return items;
  }

  @Get('{id}')
  public async find(@Path() id : number): Promise<Item | null> {
    const item = await ShoppingListService.find(id);
    this.setStatus(httpStatus.OK);
    return item;
  }

  @Post()
  // eslint-disable-next-line max-len
  public async createItem(@Body() body: CreateItemParams): Promise<any> {
    const validateQRReturn = await ShoppingListService.create(body);
    this.setStatus(httpStatus.CREATED);
    return validateQRReturn;
  }

  @Put('{id}')
  public async update(
    @Path() id : number,
      @Body() requestBody : UpdateItemParams,
  ): Promise<ReturnItem> {
    const item = await ShoppingListService.update(id, requestBody);
    this.setStatus(httpStatus.OK);
    return item;
  }

  @Delete('{id}')
  public async destroy(@Path() id: number): Promise<boolean> {
    await ShoppingListService.destroy(id);
    this.setStatus(httpStatus.OK);
    return true;
  }
}
