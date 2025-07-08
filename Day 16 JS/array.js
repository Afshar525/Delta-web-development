// Array (Data structure)
// let student1 = "kaushar"
// let student1 = "afshar"
// let student1 = "afjal"
// let student1 = "arshad"

// short

// students = ["kaushar", "afshar", "afjal", "arshad"];
// console.log(students);

//visualization array

// let nums = [2, 4, 6, 8,];
// console.log(nums);

//creating array

// let marks = [95, 74, 54, 42, 100,]
// let names = ["afshar", "kaushar", "afjal", "arshad"];
// let info = ["afshar", 21, 66.1];
// console.log(info);

//empty array

// let newArr = [];
// console.log(newArr);

// arrays are mutable

// let fruits = ["mango", "apple", "litchi"]
// console.log(fruits[0] = "banana");
// console.log(fruits);

// Array push method

// let cars = ["auti", "bmw", "xuv", "maruti"]
 

//last Practice Question1

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(0, n);
// console.log(ans);

// Qs 2

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(arr.length-n)
// console.log(ans);

// Qs 3

// let str = prompt("please enter your string");
// if (str.length == 0) {
//     console.log("string is empty")
// } else {
//     console.log("string is not empty");
// }

// Qs 4 

// let str = "ApNaCoLlAgE";
// let idx = 3;
// if (str[idx] == str[idx].toLowerCase() ) {
//     console.log("character is lowercase");
// }else {
//     console.log("character is not lowercase");
// }

// Qs 5

// let str = prompt("please enter a string ")
// console.log(`original string = ${str} `);
// console.log(`string without spaces = ${str.trim()}`); 

// Qs 6 

let arr = ["hello", 'a', 23, 64, 99, -6];
let item = 23;
if (arr.indexOf(item) != -1 ) {
    console.log("element exist in array");
}else {
     console.log("element doesn't exist in array")
}