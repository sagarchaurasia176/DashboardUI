import Product from "../model/productSchema";
import User from "../model/UserSchema";

export async function extractUserDetails(userId: string) {
  const user = await User.findOne({ _id: userId });
  if (!user) {
    throw new Error("User not found");
  }
  return {
    name: user.name,
    email: user.email,
  };
}

export async function extractProductDetails(productId: string) {
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new Error("Product not found");
  }
  return {
    name: product.name,
    downloadURL: product.downloadURL,
  };
}
