import { Request } from "express";

export function validateFields(req: Request, fields: string[]): string[] {
  return fields.filter((field) => req.body[field] === undefined);
}
