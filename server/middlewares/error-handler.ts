import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong, please try again later",
  };

  if (err.name === "CastError") {
    customError.message = `No resource found with id : ${err.value._id}, Please provide correct id`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  } else if (err.name === "ValidationError") {
    customError.message = Object.values(err.errors)
      .map((item: any) => item.message)
      .join(", ");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  } else if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  res.status(customError.statusCode).json({
    message: customError.message,
  });
  return;
};

// code 11600 Interrupted At Shutdown
