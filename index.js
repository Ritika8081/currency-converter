import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_KcuYhkqdjFNNGx6qy9XAC1X4h3FxcNfUZgqosiao');
convertCurrency("INR","USD",3);

 export async function convertCurrency(fromCurrency,toCurrency,units){
    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier=response.data[toCurrency];
    return multiplier*units;
 }

