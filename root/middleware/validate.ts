import { Request, Response, NextFunction } from "express";
import {scheme} from "./scheme"

export type typeUpdate = {
    data: string;
    idTipo: number;
    orario: string;
    newData: string;
};

export type typeDelete = {
    data: string;
    idTipo: number;
    orario: string;
};

export type typeCreate = {
    data: string;
    idTipo: number;
    orario: string;
    email: string;
};

export const validator = {
    getAppointments : (req : Request<{},{},{},{email:string, page : number}>, res : Response, next : NextFunction) : void => {
        
        const validate = scheme.schemeGet.parse({
            email: req.query.email,
            page: Number(req.query.page),
        });
        req.query = validate ;
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