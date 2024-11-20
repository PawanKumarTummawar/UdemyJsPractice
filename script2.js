// for(let i=1; i<=100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('Number ' + i + ' = FizzBuzz');
//     }
//     else if(i % 3 == 0){
//         console.log('Number ' + i + ' = Fizz');
//     }
//     else if(i % 5 == 0){
//         console.log('Number ' + i + ' = Buzz');
//     }
//     else{
//         console.log('Number ' + i);
//     }
// }

// For of loop
// const items = ['Apple', 'Banana', 'Cat'];
// const posts = [{name: 'India'}, {name: 'US'}, {name: 'Japan'}];
// for(let post of posts){
//     console.log(post);
// }

// const map = new Map();
// map.set('name', 'John');
// map.set('age', '30');

// for(const [key , value] of map){
//     console.log(key , value);
// }

// // for in loop

//         const colorObj = {
//             color1 : 'red',
//             color2 : 'green',
//             color3 : 'black',
//             color4 : 'white',
//         };

//         for(const key in colorObj){
//             console.log(key, colorObj[key]);
//         }

// for of loop
// iterates each and every item
// Loop thorough arrays
const items = ['Apple', 'bat', 'cat'];

for (const item of items) {
    console.log(item);
}

const users = [{ name: 'Pawan' }, { name: 'Rohit' }, { name: 'Ritu' }];

for (const user of users) {
    console.log(user.name);
}

// Loop over Strings
const str = 'Hello Rohit';

for (const st of str) {
    console.log(st);
}

// Loop over Maps
// Map creation down
const map = new Map();
map.set('name', 'Mike');
map.set('age', '58');

for (const [key, value] of map) {
    console.log(key, value);
}

// for in loop
// best used with objects
// creating a object down here
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
};
// by default gives us keys
for (const key in colorObj) {
    console.log(key); // gives only key value
}

for (const key in colorObj) {
    console.log(key, colorObj[key]); // to get value aise dena pdta hai
}

// for in  using array
const colorArray = ['red', 'black', 'green'];

// this gives out index in this case
// for (color in colorArray){
//     console.log(color);
// }
for (color in colorArray) {
    console.log(colorArray[color]);
}

// for Each loop
// does not return anything
// just iterates thorough entire array

const socials = ['Twitter', 'Facebook', 'Youtube'];
// below lines is a way to access the prototype of an object.
// It is an object itself and contains methods and properties inherited from the object's prototype chain.
// console.log(socials.__proto__);

// socials.forEach(function (item) {
//     console.log(item);
// })

socials.forEach((item, index, arr) => {
    console.log(`${index} - ${item} - ${arr}`);
});

function logSocials(social) {
    console.log(social);
}

// we can use forEach and pass the function as well
socials.forEach(logSocials);

//creating array of objects down the line
const socialObjs = [
    { name: 'Twitter', url: 'https://www.twitter.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Snapchat', url: 'https://www.snapchat.com' },
    { name: 'Instagram', url: 'https://www.instagram.com' },
];

// using forEach and arrow function to access the items
socialObjs.forEach((item) => console.log(item));
// socialObjs.forEach(function (item) {
//     console.log(item);
// });

// array.filter method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000];

// const evenNumbers = numbers.filter(function (number){
//     return number % 2 === 0;
// });

//shorter Way
// const evenNumbers = numbers.filter(number => number % 2 === 0);

//doing the same thing using forEach
// forEach does not return anything n toh we have to initialize variable and store the result
// const evenNumbers = [];
// numbers.forEach(number => {
//     if(number % 2 === 0){
//         evenNumbers.push(number);
//     }
// });
// console.log(evenNumbers);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },

    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },

    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },

    { name: 'Company Five', category: 'Technology', start: 2009, end: 2018 },

    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },

    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: ' Technology', start: 2011, end: 2016 },

    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

//Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);

// companies that lasted 10 years or more
const longCompanies = companies.filter(
    (company) => company.end - company.start >= 10
);
console.log(longCompanies);

//Array.map function
// Array.map() method in JavaScript is used to create a new array by applying a provided callback function to each element of the original array. It transforms the elements of the array without modifying the original array.
const numbers1 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers1.map((number) => number * 2);

console.log(doubledNumbers);

//doing the same above thing using for each

let doubledNumbers2 = [];
numbers1.forEach((number) => {
    doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);

const companies2 = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },

    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },

    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },

    { name: 'Company Five', category: 'Technology', start: 2009, end: 2018 },

    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },

    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: ' Technology', start: 2011, end: 2016 },

    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// create an array of company names
const companyNames = companies2.map((company) => company.name);

console.log(companyNames);

// create an array with just company and category
const companyInfo = companies2.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});

console.log(companyInfo);

// create an array of the objects with the name and length of each company in years

// we are returning an object here
const companyYears = companies2.map((company) => {
    return {
        name: company.name,
        companyLength: company.end - company.start + ' Years',
    };
});

console.log(companyYears);

// chain map methods   --- interesting and important
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000];

const squareAndDoubled = numbers2
    .map((number) => Math.sqrt(number))
    .map((sqrt) => sqrt * 2);
// upar pahile walle map ka content will be put in 2nd walle map k andar
console.log(squareAndDoubled);

// same chiz written above we will write below in long form

const squareAndDoubled2 = numbers2
    .map(function (number) {
        return Math.sqrt(number);
    })
    .map(function (sqrt) {
        // upar walle ka result isme ayega
        return sqrt * 2;
    })
    .map(function (tripled) {
        // then wahi sequence mai upar walle ka isme
        return tripled * 3;
    });

console.log(squareAndDoubled2);

//Chaining different methods

console.log(numbers2);
const evenDouble = numbers2
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);

console.log(evenDouble);

// REDUCE Method on arrays
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers3.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // intial value after curly brackets
// if we do not give intial value to accumulator it takes the starting element as intial vaule

// lets make the above method short with arrow function
const sum2 = numbers3.reduce((acc, cur) => acc + cur, 10); // initial value

console.log(sum2);

// doing the same thing using for of loop
// the parenthesis is necessary even if there is no parameter
// sum3 is a function here

// is walle method mai koi initial value nahi hoti qki apan reduce method use nahi krre hai toh
// we have to initialize the value with let acc = 0
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers3) {
        acc += cur;
    }
    return acc;
};

console.log(sum3());

// doing the same thing with shopping cart example ---> real life example

const cart = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0);

// doing the same thing shorter way by using arrow function
const total2 = cart.reduce((acc, productPrice) => {
    return acc + productPrice.price;
}, 0);

console.log(total2);

// ARRAY Method Challenges

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];

// Rule of Thumb
// Use {} without parentheses when you have a function body with multiple statements and need to explicitly use return to return a value.
// Use () with parentheses when you need to return an object literal directly in a concise arrow function.
const lessThan25Age = people.
filter((pep) => pep.age <= 25)
.map(obj => ({
    name: obj.firstName + " " +  obj.lastName,
    email: obj.email
}));
console.log(lessThan25Age);

// Challenge 2
const numbers4 = [2, -30, 50, 20, -12, -9, 7];

// crazy concept of method chaining down
const positiveSum = numbers4.filter(num => num > 0)
                      .reduce((acc, cur) =>
                         {
                        acc += cur;
                        return acc;
                        // upar walle ko krne ka ek aur tarika hai
                      }, 0);

console.log(positiveSum);

// Challenge 3 

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((word) => 
    // return word.charAt(0).toUpperCase() + word.slice(1);
     word.charAt(0).toUpperCase() + word.slice(1)

);

console.log(capitalizedWords);


