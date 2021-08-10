import * as express from "express";
import { controller, httpGet, interfaces } from "inversify-express-utils";
import { HttpStatus } from "types/ServerTypes";

import { ViewFormUseCase } from "./ViewFormUseCase";

@controller("/form")
export class FormController implements interfaces.Controller {
  constructor(private viewFormUseCase: ViewFormUseCase) {}

  @httpGet("/countries")
  private async countries(req: express.Request, res: express.Response): Promise<any> {
    const countries = this.viewFormUseCase.readCountries();
    return res.status(HttpStatus.OK).send(countries);
  }
  @httpGet("/languages")
  private async languages(req: express.Request, res: express.Response): Promise<any> {
    const languages = this.viewFormUseCase.readLanguages();
    return res.status(HttpStatus.OK).send(languages);
  }
  @httpGet("/industries")
  private async industries(req: express.Request, res: express.Response): Promise<any> {
    const industries = this.viewFormUseCase.readIndustries();
    return res.status(HttpStatus.OK).send(industries);
  }
}
