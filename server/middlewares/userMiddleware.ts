import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { validateFields } from "../utils/validateFields";
import { createUpdateObject } from "../utils/createUpdateObject";

// TODO all three users, product and order can be consolidated with a single utility function
export async function validateUserId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userId } = req.body;
  if (!userId) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide productId" });
    return;
  }
  next();
}

export async function validateUserDetails(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const missingFields = validateFields(req, ["name", "email"]);
  if (missingFields.length > 0) {
    res.status(StatusCodes.BAD_REQUEST).json({
      msg: `Please provide required fields: ${missingFields.join(", ")}`,
    });
    return;
  }
  next();
}

export async function validateUserUpdate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { userID } = req.body;
  if (!userID) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide userID" });
  }

  const allowedUpdates: Array<"name" | "email"> = ["name", "email"];
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
