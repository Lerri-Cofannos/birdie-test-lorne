import * as express from "express";
import {pingController} from "./controllers/ping";
import {dataController} from "./controllers/data"; 

const app = express();

app.use('/hello', pingController);
app.use('/data', dataController);

export default app;
