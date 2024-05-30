// temp.route.js
// 라우터(통신) 기능

import express from 'express';
import { tempTest } from '../controllers/temp.controller.js';
import { tempException } from '../controllers/temp.controller.js';
// const app = express()
// app.use('/test', tempRouter);


export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);
tempRouter.get('/exception/:flag',tempException);