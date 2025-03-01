// import { Request, Response, NextFunction } from "express";
// import { StatusCodes } from "http-status-codes";
// import { validateFields } from "../utils/validateFields";

// export async function validatePaymentDetails(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const missingFields = validateFields(req, [
//       "status",
//       "amount",
//       "intentId",
//       "user",
//       "product",
//     ]);
//     if (missingFields.length > 0) {
//       res.status(StatusCodes.BAD_REQUEST).json({
//         msg: `Please provide required fields: ${missingFields.join(", ")}`,
//       });
//       return;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// }
