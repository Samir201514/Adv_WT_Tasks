import { Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';

@Injectable()
export class EnrollmentService {
    constructor(private readonly courseService: CourseService){}

    getEnrollments(): object 
    { 
        return {message: 'All enrollments fetched', data: [] }
    }

    enrollStudent(studentName: string, courseId: string): object
    {
        return{
            message: 'Student enrolled successfully', 
            student: studentName,
            course: this.courseService.getCourseById(courseId)
        }
    }
}