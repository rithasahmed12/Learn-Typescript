"use strict";
// Infer Types(Implicit Types)
// let userName = 'Debug Media';
// let subscribers = 30_000;
// Defining Types (Explicit Types)
let userName = "Debug Media";
let subscribers = 30000;
let isSubscribed = true;
let skills = ['js', 'css', 'ts'];
let count = [1, 2, 3, 4];
// let userDetail: {name:string;age:number;salary:number} = {
//     name:'rithas',
//     age:22,
//     salary:30000
// }
// Interface
// interface Details {
//     name : string;
//     age: number;
//     salary: number;
//     getName: ()=> void;
// } 
// let userDetail : Details = {
//     name: "Debug Media",
//     age: 20,
//     salary:100,
//     getName() {
//         console.log(this.name);
//     },
// }
// let adminDetail : Details = {
//     name: "Debug Media",
//     age: 20,
//     salary:100,
//     getName() {
//         console.log(this.name);
//     },
// }
// Type
// union/optional operator ( | <=='OR', )
// type Details = {
//     name : string;
//     age: number | string; //type number or string
//     salary: number;
//     getName ?: ()=> void; 
//     // ? represent optional chaining in js, 
//     // its optional to declare the function when calling 
// }
// let userDetail : Details = {
//     name:'Rithas',
//     age:12,
//     salary:32222
// }
// function getUserName(userDetail:Details){
//     return userDetail.name;
// }
// getUserName(userDetail);
//  /////////////////////////////
function getUserName({ name, age }) {
    return name;
}
const newValue = getUserName({ name: 'rithas', age: 22 });
newValue.toUpperCase();
let currentStatus = 'Pending';
const response = 'pending';
if (response === "pending") {
    currentStatus = 'Pending';
}
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
add('2', '2');
// Generics
// automatically infer the datatype
function getAge(age) {
    return age;
}
getAge('20'); //we can specify data type here when calling function
getAge(20);
// type userDetail = {
//     name : string;
//     age : number;
// }
// type adminDetail = {
//     name : string ; 
//     role : string ;
// }
// const userDetail : userDetail = {
//     name : "rithas",
//     age : 20
// }
// const adminDetail : adminDetail = {
//     name : 'ahmed',
//     role : 'admin'
// }
// function getDetails<T>(details:T):T{
//     return details;
// }
// const userValue = getDetails<userDetail>(userDetail);
// const adminValue = getDetails<adminDetail>(adminDetail);
// userDetail.age;
// adminDetail.role;
// // combining types
// type userDetail = {
//     name : string;
//     age : number;
// }
// // combining types userDetail to adminDetail and also adding additional types
// type adminDetail = userDetail & {
//     role : string ;
// }
// // combining Interface
// interface userDetail {
//     name : string;
//     age : number;
// }
// // combining interface userDetail to adminDetail and also adding additional types
// interface adminDetail extends userDetail {
//     role : string ;
// }
// const userDetail :userDetail = {
//     name : "rithas",
//     age : 20
// }
// const adminDetail :adminDetail = {
//     name : 'ahmed',
//     age: 10,
//     role : 'admin'
// }
// Enums
// type = statusType = 'Pending' | 'completed' | 'failed' ;
// enums work at runtime
// const enum statusType {
//     PENDING = 1,
//     COMPLETED ,
//     FAILED,
// } // const is optional , not a good practice
// function getStatus (orderId : string , status : statusType){
//     console.log(orderId, '==',status);
// }
// getStatus ('12345',statusType.COMPLETED);
// as const
// it becomes read only
let userNames = 'debug media';
const odd = 1;
const prices = {
    Apple: 1.5,
    Banana: 0.75,
    Orange: 2
};
console.log(prices['Apple']); // Output: 1.5
console.log(prices['Banana']); // Output: 0.75
console.log(prices['Orange']); // Output: 2
// console.log(prices['Mango']); // Error: Property 'Mango' does not exist on type 'FruitPrices'
// utiliy end
