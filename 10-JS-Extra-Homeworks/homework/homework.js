// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for(var clave in objeto) {
    matriz.push([clave, objeto[clave]]);
  };
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4,
  // s: 5 } 
  //Escribe tu código aquí
  var devuelveCaracter = {};
  for(var i = 0; i < string.length; i++) {            //contador (recorre el string)
    if(!devuelveCaracter.hasOwnProperty(string[i])) { //.hasOwnProperty pregunta si el objeto que está ingresando existe.
      devuelveCaracter[string[i]] = 1;                //! niega todo, en este caso se lee: si el objeto ingresado no existe 
    }                                                 // entonces lo creo en la siguiente linea y si existe no se ejecuta 
    else {
      devuelveCaracter[string[i]]++;                  // este if y pasa al else, entonces se incrementa el valor de string en 1.
    }
  }
  return devuelveCaracter;                            //Me devuelve el objeto con la clave y el valor. ej: {a:5, b:2, etc}
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var reciveMayus = '';
  var reciveMinus = '';
  for(var i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()){   //.toUppercase se refiere a las letras mayusculas, en este caso, de s.
      reciveMayus += s[i];            // si son mayusculas se guardan en la variable reciveMayus
    }
    else{                             // si no lo son, se guardan en la variable reciveMinus
      reciveMinus += s[i];
    }
  }
  return reciveMayus.concat(reciveMinus); // .concat sirve para añadir algo a algo, en este caso, se añade reciveMinus
}                                         // a reciveMayus. Funciona como una suma. ej: reciveMayus + reciveMinus


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = str.split(' ');           // lo separa y me devuelve un arreglo ['The', 'Henry', 'Challenge', 'is', 'close!']
  for(var i = 0; i < espejo.length; i++){   // contador
    espejo[i] = espejo[i].split('').reverse().join('');  // .split('') filetea cada palabra ingresada en letras.
  }                                                      // .reverse() devulve cada letra al reves.
  return espejo.join(' ');                                // .join('') vuelve a juntar cada letra en palabras.
}                                                       // el .join(' ') de return vuelve a juntar cada palabras en una frase, como al inicio.


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número que se lee es igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var recibe = numero.toString();           // .toString() convierte numero a string
  var numInver = recibe.split('').reverse().join(''); //corta, invierte y une cada numero recibido
  if( recibe === numInver) {              // se determina si los numeros recibidos son iguales a numInver
    return 'Es capicua'                   // el cual es numero pero invertidas sus letras, si son iguales
  }                                       // es capicua
  else {
    return 'No es capicua'                // de lo contrario no es capicua
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadena2 = '';
  for(var i = 0; i < cadena.length; i++) {
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      cadena2 = cadena2 + cadena[i];                                  //guarda lo acumulano en cadena2 y le sigue agregando
    }                                                                 //los demas elementos de cadena.
  }
  return cadena2;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b) {     //sort() ordena en orden alfabetico primero mayusculas y luego minusculas
   if(a.length > b.length) {     //a y b son las posiciones del array. ej: primero seria 'you' y 'are'; luego 'are' y 'beautiful'; etc
    return 1;                   // 1: coloca primero b y luego a en el array . Es el array invertido
   }
   if(a.length < b.length) {
    return -1;                  // -1: coloca primero a y luego b en el array
   }
   if(a.length === b.length) {
    return 0;                   // 0 regresa a y b en sus posiciones originales
   }
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  //Para entender mejor:
  //arreglo1 = [4, 2, 3]
  //            i
  //arreglo2 = [1, 3, 4]
  //            j
  var nuevoArray = [];
  for(var i = 0; i < arreglo1.length; i++) {
    for(var j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
        nuevoArray.push(arreglo1[i]);
      }
    }
  }
  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

