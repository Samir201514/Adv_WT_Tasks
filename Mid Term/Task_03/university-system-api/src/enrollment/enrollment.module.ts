import { forwardRef, Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service.js';
import { EnrollmentController } from './enrollment.controller.js';
import { CourseModule } from '../course/course.module.js';
import { NotificationModule } from '../notification/notification.module.js';

@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
  imports: [CourseModule, forwardRef(() => NotificationModule)]
})
export class EnrollmentModule {}
