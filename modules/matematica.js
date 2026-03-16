/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
 let suma= x + y;
 return suma;
}
const multiplicar = (a, b) => {
  let multiplicacion= x * y;
 return multiplicacion;
};
const restar = (a, b) => {
  let resta= x - y;
 return resta;
};
const dividir = (a, b) => {
  let division= x / y;
 return division;
};

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar};
