import { Router, Request, Response, NextFunction } from 'express';
import { validator, typeCreate, typeDelete, typeUpdate } from '../middleware/validate';
import db from '../repository/databaseHelper';
import { ResultSetHeader } from 'mysql2';

const router = Router();
const database = db.getInstance();

router.get('/appointments/get', validator.getAppointments, async (req: Request<{}, {}, {}, { email: string }>, res: Response) => {
    try{
        const email : string = req.query.email;
        const result = await database.getAppointments(email);
         res.json(result)
    } catch(error){
         res.json(error);
    }
})

router.post('/appointments/update', validator.updateAppointments, async (req : Request<{},{},typeUpdate,{}>, res : Response ) => {
    try {
        const data : typeUpdate = req.body;
        const result = await database.modifyAppointment(data.idTipo,data.orario,data.data,data.newData);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

router.post('/appointments/create', validator.createAppointments, async (req : Request<{},{},typeCreate,{}>, res : Response ) => {
    try {
        const data : typeCreate = req.body;
        const result = await database.createAppointments(data.data,data.idTipo,data.orario,data.email);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

router.post('/appointments/delete', validator.deleteAppointments, async (req : Request<{},{},typeDelete,{}>, res : Response ) => {
    try {
        const data : typeDelete = req.body;
        const result = await database.deleteAppointment(data.idTipo,data.orario,data.data);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

export default router;