import express from "express";
import { controller, httpPost, interfaces } from "inversify-express-utils";
import { HttpStatus } from "types/ServerTypes";

import { RegisterUserUseCase } from "./RegisterUserUseCase";

@controller("/auth")
export class AuthController implements interfaces.Controller {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}

  @httpPost("/signup")
  private async signup(req: express.Request, res: express.Response): Promise<any> {
    const newUser = req.body;
    const userCreated = await this.registerUserUseCase.register(newUser);

    return res.status(HttpStatus.Created).send(userCreated);
  }

  //! PS: Login is not handling by our server! It's a client side request directly to Firebase.
}
