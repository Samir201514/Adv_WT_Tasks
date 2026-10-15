import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses() : string
    {
        return "Get all courses";
    }

    getCourseById(id: string) : string
    {
        return `Get course by ID : ${id}`;
    }
 
    createCourse() : string
    {
        return "Create new course";
    }
  
    updateCourse(id: string) : string
    {
        return `Update full course : ${id}`;
    }

    patchCourse(id: string) : string
    {
        return `Update partial course : ${id}`;
    }

    deleteCourse(id: string) : string
    {
        return `Delete course : ${id}`;
    }
}