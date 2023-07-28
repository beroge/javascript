function add7(num){
  return num + 10
}
console.log(add7(7));

function multiply(num1 , num2){
  return num1 * num2
}
console.log(multiply(2 , 4));

// Make the function capitalize the first letter of a string
function capitalize(str) {
  if (str === null  || str.length === 0) {
    return str;
  }
  const words = str.split(" ");
  const capotalizedWords = [];
  
console.log(capitalize("bean is a perfectly behaved dog"));