import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors";

export async function validateProductId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const productId = req.query.productId;
    if (!productId) {
      throw new BadRequestError("Please provide productId");
    }
    next();
  } catch (error) {
    next(error);
  }
}
