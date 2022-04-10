import { Injectable } from '@nestjs/common';

const students = [
    { id: 1, name: 'Bhargav R G' },
    { id: 2, name: 'Neeraja' }
]

@Injectable()
export class StudentService {

    getAllStudents() {
        return students;
    }

    getStudentById(id: number) {
        return students.find(student => student.id == id);
    }
}
