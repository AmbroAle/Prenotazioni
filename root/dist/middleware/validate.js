"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const scheme_1 = require("./scheme");
exports.validator = {
    getAppointments: (req, res, next) => {
        const validate = scheme_1.scheme.schemeGet.parse({
            email: req.query.email,
            page: Number(req.query.page),
        });
        req.query = validate;
        next();
    },
    updateAppointments: (req, res, next) => {
        const validate = scheme_1.scheme.schemeUpdate.parse(req.body);
        req.body = validate;
        next();
    },
    deleteAppointments: (req, res, next) => {
        const validate = scheme_1.scheme.schemeDelete.parse(req.body);
        req.body = validate;
        next();
    },
    createAppointments: (req, res, next) => {
        const validate = scheme_1.scheme.schemeCreate.parse(req.body);
        req.body = validate;
        next();
    }
};
