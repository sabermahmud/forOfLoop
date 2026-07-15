// Task 1
// ১ থেকে ৫ না, বরং এই Array থেকে সব সংখ্যা এক লাইনে একবার করে print করো।
// let numbers = [10, 20, 30, 40, 50];
// for(let number of numbers){
//     console.log(number)
// }


// Task 2
// এই Array-এর সব সংখ্যার যোগফল বের করো।

// let arrSum = 0;
// let numbers = [5, 10, 15, 20];
// for(let number of numbers){
//     arrSum += number;
// }
// console.log(arrSum);


// Task 3 
// সব এলিমেন্ট প্রিন্ট করো
// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// for (let fruit of fruits){
//     console.log(fruit);
// }


// Task 4: শুধু জোড় সংখ্যা প্রিন্ট করো
// let numbers = [5, 8, 11, 14, 17, 20];

// let numbers = [5, 8, 11, 14, 17, 20];
// for (let number of numbers){
//     if(number % 2 === 0){
//         console.log(number)
//     }
// }

// Task 5: শুধু বিজোড় সংখ্যা প্রিন্ট করো
// let numbers = [2, 5, 8, 11, 14, 17];

// let numbers = [2, 5, 8, 11, 14, 17];
// for(let number of numbers){
//     if(number % 2 !== 0){
//         console.log(number)
//     }
// }

// Task 6
// ৫০-এর বেশি কয়টি সংখ্যা আছে তা বের করো।
// let marks = [45, 60, 72, 30, 90, 51];


// let under50 = []
// let marks = [45, 60, 72, 30, 90, 51];
// for (let mark of marks){
//     if(mark > 50){
//         under50.push(mark)
//     }
// }
// console.log(under50.length)

// Task 7: Array থেকে সবচেয়ে বড় সংখ্যা বের করো
// let numbers = [12, 45, 7, 89, 34];

let numbers = [12, 45, 7, 89, 34];
let biggest = numbers[0];
for (let number of numbers){
 if(number > biggest)
    biggest = number
}
console.log(biggest)