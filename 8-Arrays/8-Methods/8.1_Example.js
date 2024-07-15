// Given an array of numbers. Use the forEach method to find the sum of the squares of this array elements.

let numbers = [2, 3, 4, 5];
let sumOfSquare = 0;

numbers.forEach((num) => {
    sumOfSquare += num * num;
});

console.log(`The Sum Of Squar Is ${sumOfSquare}`);

// --Output:
// The Sum Of Squar Is 54

// --Lets Break-Down The Code:

// arr = [2, 3]

//     num*num = 2*2 = 4
//     sumOfSquare + num*num = 0 + 2*2 = 4

//     num*num = 3*3 = 9
//     sumOfSquare + num*num = 4 + 9 = 13

// Final Ans : 13
