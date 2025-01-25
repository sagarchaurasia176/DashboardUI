import Product from "./productSchema";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import { UploadedFile } from "express-fileupload";

// CLoudinary-config here
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_APP_NAME,
});

// Image conditions,wethere that image type is png , jpg or not
const imageFormatter = async (
  type: string,
  image: string
): Promise<Boolean> => {
  return image.includes(type);
};

// Upload image to Cloudinary
const uploadToCloudinary = async (
  file: any,
  folder: string
): Promise<string> => {
  const uploadOptions = { folder };
  const result = await cloudinary.uploader.upload(
    file.tempFilePath,
    uploadOptions
  );
  return result.url;
};

// Create Products
export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  const { name, description, price ,   
    downloadURL
  } = req.body;
  const file = req.files?.TemplatesImage as UploadedFile;

  if (!name || !description || !price || !downloadURL) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all details of product" });
    return;
  }
  const productAlreadyExists = await Product.findOne({
    name: name,
    price: price,
  });
  if (productAlreadyExists) {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "Product already exists" });
    return;
  }
  // const storedImg = ImagePassedToCloud(process.env.CLOUDINARY_APP_NAME);
  const ImageFormatter = ["png", "jpg", "jpeg"];
  const ImgExtension = file.name?.split(".").pop()?.toLowerCase();
  console.log("Image extension");
  console.log(ImgExtension);
  if (
    !ImgExtension ||
    !ImageFormatter.some((ext) => imageFormatter(ext, ImgExtension))
  ) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Invalid image format" });
    return;
  }
  const imageUrl = await uploadToCloudinary(file, "Templates");
  try {
    const product = await Product.create({
      name,
      description,
      price,
      image: imageUrl,
      downloadURL:downloadURL
    });
    res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    console.error("Error: ", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
}

// Delete Product logic
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
