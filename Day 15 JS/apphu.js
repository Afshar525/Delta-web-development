// popcorn price according to size  
// let size = "S";

// if (size === "XL") {
//     console.log(" price is Rs. 250");
// }
// else if (size === "L") {
//     console.log(" price is Rs. 200");
// }
// else if (size === "M") {
//     console.log(" price is Rs. 100");
// }
// else {
//     console.log(" price is Rs. 50");
// }


// let marks = "45";
// if (marks >= "33") {
//     console.log("Pass")
//     if(marks >= 80) {
//         console.log("Grade : O")
//     } else {
//         console.log("Grade : A")
//     }
// } else {
//     console.log("Better luck next time");
// }

// Logical operators (And)
// let marks = "90";

// if (marks >= 33 && marks >= 80) {
//     console.log("Pass")
//     console.log("A+")
// }


// Logical operators (OR)
// let marks = "75";

// if (marks >= 33 || marks >= 80) {
//     console.log("Pass")
//     console.log("A+")
// }

// Logical operators (Not)
// let marks = "75";

// if (!marks < 33) {
//     console.log("Pass")
//     console.log("A+")
// }

//combine operators

// let marks = "23";
// if ((marks >= 33 && marks <= 80) || !false) {
//     console.log("pass")
// }


// Practice Question
// let str = "afshar"

// if (str[0] === "a" && str.length > 3) {
//     console.log("good string")
// } else {
//     console.log("not a good string")
// }

//Practice question 2

// let num = "12"

// if ((num % 3 === 0) && ((num+1 === 15) || (num-1 === 11))) {
//     console.log("safe")
// }else {
//     console.log("unsafe")
// }

// let afs = "21"

// if ((afs % 4 === 0) && ((afs+1 === 22) || (afs-1 === 20))) {
//     console.log("wrong")
// }else {
//     console.log("right")
// }

// if (" ") {
//     console.log("string is not empty")
// }else {
//     console.log("string is empty")
// }

// let num = -10

// if (num){
//     console.log("num is not equal to 0")
// }else {
//     console.log("num is equal to 0")
// }


// switch statement
// let color = "red";

// switch (color) {
//     case "red":
//     console.log("stop");
//     break;
//     case "yellow":
//     console.log("slow down");
//     break;
//     case "green":
//     console.log("go");
//     break;
//     default:
//     console.log("light is broken");

// }

// console.log("after switch stt")

// let num = "8";

// switch (num) {
//     case "1":
//         console.log("monday");
//         break;
//     case "2":
//         console.log("tuesday");
//         break;
//     case "3":
//         console.log("wednesday");
//         break;
//     case "4":
//         console.log("thusrday");
//         break;
//     case "5":
//         console.log("friday");
//         break;
//     case "6":
//         console.log("saturday");
//         break;
//     case "7":
//         console.log("sunday, funday");
//         break;

//         default:
//             console.log("wrong day");
// }

// alert

// alert ("something went wrong");
// console.log("this is a simple log")
// console.error("this is an error msg")
// console.warn("this is a warning msg")

// prompt

// let roll = prompt("enter your roll no. : ");
//    console.log(roll);

let firstName = prompt("enter first name")
let lastName = prompt("enter last name")
let msg = "welcome " + firstName + " " + lastName + "!";
alert(msg)