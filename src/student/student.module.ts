import { Module } from '@nestjs/common';
import { StudentRepository } from './student-repository';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [
    StudentController
  ],
  providers: [
    StudentService,
    StudentRepository
  ]
})
export class StudentModule { }
