"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
const zod_1 = require("zod");
const allScheme = zod_1.z.object({
    data: zod_1.z.string().date("formato data non valido"),
    idTipo: zod_1.z.number().int().positive(),
    orario: zod_1.z.string().time("formato orario non valido"),
    newData: zod_1.z.string().date("formato data non valido"),
    page: zod_1.z.number().int().positive(),
    email: zod_1.z.string(),
});
exports.scheme = {
    schemeUpdate: allScheme.omit({ page: true, email: true }),
    schemeGet: allScheme.omit({ data: true, newData: true, idTipo: true, orario: true }),
    schemeDelete: allScheme.omit({ newData: true, page: true, email: true }),
    schemeCreate: allScheme.omit({ newData: true, page: true }),
};
