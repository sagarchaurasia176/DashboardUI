export async function currencyConvert({ amount }: { amount: number }) {
  let amountInINR = amount * 86;
  return amountInINR;
}
