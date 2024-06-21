/*Ejercicio 1: Crear una expresión regular que coincida con cualquiersímbolo de moneda.
let texto1 = "$100"
let expresion1 = /\p{S}/gu
console.log(texto1.match(expresion1))*/

/*Ejercicio 2: Crear una expresión regular que coincida con cualquier carácter de 
espacio (incluyendo espacios, tabulaciones y saltos de línea).

let texto2 = "e t r "
             + "\ns .       "
let expresion2 = /\p{Z}|\u000A|\u+0009/gu
console.log(texto2.match(expresion2))*/

/*Ejercicio 3: Crear una expresión regular que coincida con letras
mayúsculas y minúsculas en scripts latinos y griegos.

let texto3 = "Hola eSte es mi idioma Γειά σου Κόσμε"
let expresion3 = /\p{Lu}|\p{Ll}/gu
console.log(texto3.match(expresion3))*/

/*Ejercicio 4: Crear una expresión regular que coincida con cualquier
letra o número.
*/
let texto4 = "abcd1234 %$"
let expresion4 = /\p{N}|\p{L}/gu
console.log(texto4.match(expresion4))
