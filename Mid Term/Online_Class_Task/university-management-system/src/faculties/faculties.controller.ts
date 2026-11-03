import { CreateFacultiesDto } from './dtos/create-faculties.dto.js';
import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create-faculty')
  async createFaculty(@Body() dto: CreateFacultiesDto) {
    return await this.facultiesService.createFaculty(dto);
  }
}
