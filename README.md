  # Advance-Currency-converter 

follow these steps:

Install the Package: Use npm to install the package in your project directory. Run the following command in your terminal:

 ``` bash
npm install advance-currency-converter
```
Import the Package: In your JavaScript file where you want to use the currency conversion functionality, import the package:

```
import { FreeCurrencyApi } from 'advance-currency-converter';
```
Create an Instance: Create an instance of the FreeCurrencyApi class by passing your API key as an argument to the constructor:

```
const apiKey = 'YOUR_API_KEY_HERE'; // Replace 'YOUR_API_KEY_HERE' with your actual API key
const currencyApi = new FreeCurrencyApi(apiKey);
```
Perform Currency Conversion: You can now use the convertCurrency method to convert currency. Provide the source currency, target currency, and the amount to be converted:
 ```
const fromCurrency = 'USD';
const toCurrency = 'EUR';
const amount = 100;
const convertedAmount = await currencyApi.convertCurrency(fromCurrency, toCurrency, amount);
console.log(`Converted amount: ${convertedAmount}`);
```
Fetch Exchange Rate: If you want to fetch the exchange rate between two currencies, use the getExchangeRate method:
 ```
const exchangeRate = await currencyApi.getExchangeRate(fromCurrency, toCurrency);
console.log(`Exchange rate from ${fromCurrency} to ${toCurrency}: ${exchangeRate}`);
```
Error Handling: Ensure to handle errors appropriately, as methods like convertCurrency and getExchangeRate are asynchronous and may throw errors:
 ```
try {
    // Perform currency conversion or fetch exchange rate
} catch (error) {
    console.error(`Error: ${error.message}`);
}

```
That's it! You're now ready to use the advance-currency-converter package in your project to perform currency conversions and fetch exchange rates. Make sure to replace 'YOUR_API_KEY_HERE' with your actual API key.
