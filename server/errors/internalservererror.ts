import { CustomAPIError } from "./custom-error";
import { StatusCodes } from "http-status-codes";

export class InternalServerError extends CustomAPIError {
  constructor(message: string) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
