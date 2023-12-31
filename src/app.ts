import express from 'express';
import { API_VERSION, NODE_ENV, PORT } from "./config/config";
import { Routes } from "./interfaces/route.interface";
import { logger } from './utils/loggers';
import displayRoutes from 'express-routemap';

class App {
    public app: express.Application;
    public env: string;
    public port: number;

    constructor(routes: Array<Routes>) {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = Number(PORT) || 5000;

        this.initializeRoutes(routes);
    }

    public initializeRoutes(routes: Array<Routes>) {
        routes.forEach((route) => {
            this.app.use(`/api/${API_VERSION}`, route.router);
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            displayRoutes(this.app);
            logger.info(`=============================`);
            logger.info(`====== ENV: ${this.env} =====`);
            logger.info(`Server listening on port ${this.port}`);
            logger.info(`=============================`);
        })
    }
    
}  

export default App;