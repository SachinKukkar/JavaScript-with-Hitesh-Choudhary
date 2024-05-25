let score = "33abc"

console.log(typeof score);

console.log(typeof (score));

// upr wale dono hi tarike sahi hai 

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber);


// "33" => easily convert ho jaega number 33 me 
// "33abc" => NaN (Not a Number)
// null => 0 aega
// bool => 0/1 aega as per false/true
// undefined => NaN hi aega


/* Note the the type of NaN is "number" */

let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNum = 33
let stringNum = String(someNum)
console.log(stringNum)




