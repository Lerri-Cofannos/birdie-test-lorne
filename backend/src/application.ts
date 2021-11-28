import * as express from "express";
import {pingController} from "./controllers/ping";
import {dataController} from "./controllers/data.router";
import cors from 'cors';

const app = express();
app.use(cors());
  
app.use('/hello', pingController);
app.use('/data', dataController);

export default app;
