import { Module } from '@nestjs/common';
import { StudentRepository } from './student-repository';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, StudentRepository]
})
export class StudentModule {}
