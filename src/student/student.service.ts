import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {

    getAllStudents() {
        return [
            {id: 1, name: 'Bhargav R G'},
            {id: 2, name: 'Neeraja'}
        ]
    }
}
