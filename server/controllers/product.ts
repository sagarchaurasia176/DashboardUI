import Product from "../model/productSchema";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors";

export async function createProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { name, description, price, image, downloadURL, previewSite } =
    req.body;

  try {
    const product = await Product.create({
      name,
      price,
      image,
      description,
      downloadURL,
      previewSite,
    });
    res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    next(error);
  }
}

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { productId } = req.body;
  try {
    const product = await Product.findOneAndDelete({ _id: productId });
    if (!product) {
      throw new BadRequestError(`Product with id: ${productId} does not exist`);
    }
    res.status(StatusCodes.OK).json({ msg: "Product deleted" });
  } catch (error) {
    console.error("Error: ", error);
    next(error);
  }
}

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { productId } = req.body;
  const { name, description, price, image, downloadURL, previewSite } =
    req.body;
  if (
    !name &&
    !description &&
    !price &&
    !image &&
    !downloadURL &&
    !previewSite
  ) {
    throw new BadRequestError("Please provide fields to update");
  }
  try {
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) {
      throw new BadRequestError(`Product with id: ${productId} does not exist`);
    }
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    console.error("Error: ", error);
    next(error);
  }
}

export async function getProduct(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const productId = req.query.productId;
  try {
    const product = await Product.findById({ _id: productId });
    if (!product) {
      throw new NotFoundError(`Product with id: ${productId} does not exist`);
    }
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    console.error("Error: ", error);
    next(error);
  }
}

export async function getAllProducts(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const products = await Product.find({});
    if (products.length === 0 || !products[0]) {
      throw new NotFoundError("No products found");
    }
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    console.error("Error: ", error);
    next(error);
  }
}
