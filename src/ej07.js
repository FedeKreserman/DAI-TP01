import { getCurrency } from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    const moneda = getCurrency(codigoPais);
    console.log(moneda)
    return moneda ? moneda : null;
}

let monedaDelPais, codigoPais;

codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(monedaDelPais)
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);