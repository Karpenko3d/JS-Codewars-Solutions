// ⭐ PROBLEM: https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/javascript
/* 
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
HINT: formula 180 * (n - 2)
*/

function angle(n) {
	return (n - 2) * 180
}

console.log(angle(3)) //? 180
console.log(angle(4)) //? 360

// OPTION-2
function angle_2(n) {
	return 180 * (n - 2)
}

console.log(angle(3)) //? 180
console.log(angle(4)) //? 360
