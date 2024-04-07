import express from "express"
import { handleLogin, handleSignup } from "../controllers/user.js"

const userRouter = express.Router()

userRouter.post("/signup", handleSignup)
userRouter.post("/login", handleLogin)

export {userRouter}