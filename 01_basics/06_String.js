const name = "Sachin"
const repoCount = 15

// console.log(name + repoCount + "SDE@Microsoft"); // ye wala syntax use nahin krna hai because ye outdated hai , so please avoid it 

// *** Ham use krenge "String Interpolation ! "

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// One more method to declare string is given below

const myName = new String ('Sachin-Kukkar-com')
// console.log(myName[0]);
// console.log(myName.__proto__);

// console.log(myName.length);
// console.log(myName.toUpperCase());


console.log(myName.charAt(2));

console.log(myName.indexOf('k'));

const newString = myName.substring(0,4)
console.log(newString);

const anotherString = myName.slice(-12,4)
console.log(anotherString);


const newStringOne = "     Sachin     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https:/Sachin.com/Sachin%20Kukkar"

console.log(url.replace('%20','-'));

console.log(url.includes('Sachin'));

console.log(myName.split('-'));