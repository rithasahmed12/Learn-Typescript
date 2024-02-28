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
let userNames = 'debug media' as const;
// userNames = 'rithas'; // doesnt work


// key of / type of
// const statusType = {
//     PENDING : 'pending',
//     COMPLETED : 'completed',
//     FAILED : 'failed',
// }as const; // const is optional , not a good practice

// function getStatus (orderId : string , status :keyof typeof statusType){

//     console.log(orderId, '==',statusType[status]); // this shows value ; output : 12345 == completed
//     console.log(orderId, '==' , status); // this shows key ; output : 12345 == COMPLETED
// }

// getStatus ('12345','COMPLETED');


// utility types
// readony  
// type Users = {
//     readonly name : string;
//     age : number;
// }

// const userDetails : Users = {
//     name : 'rithas',
//     age : 20
// }

// Readonly

// type Users = {
//      name : string;
//     age : number;
// }

// const userDetails : Readonly<Users> = {
//     name : 'rithas',
//     age : 20
// }

// Partial - make every field optional

// type Users = {
//          name : string;
//         age : number;
//     }
    
//     const userDetails : Partial<Users> = {
//         name : 'rithas'
//     } // age is not inserted no error because its optional

// required
// type Users = {
//          name : string;
//         age ?: number;
//     }
    
//     const userDetails : Required<Users> = {
//         name : 'rithas'
//     } // even age is optional in the type its made required by using required utility


// Pick
// pick only a field or selected field
// type Users = {
//          name : string;
//         age : number;
//         verified : boolean;

//     }
    
//     const userDetails : Pick<Users,'name' | 'age' > = {
//         name : 'rithas',
//         age : 11,
//     }
//     // here i picked name and age only so when i enter verified error occurs

// Omit

// type Users = {
//          name : string;
//         age : number;
//         verified : boolean;

//     }
    
//     const userDetails : Omit<Users,'name' > = {
//         age : 12,
//         verified : false
//     }
//     // omitted name 


// excluded
type MyNumbers = 1 | 2 | 3 | 4 | 5;
type OddNumbers = Exclude<MyNumbers, 2 | 4>;

const odd: OddNumbers = 1;
// const even: OddNumbers = 2; // Error: Type '2' is not assignable to type '1 | 3 | 5'


// Record
type Fruit = 'Apple' | 'Banana' | 'Orange';
type FruitPrices = Record<Fruit, number>;

const prices: FruitPrices = {
    Apple: 1.5,
    Banana: 0.75,
    Orange: 2
};

console.log(prices['Apple']); // Output: 1.5
console.log(prices['Banana']); // Output: 0.75
console.log(prices['Orange']); // Output: 2
// console.log(prices['Mango']); // Error: Property 'Mango' does not exist on type 'FruitPrices'
// utiliy end


 
