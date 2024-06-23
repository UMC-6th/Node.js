import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin, userMission, reviewPreview } from "../controllers/user.controller.js";

export const userRouter = express.Router({mergeParams: true});

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission', asyncHandler(userMission));
storeRouter.get('/reviews', asyncHandler(reviewPreview));