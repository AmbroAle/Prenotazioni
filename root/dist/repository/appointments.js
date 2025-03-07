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
const databaseHelper_1 = __importDefault(require("./databaseHelper"));
const db = databaseHelper_1.default.getInstance();
class AppointmentRepository {
    constructor() {
    }
    static getInstance() {
        if (!AppointmentRepository.instance) {
            AppointmentRepository.instance = new AppointmentRepository();
        }
        return AppointmentRepository.instance;
    }
    getAppointments(email, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT * FROM `Prenotazione` WHERE MATCH (Utente_Email) AGAINST (? IN NATURAL LANGUAGE MODE) AND Id_Prenotazione >= ? ORDER BY Id_Prenotazione LIMIT 10';
            return db.fetchQuery(sql, [email, page]);
        });
    }
    createAppointments(data, idTipo, orario, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO `Prenotazione` (`Data`,`Tipo_idTipo`,`Fascia_Oraria_Da`, `Utente_Email`) VALUES (?, ?, ?, ?)';
            return db.executeQuery(sql, [data, idTipo, orario, email]);
        });
    }
    deleteAppointment(idTipo, orario, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'DELETE FROM `Prenotazione` WHERE `Tipo_idTipo` = ? AND `Fascia_Oraria_Da` = ? AND `Data` = ?';
            return db.executeQuery(sql, [idTipo, orario, data]);
        });
    }
    modifyAppointment(idTipo, orario, data, newData) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'UPDATE `Prenotazione` SET `Data` = ? WHERE `Tipo_idTipo` = ? AND `Fascia_Oraria_Da` = ? AND `Data` = ?';
            return db.executeQuery(sql, [newData, idTipo, orario, data]);
        });
    }
}
exports.default = AppointmentRepository;
