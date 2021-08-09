import { auth } from "firebase-admin";

import { BadRequestError } from "../../providers/errors/BadRequestError";
import { firebaseHelper } from "../../providers/helpers/FirebaseHelper";
import { INewUser } from "./types/UserTypes";

class RegisterUserUseCase {
  public async register(newUser: INewUser): Promise<auth.UserRecord> {
    const { name, email, password, passwordConfirmation } = newUser;

    if (password !== passwordConfirmation) {
      throw new BadRequestError("Password confirmation does not match");
    }

    try {
      const user = await firebaseHelper.admin.auth().createUser({
        email,
        password,
        displayName: name,
      });

      const uid = user.uid;

      // create it also in our database

      await firebaseHelper.db.collection("users").doc(uid).set(newUser);

      return user;
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}

const registerUserUseCase = new RegisterUserUseCase();

export { registerUserUseCase };
