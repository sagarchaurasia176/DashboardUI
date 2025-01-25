import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    minlength: [5, "Please provide an appropriate product name"],
    maxlength: [60, "Product name cannot exceed 30 characters"],
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
  },
  image: {
    // TODO
    type: String,
    required: [true, "Please provide image of product"],
  },
  // might remove later
  previewSite: {
    type: String,
    // TODO
    // deploy and change it
    default: "https://courses-db-one.vercel.app",
  },
  downloadURL: {
    type: String,
    required: [true, "Please provide downloadable link of product"]
  }
  
});

const Product = model("Product", productSchema);
export default Product;
