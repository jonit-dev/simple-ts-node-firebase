import { HttpStatus } from "../../types/server.types";
import { ApplicationError } from "./ApplicationError";

export class BadRequestError extends ApplicationError {
  constructor(message: string) {
    super(message, HttpStatus.BadRequest);

    this.error = BadRequestError.name;
  }
}
