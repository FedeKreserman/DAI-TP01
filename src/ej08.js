import axios from "axios";
const APIKEY = "63547bf4"; 


const OMDBSearchByPage = async (searchText, page = 1) => {

    let returnObject = {
     respuesta     : false,

    cantidadTotal : 0,

     datos         : []

    };
 let respuesta = await Test();

console.log('respuesta', respuesta);


const Test = async () => {

  // Esto solo busca ‘cars’

  const requestString = `http://www.omdbapi.com/?apikey=[63547bf4]&s=cars`;

  const apiResponse = await axios.get(requestString);

  return apiResponse.data.;
  return returnObject;

};


const OMDBSearchComplete = async (searchText) => {
  let returnObject = {
   respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };
  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : {}
    };
  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};


// Exporto todo lo que yo quiero exponer del módulo:

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};