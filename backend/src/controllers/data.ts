import * as express from "express";

import { mysqlConnection } from "./../service/mysqlConnection";

export const dataController = express.Router();

dataController.get('/all', (_, res) => {
  mysqlConnection( (err, dbResponse) => {
    if (!err) {
      res.status(200).json(dbResponse);
    } else {
      res.status(201).json(err);
    }
  })
});
