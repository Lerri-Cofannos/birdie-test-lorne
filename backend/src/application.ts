import * as express from "express";
import {pingController} from "./controllers/ping";
import {dataController} from "./controllers/data.router"; 

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://birdie-test-lorne.herokuapp.com/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use('/hello', pingController);
app.use('/data', dataController);

export default app;
