import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { FacultiesController } from './faculties.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculties } from './entities/faculties.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Faculties])],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}
