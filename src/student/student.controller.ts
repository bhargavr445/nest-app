import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(public studentService: StudentService) {}

    @Get('getAllStudents')
    getAllStudents(): any {
        return this.studentService.getAllStudents();
    }

    @Get('gatStudentById/:id')
    getStudentById(@Param() id: any): number {
        return id['id'];
    }
}
