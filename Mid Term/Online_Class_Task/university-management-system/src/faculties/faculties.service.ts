import { Injectable } from '@nestjs/common';
import { CreateFacultiesDto } from './dtos/create-faculties.dto.js';
import { Faculties } from './entities/faculties.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculties)
    private readonly facultiesRepo: Repository<Faculties>,
  ) {}

  async createFaculty(dto: CreateFacultiesDto): Promise<Faculties | string> {
    try {
      const create = await this.facultiesRepo.create(dto);
      return await this.facultiesRepo.save(create);
    } catch {
      return 'Faculty Creation Failed!';
    }
  }
}
