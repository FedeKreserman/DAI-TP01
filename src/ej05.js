let miUrl = null;
let miObjeto = null;
miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
miObjeto = parsearUrl (miUrl);
function parsearUrl(laURL)
{
 console.log("el host es:", laURL.host)
 console.log("el pathName es:", laURL.pathname)
 console.log("los parametros son:",laURL.search)
 
}    
 