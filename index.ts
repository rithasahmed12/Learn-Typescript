// Infer Types(Implicit Types)
// let userName = 'Debug Media';
// let subscribers = 30_000;


// Defining Types (Explicit Types)
let userName:string = "Debug Media";
let subscribers: number = 30_000;
let isSubscribed: boolean = true;
let skills:string[] = ['js','css','ts'];
let count: number[] = [1,2,3,4];
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
function getUserName({name,age}:{name:string;age:number}):string{
    return name;
}

const newValue = getUserName({name:'rithas',age:22});

newValue.toUpperCase();


// Named Types
type status = "Pending"| "completed" | 'failed';

let currentStatus : status = 'Pending';

const response = 'pending';

if(response === "pending"){
    currentStatus = 'Pending';
}
 

// function overloading

// function add (num1:number | string , num2:number | string):number | string{
//     return num1 + num2;
// } to solve this problem function overloading is brought

function add(num1:string , num2:string):string;
function add(num1:number , num2:number):number;

function add (num1:any , num2:any):any{
    return num1 + num2;
}

add(2,2);
add('2','2');

// Generics
// automatically infer the datatype
function getAge<T>(age:T):T{
    return age;
}
getAge<string>('20'); //we can specify data type here when calling function
getAge<number>(20);

type userDetail = {
    name : string;
    age : number;
}

type adminDetail = {
    name : string ; 
    role : string ;
}


const userDetail = {
    name : "rithas",
    age : 20
}

const adminDetail = {
    name : 'ahmed',
    role : 'admin'
}

function getDetails<T>(details:T):T{
    return details;
}

const userValue = getDetails<userDetail>(userDetail);
const adminValue = getDetails<adminDetail>(adminDetail);

userDetail.age;
adminDetail.role;



