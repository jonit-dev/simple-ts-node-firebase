import { HttpStatus } from "../../types/ServerTypes";
import { ApplicationError } from "./ApplicationError";

export class ConflictError extends ApplicationError {
  constructor(message: string) {
    super(message, HttpStatus.Conflict);

    this.error = ConflictError.name;
  }
}
