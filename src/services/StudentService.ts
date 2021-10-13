import { getCustomRepository } from "typeorm"
import { StudentsRepository } from "../repositories/StudentsRepository";


interface IRequest {
    name: string;
    email: string;
    photo: string;
    address: string;
}

class StudentService {
    private studentsRepository: StudentsRepository;

    constructor() {
        this.studentsRepository = getCustomRepository(StudentsRepository);
    }
    
    async create({name, email, photo, address} : IRequest) {

        if(!email) {
            throw new Error("Email incorrect");
        }
        const studentAlreadyExists = await this.studentsRepository.findOne({
            email,
        });
        if(studentAlreadyExists){
            throw new Error("Student already exists");
        }
        const student = this.studentsRepository.create({
            name,
            email,
            photo,
            address
        });

        await this.studentsRepository.save(student);

        return student;
    }

    async search(){
        return await this.studentsRepository.find();            
    }

    async findById(id: string){
        return await this.studentsRepository.findOne(id);            
    }

    async update(id: string, {name, email, photo, address} : IRequest){
        return await this.studentsRepository.update(id, {name, email, photo, address});            
    }

    async delete(id: string) {
        await this.studentsRepository.delete(id);
    }
}

export { StudentService};
