import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin, userMission, reviewPreview, missionPreview } from "../controllers/user.controller.js";

export const userRouter = express.Router({mergeParams: true});

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission', asyncHandler(userMission));
storeRouter.get('/reviews', asyncHandler(reviewPreview));
storeRouter.get('/missions', asyncHandler(missionPreview));