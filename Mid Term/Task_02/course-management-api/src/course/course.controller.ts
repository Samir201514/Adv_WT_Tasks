import { Controller, Delete, Get, Post, Put, Param, Patch } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses() : string{
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id : any) : string{
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse() : string{
    return this.courseService.createCourse();
  }

  @Put(':id')
  updateCourse(@Param('id') id : any) : string{
    return this.courseService.updateCourse(id);
  }

  @Patch(':id')
  patchCourse(@Param('id') id : any) : string{
    return this.courseService.patchCourse(id);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id : any) : string{
    return this.courseService.deleteCourse(id);
  }
}