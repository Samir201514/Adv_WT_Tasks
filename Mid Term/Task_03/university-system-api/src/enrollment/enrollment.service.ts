import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';

@Injectable()
export class EnrollmentService {
    constructor(
        private readonly courseService: CourseService,

        @Inject(forwardRef(() => NotificationService))
        private readonly notificationService: any
    ){}


    getEnrollments(): object 
    { 
        return {message: 'All enrollments fetched', data: [] }
    }

    enrollStudent(studentName: string, courseId: string): object
    {
        return{
            Detatils:this.notificationService.sendNotification(studentName, 'Student enrolled successfully'),
            course: this.courseService.getCourseById(courseId)
        }
    }
}