import { Router } from "express"; 
import { StudentController } from "./controllers/StudentController";


const router = Router();

const studentController = new StudentController();

router.post("/", studentController.create);
router.get('/', studentController.search);
router.get('/:id', studentController.findById);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);


export {router};