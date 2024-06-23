import express from "express";
import asyncHandler from 'express-async-handler';
import { storeSignin, storeReview, storeMission } from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post('/signin', asyncHandler(storeSignin));
storeRouter.post('/review', asyncHandler(storeReview));
storeRouter.post('/mission', asyncHandler(storeMission));