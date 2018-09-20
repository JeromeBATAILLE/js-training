'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadenCase(text) {
   return text.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
 };
/*
function jadenCase(text) {
  return text.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
*/
//* Begin of tests
const assert = require('assert')

/*assert.strictEqual(typeof jadenCase, 'function')*/
assert.strictEqual(jadenCase('You must write your own tests'), 'You Must Write Your Own Tests')
assert.strictEqual(jadenCase('You are the test'), 'You Are The Test')
assert.strictEqual(jadenCase('Who is chmod777'), 'Who Is Chmod777')
// End of tests */
