/* Requirement
You need to write an algorithm & it's implementation for Reversing words from a given string. 
It should only reverse the words & make sure not to touch the numbers.

See test cases below.
- abc23de <=> cba23ed
- 1ab <=> 1ba
- 123 <=> 123
*/

let str = "123ab45cd";
const myArr = str.split(/(\d+)/); //split the string with regex
let newStr = "";
for (i = 0; i < myArr.length; i++) {
  if (myArr[i] !== "") {
    if (/\d/.test(myArr[i])) newStr += myArr[i];
    //test the array element with regex  whether it is number or not
    else newStr += myArr[i].split("").reverse().join(""); // split the element and reverse
  }
}
console.log("Reversed String is:", newStr); // print new string
