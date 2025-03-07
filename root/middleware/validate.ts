import { Request, Response, NextFunction } from "express";
import {scheme, typeDelete, typeCreate, typeGet, typeUpdate} from "./scheme"


export const validator = {
    getAppointments : (req : Request<{},{},{},typeGet>, res : Response, next : NextFunction) : void => {
        
        const validate : {email : string, page : number} = scheme.schemeGet.parse({
            email: req.query.email,
            page: Number(req.query.page),
        });
        req.query = validate;
        next();
    },

    updateAppointments : (req : Request<{},{},{},typeUpdate>, res : Response, next : NextFunction) : void => {
        const validate : typeUpdate = scheme.schemeUpdate.parse(req.body);
        req.body = validate;
        next();
    },

    deleteAppointments : (req : Request<{},{},{},typeDelete>, res : Response, next : NextFunction) : void => {
        const validate : typeDelete = scheme.schemeDelete.parse(req.body);
        req.body = validate;
        next();
    },

    createAppointments : (req : Request<{},{},{},typeCreate>, res : Response, next : NextFunction) : void => {
        const validate : typeCreate = scheme.schemeCreate.parse(req.body);
        req.body = validate;
        next();
    }
};

export { typeCreate, typeDelete, typeUpdate, typeGet };
