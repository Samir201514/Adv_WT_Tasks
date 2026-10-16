import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { UpdateCourseDto } from './dtos/update-course.dto.js';
import type { Express } from 'express';

@Injectable()
export class CourseService {
    getAllCourses() : object
    {
        return { message: "All courses fetched successfully", data: [] } ;
    }

    getCourseById(id: string) : object
    {
        return { message: "Course fetched successfully", Id: `${id}` };
    }
 
    createCourse(dto : CreateCourseDto) : object
    {
        return {
            message: "Course created successfully", 
            data: 
                {
                    ...dto
                }
        };
    }
  
    updateCourse(id: string, dto: UpdateCourseDto) : object
    {
        return {
            message: "Course updated successfully", id: `${id}`, 
            data: 
                { 
                    ...dto
                }
        };
    }

    patchCourse(id: string, dto: UpdateCourseDto) : object
    {
        return { 
            message: "Course patched successfully", id: `${id}`, 
            updatedFields: Object.keys(dto) 
        };
    }

    deleteCourse(id: string) : object
    {
        return { message: "Course deleted successfully", id: `${id}`};
    }

    uploadCourseMaterial(id: string, file: Express.Multer.File) : object
    {
        return{ 
                message: "Material uploaded successfully", 
                courseId: `${id}`, 
                filename: file.filename,
                path: file.path
        };
    }
}