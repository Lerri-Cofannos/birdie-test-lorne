import * as express from "express";

import { getListOfPatients, getEventsOfPatient } from "../services/mysqlConnection";

export const dataController = express.Router();

dataController.get('/patientList', (_, res) => {
  getListOfPatients( (err, dbResponse) => {
    if (!err) {
      res.status(200).json(dbResponse);
    } else {
      res.status(418).json(err);
    }
  })
});


dataController.get('/:id', (req, res) => {
  const patientId = req.params.id;
  getEventsOfPatient( patientId, (err, dbResponse) => {
    if (!err) {
      res.status(200).json(dbResponse);
    } else {
      res.status(418).json(err);
    }
  })
});
