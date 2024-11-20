console.log('Hello World');

console.log(100);
console.log('Hello World');
console.log(10, 20, 'Pawan');
// asdkjfbasdjjfbasdiufb akksjdbsdk;jfbasd;
const x = 1000;
console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Pawan', email: 'Pawan@gmail.com' });

console.group('simple');
console.error('Alert');
console.warn('Warning');
console.table({ name: 'Pawan', email: 'Pawan@gmail.com' });
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cRitika', styles);

let ab = 100;
ab = 101;
console.log(ab); // 101

const bc = 103;
// bc = 104; ----> error dega, const ko value reasign nahi kr skte
console.log(bc); // 103

let cd;
cd = 105;
console.log(cd); // 105

// const de; ----> const type mai we have to intialize at the start
de = 106;
console.log(de);

let arr = [10, 20, 30, 40];
arr.push(60); // adds element at the last
console.log(arr);

let person = {
    name: 'Pawan',
};

person.email = 'pawan@gmail.com';
person.name = 'Pawankumar';
console.log(person);

// Data types
const p4 = null;
const p5 = undefined;

const p = [1, 2, 3, 4];

const p1 = {
    name: 'Akhilesh',
};

function sayHello() {
    console.log('Inside sayHello');
}

const p2 = sayHello(); // with parenthesis mtlb function calling
const p3 = sayHello;

const output = p5;
console.log(output, typeof output);

// Primitive and Non-Primitive Data types
const nam = 'Rohit';
let newNam = nam;
console.log(nam);
console.log(newNam);

newNam = 'Vishal';
console.log(newNam);

const person2 = {
    name: 'Kusal',
};

console.log(person2);
const person3 = person2;
console.log(person3);
person3.name = 'Ramanreddy';
console.log(person2);
console.log(person3);

// conclusion ---> primitives are stored in stack and have differnt memory locations
// Non-Primitives are stored in heap and have references, they have same location

// Convert String to number
let numb = '200';
// ways to convert it to a number
// numb = +numb;  // 1st way
// numb = Number(numb); // 2nd way --> number constructor
numb = parseInt(numb); // 3rd way ---> parseInt function

//convert number to String
let numb1 = 99.5;
// numb1 = toString(numb1);
numb1 = String(numb1);

//convert string to decimal
numb1 = parseFloat(numb1);

// convert string to boolean
let amount1 = 'hello';
// amount1 = Boolean(amount1);
amount1 = parseInt(amount1);

// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

console.log(amount1, typeof amount1);

// operators

// concatenation
console.log('Hello' + ' ' + 'Pawan');

// exponent
let z = 2 ** 5;
console.log(z);

// increement

// decreement

// Assignment operators

// 3. Comparision operators

y = 2 == 2; // checks only content
y = 2 === '2'; // checks content and data type
y = 2 != 2; // opposite of ==
y = 2 !== '2'; // opposite of ===
console.log(y);

//Type coersion

let u = 5 + '5'; // concatination
u = 5 + 5;
u = 5 * '5'; // type coersion
u = 5 + Number('5');
u = 5 + null;
u = Number(null);
u = 5 + undefined; // NaN
console.log(u);

// String Methods

// Template Literal
let f = 'Pawan';
let g = 'Pune';
let e = `Hello, my name is ${f} and i live in ${g} city`;
let h = new String('Hello World');

let i = e.__proto__;

console.log(i, typeof i);

let st = '                    Hello World';
st = st.trim(); // removes unnecessary spaces
st = st.replace('Hello', "Pawan's");
let strin = st.valueOf(); // gives primitive value of object
st = st.split(' '); // splits array on the basis of given condition
console.log(st);

// Capitalize challenge
let myString = 'developer';
let my = myString.charAt(0);
my = my.toUpperCase();
myString = myString.replace('d', my);

// solution 1
my = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(my);

// solution 2
my = myString[0].toUpperCase() + myString.substring(1);

// solution 3
my = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;

console.log(my);

// Methods on number object and number
let k;

const l = new Number(5);

k = l.toString();

k = l.toString().length; // we cannot directly find length fo number so we will convert first to string and then find out

k = l.toFixed(2); // give precision after decimal point

k = l.toPrecision(4); // in total kitne values hoge

k = l.toExponential(2);

k = l.toLocaleString('en-India');

k = l.valueOf();

k = Number.MAX_VALUE;
k = Number.MIN_VALUE;

console.log(k);

// Math Object

let j;

j = Math.ceil(10.01);

j = Math.floor(10.9);

j = Math.pow(10, 3);

j = Math.max(1, 8, 17, 9);

j = Math.min(8, 9, 44, 101, 7);

j = Math.random();

j = Math.floor(Math.random() * 10 + 1); // this will be used a lot, keep this in mind
console.log(j);

// Number Challenge

let x1 = Math.floor(Math.random() * 100 + 1);
let y1 = Math.floor(Math.random() * 50 + 1);

let sumOutput = x1 + y;
let subOutput = x1 - y;
let mulOutput = x1 * y;
let divOutput = x1 / y;
let remOutput = x1 % y;

console.log('Addition output: ' + sumOutput);
console.log('Subtraction output: ' + subOutput);
console.log('Multiplication output: ' + mulOutput);
console.log('Division output: ' + divOutput);
console.log('Modulous output: ' + remOutput);

let da;

da = new Date();

da = da.toString();

da = new Date(2023, 7, 1, 11, 30, 25); // month- 0 based indexing hota hai
da = new Date('2022-07-03T10:02:51'); // and here format should be in 2 digits
da = new Date('03/09/2025 04:12:57');
da = new Date('2021-12-05');
da = new Date('12-05-2017');

da = Date.now(); // timestamp deta hai in milliseconds from 1970

da = new Date('01-02-2000 01:02:03');
da = da.getTime();
da = da.valueOf();

da = new Date(946755123000); // will give us the date

da = Math.floor(Date.now() / 1000); // will give it in seconds
// in js it is by default in milliseconds
console.log(da);

//Date Time format API

let m;
let dat = new Date();

m = dat.toString();
m = dat.getTime();
m = dat.valueOf();
m = dat.getFullYear();
m = dat.getMonth(); // 0-based indexing
m = dat.getMonth() + 1; // this gives correct ans
m = dat.getDay();
m = dat.getHours();
m = dat.getMinutes();
m = dat.getSeconds();
m = dat.getMilliseconds();
m = `${dat.getFullYear()}-${dat.getMonth() + 1}-${dat.getDay()}`; // IMPORTANT, we are going to use this format a lot

m = Intl.DateTimeFormat('en-US').format(dat); // local format mai date dega yeh
m = Intl.DateTimeFormat('en-INDIA').format(dat);
m = Intl.DateTimeFormat('default').format(dat);
m = Intl.DateTimeFormat('default', { month: 'long' }).format(dat); // gives only month with spelling

m = dat.toLocaleString('default', { month: 'short' }); // gives us the same above thing shortcut and we can use this way also

m = dat.toLocaleDateString();

console.log(m);

// ARRAYS  ------->
// Array literals
let o;
let arra = [10, 21, 35, 69, 78];
let mixed = ['Apple', 85, 98.25, 0, null];

// Array constructor --> we can create Array aise bhi
let fruits = new Array('Apple', 'Banana', 'Papaya');

o = mixed;
o = fruits[1];
o = arra[1] + arra[2];

o = `My favourite fruit is an ${fruits[0]}`;
o = fruits.length;
fruits.length = 2; // arrays are mutable and can be modified

fruits[fruits.length] = 'Strawberry';

console.log(fruits);

//Array methods

let x5;
const arrr = [10, 20, 30, 40, 50];

x5 = arrr.slice(1, 3); // will not change the array

x5 = arrr.splice(1, 3).reverse().toString().charAt(1); // 1st is the starting elment index and second is the no of elements that you want to work over
// splice is mutable that it can change the array
// it can be a way to delete an element from the array
// above we have done method chaining and it is very important in javascript
// you can do a lot of chaining it just depends on what the method returns
// so take a note of that
console.log(x5);

let x6;

let fruits1 = ['Apple', 'Banana', 'Carrot'];
let animals = ['Cat', 'Dog', 'Elephant'];

// fruits1.push(animals);

// x6 = fruits1 [3] [1] [1];

x6 = [fruits1, animals]; // dono array push ho jaenge

// console.log(x6 [1] [0] );

x6 = fruits1.concat(animals); // elements ek k baad ek laga dega

// spread operator
x6 = [...fruits1, animals]; // aisa krenge toh as a array hoga
x6 = [...fruits1, ...animals]; // and aisa krenge toh elements add hoga

// Flatten array
let arr1 = [1, 2, [3, 4], 5, 6, [7, 8]];
x6 = arr1.flat();

// Static methods on array objects

// x6 = Array.isArray('Hello'); // gives false because it is not an array
x6 = Array.isArray(arr1); // true --> because it is an array
x6 = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x6 = Array.of(a, b, c); // creates an array
console.log(x6);

// Array challenges

let arr2 = [1, 2, 3, 4, 5];
arr2 = arr2.reverse();
arr2.push(0);

console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
let arr4 = [5, 6, 7, 8, 9, 10];

let x7 = arr3.concat(arr4);

x7.splice(5, 1);

console.log(x7);

let person1 = {
    name: 'Pawan',
    city: 'Pune',
    rollNo: 69,
    address: {
        area: 'Hinjewadi',
        pg: 'Sunlight',
    },
    hobbies: ['music', 'sports'],
};

let x8 = person1.name;
x8 = person1['city'];
x8 = person1.address.area; // if we want to access property of object inside of object
x8 = person1.hobbies[0];

person1.name = 'Rohit';
person1['rollNo'] = 89;

delete person1.rollNo;

person1.greet = function () {
    console.log('Hello you are inside greet function.');
};
person1.greet();

const person4 = {
    'first name': 'Tulip',
    'last name': 'kumar',
};
//agar space dia hai property name mai toh aise notation mai access krna padega
console.log(person4['first name']);

// object spread operator and methods

// we are using the object constructor to create an object
let person5 = new Object();

person5 = { a: 5, b: 6 };
let x9 = person5;

let per = { a: 1, b: 2 };
let per1 = { c: 3, d: 4 };

x9 = { per, per1 }; // 2 alag alag objects rahenge isme
x9 = { ...per, ...per1 }; // using spread operator we can combine everything
x9 = Object.assign({}, per, per1);

const todos = [
    { name: 'A', id: 45 },
    { name: 'B', id: 46 },
    { name: 'C', id: 47 },
];

const todo = {
    name: 'A',
    id: 45,
    roll: 1,
};

x9 = todos;
x9 = todos[0].name;

x9 = Object.keys(todo); // it gives out the all keys into the array
// we cannot directly find out the length of the object
// so we can of the array, as shown below
x9 = Object.keys(todo).length;
x9 = Object.values(todo); // sare values ko lakr deta hai in the form of array elements
// x9 = Object.entries(todo); // sare property value pair ko lakr deta hai in the form of array

// x9 = todo.hasOwnProperty('roll'); // check krta hai if this property is present or not

console.log(x9);

const name = 29;
const age = 97;

// const todos1 = {  if something is already declared then we do not have to reassign it
//     name: name,  // we can directly use the variable name
//     age: age,   // saves time and developers do it
// };

const todos1 = {
    name,
    age,
};

console.log(todos1.age);

const todo2 = {
    id: 2,
    title: 'Abc',
    user: {
        name3: 'John',
    },
};

const {
    id: todoId,
    title,
    user: { name3 },
} = todo2;

console.log(todoId, title, name3);

// DESTRUCTURING ARRAYS

const numbers = [23, 61, 57, 81, 99, 101]; // square braces , curly braces ka dhyan rkhna

// rest operator similar to spread operator
const [first, second, ...rest] = numbers;

console.log(first, second, rest);

// JSON

const post = {
    id: 10,
    name: 'pawank',
    body: 'This is body',
};

const posts = [
    {
        id: 10,
        name: 'pawank',
        body: 'This is body',
    },

    {
        id: 20,
        name: 'pawanku',
        body: 'This is body',
    },
];
// convert to JSON string
const str = JSON.stringify(posts);

// parse JSON  (converting JSON format to Javascript object)
const obj = JSON.parse(str);

console.log(obj);

// we cannot access elements from JSON format
// we can only after parsing

// FUNCTIONS

function substract(num1, num2) {
    // function parameters
    return num1 - num2;
}

const result = substract(1, 2); // function arguments

console.log(result, substract(10, 6)); // can call directly

function login(user = 'Pawan') {
    // function parameters
    return user + ' is registered';
}

// console.log(login());

console.log(login());

//Rest parameters
// Rest return an array
function sum(...numbers){ 
    // return numbers
    let total = 0;
    for(num3 of numbers){
        total += num3;
    }
    return total;
}

console.log(sum(1, 3, 6, 9, 11));

// Object Params

function loginUser(user4){

    return `The user ${user4.name} with id ${user4.id} is logged in`;
}

const user4 = {
    id:11,
    name: 'John1',
};

// console.log(loginUser(user4))

console.log(loginUser({  // object pass krdia
    id: 2,
    name: 'John2',
}));

// Arrays as params

// this function generates random element from the array
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    console.log(item);
}

// Rest operator bhi use kr skte hai
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// FUNCTION SCOPE ---> Global and Local scope

// window.alert("HI");

// console.log(window.innerHeight);


// var is function scoped and not block scoped (if, else, for, etc)
// whereas let and var are block scoped 

// and also var is added to window object whereas const is not added
// so both the not block scoped and window object thing is not good 


//NESTED function scope

function parent(){
    const x = 100;
    // console.log(x+y10);  // parent cannot access child ka

    function child(){
        const y10 = 200;
        console.log(x+y10);  // child can access parent ka
    }
    child();  // this function should be called here only not outside

}

parent();

// The above same concept can be applied with blocks(if, else, for, etc)

// FUNCTION EXPRESSION

const addPlusSign = function (value){
    return '+' + value;
};

console.log(addPlusSign(100));

// In javascript function declaration and function defination is considered same 
// because it happens at the same time 
// VARIABLE HOISTING ---> it is pre step before code excution and it puts the 
// function at the top of file before execution and does not display error
// even if the function is called before it is defined 
// NOTE- that it only works for function declaration and not for function expression

// ARROW FUNCTION

function add1(x, y){
    return x + y;
}

console.log(add1(2, 3));


// now converting it to arrow function

const add2 = (a, b) => {
    return a + b;
}

console.log(add2(10, 10));

// implicit return ( Arrow one liner code )

const substract1 = (a, b) => a-b;

// if we have one parameter we can make it even shorter 
const substract2 = a => a * 2;
console.log(substract2(10));

console.log(substract1(1, 10));

// Returning objects

const createObj = () => ({
    name: 'Brad',
});

console.log(createObj());

const numbers1 = [1, 2, 3, 4, 5, 6, 7];

numbers1.forEach(function (n){
    console.log(n);
});

// Arrow function in a Call back
// another shorter method 
numbers1.forEach(n => console.log(n));

// Immediately Invoked Function

(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log("Hello " + user);
    hello();
})();

(function (name) {
    console.log("Hello " + name + " inside IIFE");
})('White');


// FUNCTION Challenge-1

// Method - 1 --> Normal Method
// function getCelcius(f){
//     return (f-32) * 5/9;   
// }

// Method - 2 --> Arrow function
// const getCelcius = (f) => {
//     console.log((f-32) * 5/9);
// }

// Method - 3 --> One liner Arrow Function
const getCelcius = f => console.log((f-32) * 5/9);

getCelcius(10);


// FUNCTION Challenge-2

// Method-1 by using Normal Function
// function minMax(arr) {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     // console.log(max);
//     // console.log(min);

//     return {
//         min, 
//         max,
//     };
// }

// Method - 2 by using Arrow Function
const minMax = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return {
        max, 
        min,
    };
}
console.log(minMax([0, 1, 2, 3, -1, -99, 4, 5, 999, 6, 31]));


((l, b) => {
    console.log(`The area of rectangle with length = ${l} and breadth = ${b} is ${l*b}`);
})(8, 11);

const x11 = 10;
const y11 = 20;

function getSum(a, b){
    const sum = a + b;
    return sum;
}

const sum1 = getSum(x11, y11);
const sum2 = getSum(10, 10);


// Conditions --> control flow statements 

const d = new Date(2022, 10, 30, 8, 20, 100);
const sec = d.getSeconds();

console.log(sec);


// Calculator Challenge

// Method 1
function cal1(num1, num2, op){
    if(op == '+'){
        return num1 + num2;
    }
    if(op == '-'){
        return num1 - num2;
    }
    if(op == '*'){
        return num1 * num2;
    }
    if(op == '/'){
        return num1 / num2;
    }
    if(op == '%'){
        return num1 % num2;
    }
}

console.log(cal1(10, 2, '%'));

// Method 2

function cal2(num1, num2, op){
    switch (op){

    case '+': 
        return num1 + num2;
       
    case '-':
        return num1 - num2;
        
    case '*':
        return num1 * num2;
        
    case '/':
        return num1 / num2;
        
    case '%':
        return num1 % num2;

    default:
        return "Error";
    }
}

console.log(cal2(10, 2, '$'));


// Truthy and Falsy Caveats
const children = 0;

// if(children != undefined){
//     console.log(`You have ${children} children`);
// }

if(!isNaN(children)){
    console.log(`You have ${children} children`);
}
else{
    console.log('Please enter no of children');
}

// Checking for empty objects 

const user5 = {
    name: 'Pa',
}
const len = Object.keys(user5).length;
if(len > 0){
    console.log("Object Elements exist");
}
else{
    console.log("Objects Elements do not exist");
}


 // Loosely Equality

if(false == 0){
    console.log("inside if");
}
else{
    console.log("inside else");
}

if(false === 0){
    console.log("inside if");
}
else{
    console.log("inside else");
}


// Logical Operators
// and will show first falsy value or else if all true it will show last value 
const ope = 10 && 20 && 30;

console.log(ope);

// useful in API calling etc
const post1 = ['Post One', 'Post Two'];

posts.length > 0 && console.log(posts[0]); 


let aa = false;

// to check if aa consists of true or false
if(!aa){
    aa = 10;
}

console.log(aa);


// or another method 
aa = aa || 10;

aa ||= 10; 

// nullish coelison operator 

let bb = null;

if(bb === null || bb === undefined){
    bb = 20;
}
 
// another version
bb = bb ?? 20;

bb ??= 20;

console.log(bb);

let auth = 1;

// const redirect = auth ? (alert('Welcome to the Dashboard'), '/dashboard') : (alert('Access Denied'), '/login');

// console.log(redirect);

// agar else mai koi bhi chiz nahi rkna hai toh null likh do 
auth ? console.log('Welcome to the Dashboard') : null;

// or another method ---> we are going to use this a lot
auth && console.log('Welcome to the dashboard'); 