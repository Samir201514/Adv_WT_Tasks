import { Products } from './entities/products.entity.js';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dot.js';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto.js';
import { UpdateProductDto } from './dtos/update-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productsRepo: Repository<Products>,
  ) {}

  async create(
    dto: CreateProductDto,
  ): Promise<{ message: string; data: Products }> {
    try {
      const product = this.productsRepo.create(dto);
      const saveProduct = await this.productsRepo.save(product);
      return {
        message: 'Product Created Successfully.',
        data: saveProduct,
      };
    } catch {
      throw new BadRequestException('Product Creation Failed!');
    }
  }

  async findAll(): Promise<{
    message: string;
    count: number;
    data: Products[];
  }> {
    const product = await this.productsRepo.find({
      order: {
        createAt: 'DESC',
      },
    });
    if (product.length === 0) {
      throw new BadRequestException('No Product Found!');
    }
    return {
      message: 'List of Products',
      count: product.length,
      data: product,
    };
  }

  async findOne(id: number): Promise<{ message: string; data: Products }> {
    const product = await this.productsRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product with ID: ${id} Not Found!`);
    }
    return {
      message: `Product Found By ID: ${id}`,
      data: product,
    };
  }

  async update(
    id: number,
    dto: PartialUpdateProductDto,
  ): Promise<{ message: string; data: Products | null }> {
    const hasProduct = await this.productsRepo.findOneBy({ id });

    if (!hasProduct) {
      throw new NotFoundException(`Product with ID: ${id} Not Found!`);
    }

    await this.productsRepo.update(id, dto);
    const product = await this.productsRepo.findOneBy({ id });

    return {
      message: `Product with ID: ${id} Updated!`,
      data: product,
    };
  }

  async replace(
    id: number,
    dto: UpdateProductDto,
  ): Promise<{ message: string; data: Products | null }> {
    const hasProduct = await this.productsRepo.findOneBy({ id });

    if (!hasProduct) {
      throw new NotFoundException(`Product with ID: ${id} Not Found!`);
    }

    await this.productsRepo.update(id, dto);
    const product = await this.productsRepo.findOneBy({ id });

    return {
      message: `Product with ID: ${id} Replaced!`,
      data: product,
    };
  }

  async remove(id: number): Promise<{ message: string; id: number }> {
    const hasProduct = await this.productsRepo.findOneBy({ id });

    if (!hasProduct) {
      throw new NotFoundException(`Product with ID: ${id} Not Found!`);
    }

    await this.productsRepo.delete(id);

    return {
      message: 'Product Removed!',
      id: id,
    };
  }

  async findByCategory(
    category: string,
  ): Promise<{ message: string; count: number; data: Products[] | null }> {
    const product = await this.productsRepo.find({ where: { category } });
    if (product.length === 0) {
      throw new NotFoundException(
        `Product with Category: ${category}. Not Found!`,
      );
    }
    return {
      message: 'Product Found By Category',
      count: product.length,
      data: product,
    };
  }

  async search(
    keyword: string,
  ): Promise<{ message: string; count: number; data: Products[] | null }> {
    const product = await this.productsRepo.find({
      where: { name: ILike(`%${keyword}%`) },
    });
    if (product.length === 0) {
      throw new NotFoundException(`Product with Name: ${keyword}. Not Found!`);
    }
    return {
      message: 'Products Found By Search',
      count: product.length,
      data: product,
    };
  }

  async toggleActive(
    id: number,
  ): Promise<{ message: string; data: Products | null }> {
    const hasProduct = await this.productsRepo.findOneBy({ id });
    if (!hasProduct) {
      throw new NotFoundException(`Product with ID: ${id}. Not Found!`);
    }
    hasProduct.isActive = !hasProduct.isActive;
    const product = await this.productsRepo.save(hasProduct);
    return {
      message: `Product with ${id} Toggle Active is now ${product.isActive}!`,
      data: product,
    };
  }
}
