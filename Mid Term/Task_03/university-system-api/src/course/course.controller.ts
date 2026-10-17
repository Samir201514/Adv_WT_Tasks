import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CourseService } from './course.service.js';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses() : object{
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') id : string) : object{
    return this.courseService.getCourseById(id);
  }

  @Post()
  createCourse(@Body('name') name: string, @Body('code') code : string) : object{
    return this.courseService.createCourse(name, code);
  }
}
