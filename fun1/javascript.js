const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
function favoriteAnimal(animal) { //animal is a placeholder
    return animal + " is my favorite animal!"
  }
 
  console.log(favoriteAnimal('Beaner')); //goat is the argument that will be passed

  function showMessage() {
    alert( 'Hello everyone!' );
  }

  // A variable declared inside a function is only visible inside that function.

  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

//   function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
  
//     alert( "Showing you the movie" ); // (*)
//     // ...
//   }
//   function doNothing() { /* empty */ }

//   alert( doNothing() === undefined ); // true

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

  function checkAge(age) {
    return age > 18 ? true : confirm("did your parents let you?");
    // ...
    
  }

  function checkAge(age) {
    alert(age > 18 ?? "did your paRENTS ALLOW YOU?"); {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

  function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)

  function fn() {
    fn();
}

fn(); // stack overflow