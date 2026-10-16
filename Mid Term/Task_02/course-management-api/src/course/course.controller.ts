import { Controller, Delete, Get, Post, Put, Param, Patch, Body } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';

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
  createCourse(@Body() dto : CreateCourseDto) : object{
    return this.courseService.createCourse(dto);
  }

  @Put(':id')
  updateCourse(@Param('id') id : string, @Body() dto: UpdateCourseDto) : object{
    return this.courseService.updateCourse(id, dto);
  }

  @Patch(':id')
  patchCourse(@Param('id') id : string, @Body() dto: UpdateCourseDto) : object{
    return this.courseService.patchCourse(id, dto);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id : string) : object{
    return this.courseService.deleteCourse(id);
  }

  @Post(':id/upload')
  uploadCourseMaterial(id: string, file: Express.Multer.File) : object
  {
    return this.courseService.uploadCourseMaterial(id, file);
  }
}