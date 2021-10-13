import { EntityRepository, Repository} from "typeorm"
import { Students } from "../entities/Students";


@EntityRepository(Students)
class StudentsRepository extends Repository<Students> {}

export { StudentsRepository };