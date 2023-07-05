import express from 'express';
import { NODE_ENV, PORT } from "./config/config";
import { Routes } from "./interfaces/route.interface";
import { logger } from './utils/loggers';

class App {
    public app: express.Application;
    public env: string;
    public port: number;

    constructor(routes: Array<Routes>) {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = Number(PORT) || 5000;
    }

    public listen() {
        this.app.listen(this.port, () => {
            logger.info('=============================');
            logger.info('====== ENV: ${this.env} =====');
            logger.info('Server listening on port ${this.port}');
            logger.info('=============================');
        })
    }
    
}  

export default App;