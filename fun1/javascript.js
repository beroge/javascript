// function add7(num){
//   return num + 10
// }
// console.log(add7(7));

// function multiply(num1 , num2){
//   return num1 * num2
// }
// console.log(multiply(2 , 4));

// Make the function capitalize the first letter of a string
function capitalize(str) {
  if (str === null  || str.length === 0) {
    return str;
  }
  const words = str.split(" ");
  const capitalizedWords = [];

for (let word of words) {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  capitalizedWords.push(capitalizedWord);
} 
const capitalizedStr = capitalizedWords.join(" ");
return capitalizedStr;
}
console.log(capitalize("bean is a perfectly behaved dog and I love him"));

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(str) {
  return str.charAt(str.length - 1);
}
console.log(lastLetter("beaner"));



let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
  
    console.log ("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
    getElementById("var1"){
    element.innerHTML = i;
    }
  }
}
