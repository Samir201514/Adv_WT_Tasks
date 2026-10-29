import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dtos/create-product.dot.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() dto: CreateProductDto){
    return await this.productsService.create(dto);
  }

  @Get()
  async findAll(){
    return await this.productsService.findAll();
  }
}