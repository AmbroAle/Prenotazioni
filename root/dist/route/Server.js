"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.setupMiddlewares();
        this.setupRoutes();
    }
    static getInstance() {
        if (!Server.instance) {
            Server.instance = new Server(3000);
        }
        return Server.instance;
    }
    setupMiddlewares() {
        this.app.use(express_1.default.json());
    }
    setupRoutes() {
        this.app.use('/api', router_1.default);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server avviato su http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
