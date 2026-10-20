import { forwardRef, Module } from '@nestjs/common';
import { NotificationService } from './notification.service.js';
import { NotificationController } from './notification.controller.js';
import { EnrollmentModule } from '../enrollment/enrollment.module.js';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
  imports: [forwardRef(() => EnrollmentModule)]
})
export class NotificationModule {}
