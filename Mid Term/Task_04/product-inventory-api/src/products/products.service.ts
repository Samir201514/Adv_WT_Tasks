import { Products } from './entities/products.entity.js';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dot.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productsRepo: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto): Promise<Products>{
    try{
        const product = await this.productsRepo.create(dto)
        return await this.productsRepo.save(product);
    }
    catch{
        throw new BadRequestException("Product Creation Failed!")
    }
  }

  async findAll(): Promise<Products[]>{
    try{
        return await this.productsRepo.find();
    }
    catch{
        throw new BadRequestException("No Product Found!")
    }
  }
}