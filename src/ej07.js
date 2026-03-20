import { getCurrency } from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    const moneda = currencyMap.getCurrency(codigoPais);
    return moneda ? moneda : null;
}

let monedaDelPais, codigoPais;

codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);