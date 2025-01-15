import Product from "../model/productSchema";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all details of product" });
    return;
  }
  try {
    const product = await Product.create({
      name,
      description,
      price,
    });
    res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function deleteProduct(
  req: Request,
  res: Response
): Promise<void> {
  const { productId } = req.body;
  if (!productId) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide productID" });
    return;
  }
  try {
    const product = await Product.findOneAndDelete({ _id: productId });
    if (!product) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: `Product with id: ${productId} does not exist` });
      return;
    }
    res.status(StatusCodes.OK).json({ msg: "Product deleted" });
  } catch (error) {
    console.error("Error: ", error);
    // TODO send more user-friendly error to user
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function updateProduct(
  req: Request,
  res: Response
): Promise<void> {
  const { productId, name, price, description } = req.body;
  if (!productId) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide productID" });
    return;
  }
  try {
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      req.body.updateObject,
      { new: true, runValidators: true }
    );
    if (!product) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: `Product with id: ${productId} does not exist` });
      return;
    }
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getProduct(req: Request, res: Response): Promise<void> {
  const { productId } = req.query;
  try {
    const product = await Product.findById({ _id: productId });
    if (!product) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: `Product with id: ${productId} does not exist` });
      return;
    }
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

export async function getAllProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: "No product available" });
      return;
    }
    if (!products[0]) {
      res.status(StatusCodes.NOT_FOUND).json({ msg: "No product available" });
      return;
    }
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}
