let miUrl = null;
let miObjeto = null;

try {
  miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
} catch (error) {
  console.log("Error al crear la URL:", error.message);
}

miObjeto = parsearUrl(miUrl);
console.log(miObjeto);

function parsearUrl(laURL) {
  try {
    if (laURL==null) throw new Error("URL inválida");

    console.log("el host es:", laURL.host);
    console.log("el pathName es:", laURL.pathname);
    console.log("los parametros son:", laURL.search);

    return {
      host: laURL.origin,
      pathname: laURL.pathname,
      parametros: laURL.search
    };

  } catch (error) {
    console.log("Error en parsearUrl:", error.message)
    console.log("host:", null);
    console.log("pathname:", null)
    console.log("parametros:", null)

    return {
      host: null,
      pathname: null,
      parametros: null
    };
  }
}