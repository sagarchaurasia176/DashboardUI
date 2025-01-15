import axios from "axios";

export async function currencyConvert({ amount }: { amount: number }) {
  let amountInINR;
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${
    import.meta.env.VITE_CURRENCY_CONVERTER_API
  }`;

  await axios.get(url).then((resp) => {
    const incomingResponse = resp.data;
    const { data } = incomingResponse;
    let rate = data.INR;

    amountInINR = Math.round(amount * rate);
  });
  // usd to inr
  return amountInINR;
}
