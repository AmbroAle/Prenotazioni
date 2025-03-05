import { z } from "zod";

export const schemeUpdate = z.object({
    data: z.string().date("formato data non valido"),
    idTipo: z.number().int().positive(),
    orario: z.string().time("formato orario non valido"),
    newData: z.string().date("formato data non valido"),
});

export const schemeGet = z.object({
    email: z.string().optional(),
});

export const schemeDelete = z.object({
    idTipo: z.number().int().positive(),
    orario: z.string().time("formato orario non valido"),
    data: z.string().date("formato data non valido"),
});

export const schemeCreate = z.object({
    data: z.string().date("formato data non valido"),
    idTipo: z.number().int().positive(),
    orario: z.string().time("formato orario non valido"),
    email: z.string().email("Formato email non valido"),
});