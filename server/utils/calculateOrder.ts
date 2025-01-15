import Product from "../model/productSchema";

interface item {
  id: string;
}

export const calculateOrderAmount = async (items: item[]) => {
  let total = 0;
  console.log(items);

  const pricePromises = items.map(async (item) => {
    const { id } = item;
    const product = await Product.findById({ _id: id }).select("price").lean();
    // stripe accepts payment in cents
    // TODO type check here
    if (product) {
      const price = product.price;
      const priceInCents = price * 100;
      total += priceInCents;
    } else {
      console.log("Price is not a number");
      return;
    }
  });

  await Promise.all(pricePromises);

  return total;
};
