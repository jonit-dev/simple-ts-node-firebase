import express from "express";

import { registerUserUseCase } from "./RegisterUserUseCase";

const userRouter = express.Router();

userRouter.post("/auth/signup", async (req, res) => {
  const newUser = req.body;
  return await registerUserUseCase.register(newUser);
});

export { userRouter };
