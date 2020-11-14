/** ⭐ PROBLEM:
 Write a function named numbersIncrement that takes the value as an argument and if that value is a number, 
 returns it incremented by 1, otherwise, it returns the message "It is not a number".

Examples:
> numbersIncrement (5) should return 6;
> numbersIncrement ('abcd') should return "It is not a number";
> numbersIncrement (Infinity) should return Infinity.
> numbersIncrement (-Infinity) function should return -Infinity;
> numbersIncrement (NaN) should return NaN (since NaN + 1 is equal to NaN).
> Write a function called typeOfArgument that takes one value as an argument and returns the data type of the argument.
*/

function numbersIncrement(value) {
    if(typeof value === 'number') {
        return ++value
     } else if (typeof value === 'string') {
         return 'It is not a number'

     } else if (typeof value === Infinity) {
         return 'Infinity'
     } else if (typeof value === -Infinity) {
         return '-Infinity'
     } else if (typeof value === NaN) {
         return NaN
     } else {
         return typeof value
     }
}

console.log(numbersIncrement(5)) // 6
console.log(numbersIncrement('abcd')) // It is not a number
console.log(numbersIncrement(Infinity)) // Infinity    
console.log(numbersIncrement(-Infinity)) // -Infinity
console.log(numbersIncrement(NaN)) // NaN   
