import { Request, Response, Router } from "express";
import { Routes } from "../interfaces/route.interface";

class BaseRoute implements Routes {
    public path = "/alive";
    public router = Router();

    constructor() {
        this.initBaseRoute();
    }

    public initBaseRoute() {
        this.router.get(`${this.path}`, (_req: Request, res: Response) => {
            res.status(200).json({ok: true, message: `I AM API AND I AM ALIVE`})
        })
    }
}

export default BaseRoute;