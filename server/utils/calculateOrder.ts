import Product from "../model/productSchema";

export const calculateOrderAmount = async (productId: string) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }
  const priceInCents = product.price * 100;
  return priceInCents;
};
