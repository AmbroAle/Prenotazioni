import express, { Application } from 'express';
import appointmentRoutes from './router';

export default class Server {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.setupMiddlewares();
        this.setupRoutes();
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