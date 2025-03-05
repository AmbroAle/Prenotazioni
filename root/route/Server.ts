import express, { Application } from 'express';
import appointmentRoutes from './router';

export default class Server {
    private app: Application;
    private port: number;
    private static instance: Server;

    private constructor(port: number) {
        this.app = express();
        this.port = port;

        this.setupMiddlewares();
        this.setupRoutes();
    }

    public static getInstance(): Server {
        if (!Server.instance) {
            Server.instance = new Server(3000);
        }
        return Server.instance;
    }

    private setupMiddlewares(): void {
        this.app.use(express.json());
    }

    private setupRoutes(): void {
        this.app.use('/api', appointmentRoutes);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server avviato su http://localhost:${this.port}`);
        });
    }
}