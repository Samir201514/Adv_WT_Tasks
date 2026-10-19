import { Controller, Delete, Get, Post, Put, Param, Patch, Body, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { promises as fs } from 'fs';

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
  @UseInterceptors(
    FileInterceptor('file', 
      {
        storage: memoryStorage()
      }
    )
  )
  async uploadCourseMaterial(@Param('id') id: string, 
    @UploadedFile(new ParseFilePipe(
      {
        validators: [
          new MaxFileSizeValidator({maxSize: 2*1024*1024}),
          new FileTypeValidator({fileType: /^(image\/jpeg|image\/png|application\/pdf)$/})
        ]
      })) 
      file: Express.Multer.File)
  {
    const filename = (file.originalname).toLowerCase();
    const filepath = `./uploads/${filename}`;

    await fs.writeFile(filepath, file.buffer);
    
    return this.courseService.uploadCourseMaterial(id, filename, filepath);
  }
}