import axios from "axios";

export async function currencyConvert({ amount }: { amount: number }) {
  // TODO make it dynamic
  let amountInINR = amount * 86;
  return amountInINR;
}
