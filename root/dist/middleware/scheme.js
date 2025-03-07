"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
const zod_1 = require("zod");
exports.scheme = {
    schemeUpdate: zod_1.z.object({
        data: zod_1.z.string().date("formato data non valido"),
        idTipo: zod_1.z.number().int().positive(),
        orario: zod_1.z.string().time("formato orario non valido"),
        newData: zod_1.z.string().date("formato data non valido"),
    }),
    schemeGet: zod_1.z.object({
        email: zod_1.z.string(),
        page: zod_1.z.number().int().positive(),
    }),
    schemeDelete: zod_1.z.object({
        idTipo: zod_1.z.number().int().positive(),
        orario: zod_1.z.string().time("formato orario non valido"),
        data: zod_1.z.string().date("formato data non valido"),
    }),
    schemeCreate: zod_1.z.object({
        data: zod_1.z.string().date("formato data non valido"),
        idTipo: zod_1.z.number().int().positive(),
        orario: zod_1.z.string().time("formato orario non valido"),
        email: zod_1.z.string().email("Formato email non valido"),
    })
};
