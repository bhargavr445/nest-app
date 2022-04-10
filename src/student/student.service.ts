import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student-repository';



@Injectable()
export class StudentService {

    constructor(public studentRepository: StudentRepository) {

    }

    getAllStudents() {
        return this.studentRepository.getAllStudents();
    }

    getStudentById(id: number) {
        return this.studentRepository.getStudentById(id);
    }
}
