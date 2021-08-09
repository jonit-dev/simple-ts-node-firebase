import express from "express";

import { HttpStatus } from "../../types/ServerTypes";
import { registerUserUseCase } from "./RegisterUserUseCase";

const userRouter = express.Router();

userRouter.post("/auth/signup", async (req, res) => {
  const newUser = req.body;
  const userCreated = await registerUserUseCase.register(newUser);

  return res.status(HttpStatus.Created).send(userCreated);
});

export { userRouter };
