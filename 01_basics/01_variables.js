const accountId = 26841202
let accountEmail = "Sachin@gmail.com"
var password = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 || It is now allowed to change value of const 
accountEmail="sk@sk.com"
password  = "545445142"
accountCity="Mumbai" // Ye achhi baat nhi hai beta


// console.log(accountId);
// console.log(accountEmail);
// console.log(password);
// console.log(accountCity);

/* Prefer not to use "var" because of issue in block of scope and functional scope */

console.table([accountId,accountEmail,password,accountCity,accountState])