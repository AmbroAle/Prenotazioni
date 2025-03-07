import { z } from "zod";

export type typeUpdate = z.infer<typeof scheme.schemeUpdate>;

export type typeDelete = z.infer<typeof scheme.schemeDelete>;

export type typeCreate = z.infer<typeof scheme.schemeCreate>;

export type typeGet = z.infer<typeof scheme.schemeGet>;

const allScheme = z.object({
    data: z.string().date("formato data non valido"),
    idTipo: z.number().int().positive(),
    orario: z.string().time("formato orario non valido"),
    newData: z.string().date("formato data non valido"),
    page: z.number().int().positive(),
    email: z.string().email("Formato email non valido"),
});

export const scheme = {
    schemeUpdate: allScheme.omit({page : true, email : true }),

    schemeGet: allScheme.omit({data : true, newData : true, idTipo : true, orario : true}),

    schemeDelete: allScheme.omit({newData : true, page : true, email : true}),

    schemeCreate: allScheme.omit({newData : true, page : true}),
};