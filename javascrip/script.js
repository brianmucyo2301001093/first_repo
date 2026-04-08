//1.  let number1 = 10;
// let number2 = 20;
//  let sum  = number1 + number2;
//  console.log(sum);

// 2. let username = "brian";
// let age = 26;
// console.log("my name is " + username + " and i am " + age + " years old");  
// let product="laptop";
// let price= 1000;
// console.log(product + price);

// 3.let number1 = 10;
// let number2 = 20;
// console.log("number 1 is " + number2 + " and number 2 is " + number1);

// 4.let array1 = [1, 2, 3, 4, 5];
// let array2 = ["apple", "banana", "orange"];
// console.log(array1[0] + " " + array2[2]);

// 5. let product = {
//     name: "dell laptop",
//     price: 1000,
// };
// console.log("laptop " + product.name + " price: $" + product.price );

// 6.let x= 10;
// console.log(x + 5);
// let x = 10;
// x += 5;
// console.log(x);

// 7.let x = 11;
// if (x > 10) {
//     console.log("x is greater than 10");
// }   else {
//     console.log("x is less than or equal to 10");
// }

//8. let islightOn = true;
// let itlight = false;
// if (islightOn) {
//     console.log("the light is on");
// } else {
//     console.log("the light is off");
// }

//9. const mytext = " this sentence is converted into a string variable.";
// console.log(mytext);

//10.  let number1 = 10;
//  let number2 = 20;
//  let sum = number1 + number2;
//  console.log(sum);

//11. let number1 = 10;
// let number2 = 20;
// console.log(number1 + number2);

//12. let number1 = 10;
// let number2 = 20;
// let  number3 = 30;
// console.log(number1 + number2 + number3);

//14. let number1 = 10;
// let number2 = 20;
// if (number1 === number2) {
//     console.log("number1 is equal to number2");
// } else {
//     console.log("number1 is not equal to number2");
// }  

//15. const scores = [85, 90, 78, 92, 88];
// const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
// console.log("Student: " + students[0] + ", Score: " + scores[0]);


//17. let score = 85;
// if (score > 50) {
//     console.log("pass");
// } else {
//     console.log("fail");
// }

//18 let number1 = 10;
// let number2 = 20;
// console.log(number2 - number1);

//19. let number1 = 10;
// let number2 = 20;
// console.log(number1 * number2);

// 20.A variable is a named container for storing data values

// ======================================================================================

// 1. for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// 2. for (let i = 2; i <= 10; i+= 2) {
//     console.log(i);
// }

// 3.for (let i = 1; i <= 10; i+= 2) {
//     console.log(i);
// }

// 4.  let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);

// 5. const name = "Alex";

// for (let i = 0; i < 5; i++) {
//   console.log(name);
// }

// 6. let number = 2;
// for (let i = 1; i <= 5; i++) {
//     console.log(number * i);
// }

// 7. const fluetes = ["banana", "mango", "orange", "grape", "kiwi", "strawberry", "watermelon", "pineapple", "peach", "pear"];
// for (let fluete of fluetes) {
//     console.log(fluete);
// }

// 8. for (let i = 9; i >= 0 ; i--) {
    
//         console.log(i);
//     }

// 9. let sum = 0;
// for (let i = 1; i <= 60; i++) {
//     sum += i;
// }
// console.log(sum);

// 10. function findlagestnumber(numbers) {
//     let largest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }   
//     }
//     return largest;
// }
// const numbers = [10, 5, 8, 20, 15];
// const largestNumber = findlagestnumber(numbers);
// console.log("the largest number is: " + largestNumber); 

//11. for (let i = 1; i <= 5; i++) {
//     console.log("hlooo");
// }

// 12. const prices = [10000, 20000, 30000, 40000, 50000];
// let totalPrice = 0;
// for (let price of prices) { 
//     totalPrice += price;
// }
// console.log("the total price is: " + totalPrice);

// 13. const number =2;
// for (let i = 1; i <= 5; i++) {
//     const result = number * i;
//      console.log(`${number} x ${i} = ${result}`);
// }

// 14. const numbers=[1,3,4,6,2,6,10,11]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 5) {
//          console.log(numbers[i] + " is greater than 5");
//     }
// } 

// 15. const amount = 100;
// const discount = amount * 20/100;
// if (amount > 50) {
//     console.log("you get a discount of: " + discount  + "\n" + "And the final price is: " + (amount - discount));
// }  

// 16. const scores = [35, 90, 28, 92, 88];
// let count = 0;
// for (let i = 0; i < scores.length; i++) {
// if (scores[i] > 50) {
//     count++;
// }
// }
//     console.log("Number of students who passed: " + count);

// 17. const scores = [35, 50, 68, 92, 88];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > 50) {
//         console.log("Student " + (i + 1) + " passed with a score of: " + scores[i]);
//     } else {
//         console.log("Student " + (i + 1) + " failed with a score of: " + scores[i]);
//     }
// }

// 18. for (let i = 1; i <= 5; i++) {
//     console.log(i *3);
// }

//19. const numbers = [1, 2, 3, 4, 5];
// let sum= 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }   
// const average = sum / numbers.length;
// console.log("the average is: " + average);

// =====================================================================================


    
