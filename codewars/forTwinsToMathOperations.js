// ⭐ PROBLEM: https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript
/* 
A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The bricks top and bottom are squares with diagonals equal to the bottle's diameter. The bricks fits snuggly up to the bottle neck/rim. Just for fun and also to impress the magician and people around, you decide to calculate the brick's volume. Write a function iceBrickVolume that accepts these parameters:
=> radius - bottle's radius (always > 0);
=> bottleLength - total bottle length (always > 0);
=> rimLength - length from bottle top to brick (always < bottleLength);
And return volume of ice brick that magician managed to put into a bottle.

Note:
All inputs are integers. Assume no irregularities to the cuboid brick. You may assume the bottle is shaped like a cylinder. 
The brick cannot fit inside the rim.

Examples:
iceBrickVolume(1, 10, 2); // => 16
iceBrickVolume(5, 30, 7); // => 1150
*/

function iceBrickVolume(radius, bottleLength, rimLength) {
	return (bottleLength - rimLength) * radius ** 2 * 2
}

console.log(iceBrickVolume(1, 10, 2)) //? 16
console.log(iceBrickVolume(5, 30, 7)) //? 1150
