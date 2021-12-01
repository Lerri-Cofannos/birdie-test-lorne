import expConstructor, * as express from 'express';
import { pingController } from './controllers/ping';
import { dataController } from './controllers/data.router';

const app = expConstructor();

app.use(express.static('public'));
app.use('/hello', pingController);
app.use('/data', dataController);

export default app;
