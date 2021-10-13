import {Request, Response} from "express"
import { StudentService } from "../services/StudentService";


class StudentController {
    async create(request: Request, response: Response) {
        const { name, email, photo, address } = request.body;
        const studentService = new StudentService();

        const student = await studentService.create({name, email, photo, address});

        return response.status(201).json(student);
    }

    async search(request: Request, response: Response) {
        const studentService = new StudentService();

        const students = await studentService.search();

        return response.json(students);
    }

    async findById(request: Request, response: Response) {
        const { id } = request.params;
        const studentService = new StudentService();

        const student = await studentService.findById(id);

        return response.json(student);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, photo, address } = request.body;

        const studentService = new StudentService();

        const student = await studentService.update(id, {name, email, photo, address});

        return response.status(200).json({message:"Updated successfully"});
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const studentService = new StudentService();

        await studentService.delete(id);

        return response.send();
    }

}

export { StudentController }