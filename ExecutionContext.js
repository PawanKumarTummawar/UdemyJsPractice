// const x11 = 10;
// const y11 = 20;

// function getSum(a, b){
//     const sum = a + b;
//     return sum;
// }

// const sum1 = getSum(x11, y11);
// const sum2 = getSum(10, 10);

function first() {
    console.log("Inside First");
    second();
}

function second() {
    console.log("Inside second");
    third();
}

function third() {
    console.log("Inside Third");
}

first();
second();
third();

