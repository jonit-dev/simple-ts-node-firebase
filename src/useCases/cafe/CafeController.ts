import { isAuthenticated } from "@providers/middlewares/AuthMiddleware";
import * as express from "express";
import { controller, httpGet, interfaces } from "inversify-express-utils";
import { HttpStatus } from "types/ServerTypes";

import { ViewCafeUseCase } from "./ViewCafeUseCase";

@controller("/cafe", isAuthenticated)
export class CafeController implements interfaces.Controller {
  constructor(private viewCafeUseCase: ViewCafeUseCase) {}

  @httpGet("/")
  private async index(req: express.Request, res: express.Response): Promise<any> {
    const cafes = await this.viewCafeUseCase.readAll();
    return res.status(HttpStatus.OK).send(cafes);
  }
}
