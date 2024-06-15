 /*

There are two types of memories in JS - Stack Memory and Heap Memory 

1.Stack Memory is used with primitive data types 

*** Note *** 
Jab bhi stack memory use hoti hai to jo bhi aapne variable declare kara hai to apko uski copy milti hai not the original one 


2.Heap Memory is used with Non-Primitive data types

*** Note ***
Jab bhi Heap Memory use hoti hai to jo bhi  aapne variable declare kara hai to apko uska reference milta hai , i.e. original value se chhed-chaad hogi 
 

*/


let myname = "SachinKukkar"
let anothername = myname
anothername = "Microsoft SDE"


console.log(myname);
console.log(anothername);


let userOne = {
    email : "user1@google.com" ,
    upi : "userone@ybl"
}

let userTwo = userOne

userTwo.email = "Sachin@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);
