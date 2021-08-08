import { BadRequestError } from "../../providers/errors/BadRequestError";
import { firebaseHelper } from "../../providers/helpers/FirebaseHelper";

class RegisterUserUseCase {
  public async register(newUser) {
    const { email, password, passwordConfirmation, name } = newUser;

    if (password !== passwordConfirmation) {
      throw new BadRequestError("Password confirmation does not match");
    }

    try {
      const user = await firebaseHelper.admin.auth().createUser({
        email,
        password,
        displayName: name,
      });

      return user;
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}

const registerUserUseCase = new RegisterUserUseCase();

export { registerUserUseCase };
