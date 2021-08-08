import { HttpStatus } from "../../types/server.types";
import { ApplicationError } from "./ApplicationError";

export class NotFoundError extends ApplicationError {
  constructor(message: string) {
    super(message, HttpStatus.NotFound);

    this.error = NotFoundError.name;
  }
}
