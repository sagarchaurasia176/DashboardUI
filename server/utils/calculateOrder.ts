interface item {
  amount: number;
}

export const calculateOrderAmount = (items: item[]) => {
  let total = 0;
  console.log(items);

  items.forEach((item) => {
    const { amount } = item;
    // stripe accepts payment in cents
    const amountInCents = amount * 100;
    total += amountInCents;
  });
  return total;
};
