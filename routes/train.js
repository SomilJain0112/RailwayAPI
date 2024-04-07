import express from "express"
import { verifyApiKey } from "../middlewares/auth.js"
import { handleGetSeatAvailability, handleRegisterTrain } from "../controllers/train.js"
import { auth } from "../middlewares/auth.js"
const trainRouter = express.Router()

trainRouter.post("/registerTrain", verifyApiKey, handleRegisterTrain)
trainRouter.get("/getSeatAvailability", auth, handleGetSeatAvailability )

export {trainRouter}