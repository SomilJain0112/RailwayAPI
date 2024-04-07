import express from "express"
import { auth } from "../middlewares/auth.js"
import { handleBookSeat, handleGetBookingDetails } from "../controllers/booking.js"

const bookingRouter = express.Router()

bookingRouter.post("/bookSeat", auth, handleBookSeat)

bookingRouter.get("/getBookingDetails/:bookingId", auth, handleGetBookingDetails)

export {bookingRouter}