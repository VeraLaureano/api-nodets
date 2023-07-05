import  App  from './app';
import { NODE_ENV, PORT } from './config/config';
import BaseRoute from './routes/base.route';

const app = new App([new BaseRoute()])

app.listen()
