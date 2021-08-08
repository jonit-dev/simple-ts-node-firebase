import express from "express";

import { BadRequestError } from "../../providers/errors/BadRequestError";
import { firebaseHelper } from "../../providers/helpers/Firebase.helper";
import { HttpStatus } from "../../types/server.types";

const userRouter = express.Router();

userRouter.post("/auth/signup", async (req, res) => {
  try {
    const { email, password, passwordConfirmation, name } = req.body;

    if (password !== passwordConfirmation) {
      throw new BadRequestError("Password confirmation does not match");
    }

    const user = await firebaseHelper.admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    return res.status(HttpStatus.Created).send(user);
  } catch (error) {
    console.error(error);
  }
});

export { userRouter };
