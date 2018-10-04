import * as bodyParser from "body-parser";
import * as express from "express";
import { Request, Response } from "express";
import * as httpStatus from "http-status";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        const router = express.Router();

        router.get("/", (_: Request, res: Response) => {
            res.status(httpStatus.OK).send({ message: "Hello World!" });
        });

        router.post("/", (req: Request, res: Response) => {
            const data = req.body;
            res.status(httpStatus.OK).send(data);
        });

        this.app.use("/", router);
    }
}

export default new App().app;
