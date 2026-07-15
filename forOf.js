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

let numbers = [5, 8, 11, 14, 17, 20];
for (let number of numbers){
    if(number % 2 === 0){
        console.log(number)
    }
}