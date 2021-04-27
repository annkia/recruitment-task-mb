import axios from "axios";
import { useState } from "react";
import "./style.scss";

const API_KEY = "sample_API_KEY";
// Add and pop up with error message if the API key is missing and instruction how to get this api key

const getData = async () => {
  await axios

    .get(
      "https://v6.exchangerate-api.com/v6/7d209a6db213d1035528c15e/latest/USD"
      // `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/USD/PLN`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      throw error;
    });
};

const getRate = async (sourceCurrency, destinationCurrency) => {
  await axios

    .get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${sourceCurrency}/${destinationCurrency}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      throw error;
    });
};

const CurrencyConverter = () => {
  const [sourceSymbol, getSourceSymbol] = useState("");
  const [destinationSymbol, getDestinationSymbol] = useState("");

  return (
    <div>
      <h1>Currency Converter</h1>

      <div class="converter-form">
        <div class="row">
          <label for="currency-source">Source symbol</label>
          <input
            type="text"
            name="currency-source"
            class="currency-source"
            value={sourceSymbol}
            onChange={(e) => getSourceSymbol(e.target.value.toUpperCase())}
          />
        </div>
        <div class="row">
          <label for="currency-destination">Destination symbol</label>
          <input
            type="text"
            name="currency-destination"
            class="currency-destination"
            value={destinationSymbol}
            onChange={(e) => getDestinationSymbol(e.target.value.toUpperCase())}
          />
        </div>
        <div class="row">
          <label for="currency-date">Date</label>
          <input type="date" name="currency-date" class="currency-date" />
        </div>
        <div class="row">
          <button
            class="find-rate"
            onClick={getRate(sourceSymbol, destinationSymbol)}
          >
            Find rate
          </button>
          <button class="reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
