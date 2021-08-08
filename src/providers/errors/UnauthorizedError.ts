import { HttpStatus } from "../../types/server.types";
import { ApplicationError } from "./ApplicationError";

export class UnauthorizedError extends ApplicationError {
  constructor(message: string) {
    super(message, HttpStatus.Unauthorized);

    this.error = UnauthorizedError.name;
  }
}
