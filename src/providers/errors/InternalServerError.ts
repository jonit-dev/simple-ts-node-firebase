import { HttpStatus } from "../../types/ServerTypes";
import { ApplicationError } from "./ApplicationError";

export class InternalServerError extends ApplicationError {
  constructor(message: string) {
    super(message, HttpStatus.InternalServerError);

    this.error = InternalServerError.name;
  }
}
