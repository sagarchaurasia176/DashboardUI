import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    minlength: [5, "Please provide an appropriate product name"],
    maxlength: [60, "Product name cannot exceed 30 characters"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
    min: [0, "Price cannot be less than zero"],
  },
  description: {
    type: String,
    required: [true, "Please provide description of product"],
    minlength: [5, "Please provide appropriate amount of description"],
    maxlength: [100, "Product description cannot exceed 100 characters"],
    unique: true,
  },
  image: {
    type: String,
    required: [true, "Please provide image of product"],
  },
  previewSite: {
    type: String,
    required: [true, "Please provide preview site of product"],
    unique: true,
  },
  downloadURL: {
    type: String,
    required: [true, "Please provide downloadable link of product"],
  },
});

const Product = model("Product", productSchema);
export default Product;
