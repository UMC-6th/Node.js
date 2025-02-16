import express from "express";
import asyncHandler from 'express-async-handler';
import { storeSignin, storeReview, storeMission, reviewPreview, missionPreview } from "../controllers/store.controller.js";

export const storeRouter = express.Router({mergeParams: true});


storeRouter.post('/signin', asyncHandler(storeSignin));
storeRouter.post('/review', asyncHandler(storeReview));
storeRouter.post('/mission', asyncHandler(storeMission));
storeRouter.get('/reviews', asyncHandler(reviewPreview));
storeRouter.get('/mission', asyncHandler(missionPreview));