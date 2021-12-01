import { Router } from 'express';

export const pingController = Router();

pingController.get('', (_, res) => {
  res.status(200).json({
    greetings: 'Basic request to the backend server works ! 🙌',
  });
});
