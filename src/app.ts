import express from 'express';
import { NODE_ENV, PORT } from './config/config';

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening in mode: ${NODE_ENV}, on port ${PORT}`);
})
