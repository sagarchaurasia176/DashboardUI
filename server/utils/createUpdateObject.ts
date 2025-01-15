import { Request } from "express";

export function createUpdateObject<T extends Record<string, any>>(
  req: Request,
  fields: Array<keyof T>
) {
  const updateObject: Partial<T> = {};
  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updateObject[field] = req.body[field];
    }
  });
  return updateObject;
}
