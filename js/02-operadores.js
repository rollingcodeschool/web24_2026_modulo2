//métodos (Código encapsulado)
console.log("Hola mundo");

let num1 = 43;
let num2 = 4.8;
let num3 = 22;
let numString = "22";

/*
Operadores matemáticos
-------------------------
+ suma
- resta
* multiplicación
/ división
% resto
*/
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num3 % 2);

/*
Operadores Lógicos
-------------------
&& AND
|| OR 
! NOT
*/
let tengoPan = true;
let tengoQueso = false;

console.log(tengoPan && tengoQueso);
console.log(tengoPan || tengoQueso);
console.log(!tengoPan);

/*
Operadores de relación
-----------------------
> mayor
< menor
>= mayor o igual
<= menor o igual
!= distinto de
== igualación
=== igualación estricta
*/

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 != num2);
console.log(num3 == numString);
console.log(num3 === numString); //igualación estricta (compara valor y tipo)

/*
Operadores unitarios
---------------------
++ incremento
-- decremento
*/
let contador = 0;
contador++;
console.log(contador);
contador++;
console.log(contador);
contador--;
console.log(contador);
contador--;
console.log(contador);
