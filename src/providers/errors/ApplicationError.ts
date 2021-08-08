export class ApplicationError extends Error {
  public statusCode: number;
  public error: string | undefined;
  constructor(message: string, statusCode: number) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.message = message || "Sorry, something went wrong!";

    this.statusCode = statusCode || 500;
  }
}
