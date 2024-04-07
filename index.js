import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 8000;
import { userRouter } from "./routes/user.js";
import { trainRouter } from "./routes/train.js";
import { bookingRouter } from "./routes/booking.js";
import { stationRouter } from "./routes/station.js";
app.use(bodyParser.json());


app.use("/user", userRouter )
app.use("/train", trainRouter)
app.use("/booking", bookingRouter)
app.use("/station", stationRouter)


app.listen(PORT, async (req, res) => {
  console.log("listening at " + PORT);
});
