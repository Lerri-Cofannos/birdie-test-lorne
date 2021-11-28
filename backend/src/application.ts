import * as express from "express";
import {pingController} from "./controllers/ping";
import {dataController} from "./controllers/data.router";
import cors from 'cors';

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/hello', pingController);
app.use('/data', dataController);

export default app;
