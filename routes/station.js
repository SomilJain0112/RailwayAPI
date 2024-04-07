import express from "express"
import { verifyApiKey } from "../middlewares/auth.js"
import { handleRegisterStation } from "../controllers/registerStation.js"

const stationRouter = express.Router()

stationRouter.post("/registerStations", verifyApiKey, handleRegisterStation)

export {stationRouter}