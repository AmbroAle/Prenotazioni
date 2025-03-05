import { Router, Request, Response } from 'express';
import { schemeGet, schemeDelete, schemeCreate, schemeUpdate } from '../middleware/validate';
import db from '../repository/databaseHelper';

const router = Router();
const database = db.getInstance();

router.get('/appointments', async (req: Request, res: Response): Promise<any> => {
    try {
        const validate = schemeGet.safeParse(req.query);
        console.log(req.query);
        if (!validate.success) {
            return res.status(400).json({
                error: "Dati non validi",
                details: validate.error.format()
            });
        }
        console.log(validate.data.email);
        const email = validate.data.email as string;
        const result = await database.getAppointments(email);
        return res.json(result);
    
    } catch (error) {
        res.status(500).json({ error});
    }
});

router.post('/appointments', async (req, res) => {
    try { 
        const { action } = req.body;

        const operationHandlers: Record<string, Function> = {
            delete: async () => {
                const validate = schemeDelete.safeParse(req.body);
                if (!validate.success) {
                    return res.status(400).json({
                        error: "Dati non validi",
                        details: validate.error.format()
                    });
                }
                const { idTipo, data, orario } = validate.data;
                const result = await database.deleteAppointment(idTipo, orario, data);
                return res.json(result);
            },

            create: async () => {
                const validate = schemeCreate.safeParse(req.body);
                if (!validate.success) {
                    return res.status(400).json({
                        error: "Dati non validi",
                        details: validate.error.format()
                    });
                }
                const { idTipo, data, orario, email } = validate.data;
                const result = await database.createAppointments(data, idTipo, orario, email);
                return res.json(result);
            },

            update: async () => {
                const validate = schemeUpdate.safeParse(req.body);
                if (!validate.success) {
                    return res.status(400).json({
                        error: "Dati non validi",
                        details: validate.error.format()
                    });
                }
                const { idTipo, data, orario, newData } = validate.data;
                const result = await database.modifyAppointment(idTipo, orario, data, newData);
                return res.json(result);
            }
        };

        if (operationHandlers[action]) {
            return await operationHandlers[action]();
        } else {
            return res.status(400).json({ error: "Azione non valida" });
        }

    } catch (error) {
    res.status(500).json({ error: "Errore interno del server", details: error});
}
});

export default router;