import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NPR");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Something went wrong!");
      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  useEffect(() => getExchangeRate, []);

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col">
        <label className="mb-2 text-lg font-medium text-white">
          Enter Amount
        </label>
        <input
          type="number"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-4 text-white rounded-md outline-none input min-h-12"
        />
      </div>
      <div className="flex items-end justify-between gap-8 mt-8 mb-10">
        <div>
          <label className="text-lg font-medium text-white">From</label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleCurrency={(e) => setFromCurrency(e.target.value)}
          />
        </div>
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer converter"
          onClick={handleSwapCurrencies}
        >
          <svg
            width="16"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
              fill="#fff"
            />
          </svg>
        </div>
        <div>
          <label className="text-lg font-medium text-white">To</label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleCurrency={(e) => setToCurrency(e.target.value)}
          />
        </div>
      </div>
      <button
        className="w-full py-4 text-lg font-semibold tracking-wide bg-white border-none rounded-lg outline-none cursor-pointer"
        type="submit"
      >
        Get Exchange Rate
      </button>
      <p className="py-4 mt-6 text-lg font-medium tracking-wider text-center text-white rounded-lg rate">
        {isLoading ? "Getting exchange rate..." : result}
      </p>
    </form>
  );
};

export default ConverterForm;
