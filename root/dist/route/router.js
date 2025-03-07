"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../middleware/validate");
const appointments_1 = __importDefault(require("../repository/appointments"));
const router = (0, express_1.Router)();
const database = appointments_1.default.getInstance();
router.get('/appointments/get', validate_1.validator.getAppointments, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const page = Number(req.query.page);
        const result = yield database.getAppointments(email, page);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}));
router.post('/appointments/update', validate_1.validator.updateAppointments, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield database.modifyAppointment(data.idTipo, data.orario, data.data, data.newData);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}));
router.post('/appointments/create', validate_1.validator.createAppointments, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield database.createAppointments(data.data, data.idTipo, data.orario, data.email);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}));
router.post('/appointments/delete', validate_1.validator.deleteAppointments, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield database.deleteAppointment(data.idTipo, data.orario, data.data);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
