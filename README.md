
# FreeCurrencyApi

The FreeCurrencyApi npm package allows you to easily interact with the FreeCurrencyApi service to convert currencies and retrieve exchange rates.

Installation
You can install the package via npm:

npm install freecurrencyapi
Usage
To use the FreeCurrencyApi class in your code, follow these steps:

## Import the required modules:

```
import axios from 'axios';
import { FreeCurrencyApi } from 'freecurrencyapi';

```

Create an instance of the FreeCurrencyApi class with your API key:

```
const apiKey = 'YOUR_API_KEY_HERE'; 
const currencyApi = new FreeCurrencyApi(apiKey);
```
Replace 'YOUR_API_KEY_HERE' with your actual API key. 

Now you can use the convertCurrency and getExchangeRate methods to perform currency conversion and retrieve exchange rates:

```
// Convert currency
const amount = 100;
const fromCurrency = 'USD';
const toCurrency = 'EUR';
const result = await currencyApi.convertCurrency(fromCurrency, toCurrency, amount);
console.log(`${amount} ${fromCurrency} equals ${result} ${toCurrency}`);
```

// Get exchange rate
const exchangeRate = await currencyApi.getExchangeRate(fromCurrency, toCurrency);
console.log(`1 ${fromCurrency} equals ${exchangeRate} ${toCurrency}`);
API
FreeCurrencyApi(apiKey)
apiKey (string): Your FreeCurrencyApi API key.
convertCurrency(fromCurrency, toCurrency, amount)
Converts an amount from one currency to another.

fromCurrency (string): The currency to convert from (e.g., 'USD').
toCurrency (string): The currency to convert to (e.g., 'EUR').
amount (number): The amount to convert.
Returns a Promise that resolves to the converted amount.

getExchangeRate(fromCurrency, toCurrency)
Retrieves the exchange rate between two currencies.

fromCurrency (string): The base currency (e.g., 'USD').
toCurrency (string): The target currency (e.g., 'EUR').
Returns a Promise that resolves to the exchange rate.

Example

```
 import axios from 'axios';
import { FreeCurrencyApi } from 'freecurrencyapi';

const apiKey = 'YOUR_API_KEY_HERE';
const currencyApi = new FreeCurrencyApi(apiKey);

const amount = 100;
const fromCurrency = 'USD';
const toCurrency = 'EUR';

// Convert currency
const result = await currencyApi.convertCurrency(fromCurrency, toCurrency, amount);
console.log(`${amount} ${fromCurrency} equals ${result} ${toCurrency}`);

// Get exchange rate
const exchangeRate = await currencyApi.getExchangeRate(fromCurrency, toCurrency);
console.log(`1 ${fromCurrency} equals ${exchangeRate} ${toCurrency}`);  
```
Note
Make sure to replace 'YOUR_API_KEY_HERE' with your actual FreeCurrencyApi API key.

By using this class, your API key is securely stored within your code.
Author- Ritika Mishra
