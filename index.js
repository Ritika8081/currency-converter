import axios from 'axios';

export class FreeCurrencyApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.freecurrencyapi.net/api/v2/';
    }

    async convertCurrency(fromCurrency, toCurrency, amount) {
        try {
            const response = await axios.get(`${this.baseUrl}convert`, {
                params: {
                    apiKey: this.apiKey,
                    from: fromCurrency,
                    to: toCurrency,
                    amount: amount
                }
            });
            if (response.data.status === 'success') {
                return response.data.result;
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            throw new Error(`Failed to convert currency: ${error.message}`);
        }
    }

    async getExchangeRate(fromCurrency, toCurrency) {
        try {
            const response = await axios.get(`${this.baseUrl}latest`, {
                params: {
                    apiKey: this.apiKey,
                    base: fromCurrency,
                    symbols: toCurrency
                }
            });
            if (response.data.status === 'success') {
                return response.data.rates[toCurrency];
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            throw new Error(`Failed to get exchange rate: ${error.message}`);
        }
    }
}
