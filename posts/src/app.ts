import express, { Request, Response } from "express";
import cors from "cors";
import { createPostRouter } from "./routes/new";
import { errorHandler } from "./middleware/error-handler";

const app = express();


app.use(cors());
app.use(express.json());
app.use(createPostRouter);

app.all('*', async (req:Request, res:Response) => {
    return res.status(404).send({
        errors: [{message: 'Not found'}]
    })
})

app.use(errorHandler);

export { app };