/*---------------------------------------------------- EJERCICIO 1 ---------------------------------------------------------
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas 
y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".*/



/* PRIMERO - Declarar una function con parametro nombre y darle las instrucciones necesarias para
 poner las  letras de un string en mayuscula y separarlas.*/
function nombreMayuscSeparado(nombre) {
    /* La primera instruccion que le vamos a dar a la function es que ponga el parametro en mayusculas*/
    nombre = nombre.toUpperCase()
    /* La segunda instruccion va a ser que separe las letras del string y cree una lista*/
    nombre = nombre.split('')
    /* Teniendo nombre convertido en una lista(array) en la que cada elemento es una letra
     podemos usar el metodo join que devuelve un string concatenando los elementos de la lista. */
    nombre = nombre.join(' ')
    /* Una funcion siempre -> return */
    return nombre
}
console.log(nombreMayuscSeparado('Ana'))

/*---------------------------------------------------- EJERCICIO  2 ---------------------------------------------------------
Declara una function que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. 
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3. */

/*PRIMERO - Declarar una function con parametro nombre y darle las instrucciones necesarias para 
que me devuelva el numero de palabras que tiene el nombre. */
function contadorPalabras(nombre) {
    /* Lo primero que vamos a hacer es convertir el nombre en un array para poder separar elementos(los separamos por espacios) 
    y no contar solo letras. */
    nombre = nombre.split(' ')
    /* Teniendo nombre convertido en una lista(array) debemos los elementos que contiene el array. */
    return nombre.length

}
console.log(contadorPalabras('Antonio Alberto Jesús'))

/*---------------------------------------------------- EJERCICIO  3 ---------------------------------------------------------
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase. */

/* PRIMERO - Dado un string (almacenado dentro de una variable) que contiene una frase debemos crear una function 
que contenga como parametro la frase */

/* Le damos instrucciones a la funcion, debe recorrer el string y contar las veces que aparece una determinada letra */

function for (let i = 0; i <= frase.length; i++) {


}


