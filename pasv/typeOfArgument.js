/** ⭐ PROBLEM:
Write a function called typeOfArgument that takes one value as an argument and returns the data type of the argument.

Examples:
> the typeOfArgument (5) function should return "number"
> the typeOfArgument ('hello') function should return "string"
> function typeOfArgument (true) must return "boolean"
> function typeOfArgument (null) must return "object"
*/

function typeOfArgument(value) {
	if (typeof value === 'number') {
		return 'number'
	} else if (typeof value === 'string') {
		return 'string'
	} else if (typeof value === 'boolean') {
		return 'boolean'
	} else if (typeof value === 'object') {
		return 'object'
	} else {
		return typeof value
	}
}

console.log(typeOfArgument(5)) // number
console.log(typeOfArgument('hello')) // string
console.log(typeOfArgument(true)) // boolean
console.log(typeOfArgument(null)) // object
