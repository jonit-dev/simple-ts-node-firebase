import express from "express";

import { BadRequestError } from "../../providers/errors/BadRequestError";
import { firebaseHelper } from "../../providers/helpers/Firebase.helper";
import { HttpStatus } from "../../types/ServerTypes";

const userRouter = express.Router();

userRouter.post("/auth/signup", async (req, res, next) => {
  const { email, password, passwordConfirmation, name } = req.body;

  if (password !== passwordConfirmation) {
    throw new BadRequestError("Password confirmation does not match");
  }

  try {
    const user = await firebaseHelper.admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    return res.status(HttpStatus.Created).send(user);
  } catch (error) {
    throw new BadRequestError(error.message);
  }
});

export { userRouter };
