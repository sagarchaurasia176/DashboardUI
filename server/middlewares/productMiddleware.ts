import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { validateFields } from "../utils/validateFields";
import { createUpdateObject } from "../utils/createUpdateObject";

// TODO all three users, product and order can be consolidated with a single utility function
export async function validateProductId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { productId } = req.query;
  if (!productId) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide productId" });
    return;
  }
  next();
}

export async function validateProductDetails(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const missingFields = validateFields(req, [
    "name",
    "price",
    "description",
    "image",
    "downloadURL",
    "previewSite",
  ]);
  if (missingFields.length > 0) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: `Please provide required fields: ${missingFields.join(", ")}`,
    });
    return;
  }
  next();
}

export async function validateProductUpdate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { productId } = req.body;
  if (!productId) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide productId" });
    return;
  }
  const allowedUpdates: Array<
    "name" | "price" | "image" | "description" | "downloadURL" | "previewSite"
  > = ["name", "price", "image", "description", "downloadURL", "previewSite"];
  const updateObject = createUpdateObject(req, allowedUpdates);

  if (Object.keys(updateObject).length === 0) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "No valid fields for update" });
    return;
  }
  req.body.updateObject = updateObject;
  next();
}
