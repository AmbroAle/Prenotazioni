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
const promise_1 = __importDefault(require("mysql2/promise"));
class DatabaseHelper {
    constructor() {
        this.pool = promise_1.default.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'Prenotazioni',
        });
    }
    static getInstance() {
        if (!DatabaseHelper.instance) {
            DatabaseHelper.instance = new DatabaseHelper();
        }
        return DatabaseHelper.instance;
    }
    executeQuery(sql, param) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.pool.getConnection();
            const [result] = yield conn.execute(sql, param);
            conn.release();
            return result;
        });
    }
    fetchQuery(sql, param) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.pool.getConnection();
            const [result] = yield conn.execute(sql, param);
            return result;
        });
    }
}
exports.default = DatabaseHelper;
