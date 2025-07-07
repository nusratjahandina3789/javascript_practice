//Array unshift method
// const studentNameone = ["Dina","Santo","Nusrat","Sahan"];
// console.log (studentNameone);
// const newArrone = studentNameone.unshift("Jahan");
// console.log(studentNameone);

//Array shift method
// const studentNametwo = ["Dina","Santo","Nusrat","Sahan"];
// console.log (studentNametwo);
// const newArrtwo = studentNametwo.shift();
// console.log(studentNametwo);

//Array push method
// const studentNamethree = ["Dina","Santo","Nusrat","Sahan"];
// console.log (studentNamethree);
// const newArrthree = studentNamethree.push("Jahan");
// console.log(studentNamethree);

//Array pop method
// const studentNamefour = ["Dina","Santo","Nusrat","Sahan"];
// console.log (studentNamefour);
// const newArrfour = studentNamefour.pop();
// console.log(studentNamefour);

// Function Declaration
// function greeting() {
//     console.log("Hello!");
// }
// greeting();

// Function Expression
// const result = function greeting() {
//     console.log("Hello!");
// }
// result();


// Arrow Function 
// const result = ()=> {
//     console.log("Hello!");
// }
// result();


// IIFE Function 
// (function (){
//     console.log("Hello Mern 2408");
// })();

// let demo = (function (){
//     console.log("Hello Mern 2408");
// })();

// function addNum (a,b) {
//     console.log(a + b);
// }
// addNum(10, 5);

// Return Keyword
// function addNum (a,b) {
//     return a + b;
// }
// const result = addNum(10, 5);
// console.log(result);

// Nested Object 
// const studentInfo = {
//     studentName : "Nusrat Jahan Dina",
//     studentId: "10",
//     studentAge : "20",
//     studentAddress : {
//         studentDivision : "Chittagong",
//         studentDistrict : "Chandpur",
//         studentThana : "Chandpur",
//     },
// };
// console.log(studentInfo.studentAddress.studentDistrict);

// Method
// const studentInfo = {
//     studentName : "Nusrat Jahan Dina",
//     studentId: "10",
//     studentAge : "20",
//     studentAddress : {
//         studentDivision : "Chittagong",
//         studentDistrict : "Chandpur",
//         studentThana : "Chandpur",
//     },
//     greeting : function () {
//         console.log("Hello Mern 2408")
//     },
// };
// console.log(studentInfo.greeting());


// this keyword
// const person = {
//     firstName : "Dina",
//     lastName : "Munshi",
//     id : "10",
//     fullName : function () {
//         return this.firstName + " " + this.lastName;
//     },
// };
// console.log(person.fullName());

// const country = "Bangladesh";
// console.log("My country name is "+ country + " I love " + country);
// console.log(`My country name is ${country}. I love my country ${country}.`);


// const country = {
//       countryName : "Bangladesh",
//       countryAge : "60",
// };
// console.log(`My country name is ${country.countryName}. My country age is ${country.countryAge}.`);

// const myMark = 100;
// const schoolarshipMark = 81;
// if (myMark < 0) {
//     console.log("Please enter decimal number. \n");
// } else if(myMark < 32){
//    console.log("My result is F grade.\n");
// }else if (myMark >= 33 && myMark < 39) {
//     console.log("My result is D grade. \n");
// } else if (myMark >= 40 && myMark < 49) {
//     console.log("My result is C grade. \n");
// } else if (myMark >= 50 && myMark < 59) {
//     console.log("My result is B grade. \n");
// } else if (myMark >= 60 && myMark < 69) {
//     console.log("My result is A- grade. \n");
// } else if (myMark >= 70 && myMark < 79) {
//     console.log("My result is A grade. \n");
// } else if(myMark > 100){
//    console.log("Please enter 0 to 100 number. \n");
// }else if (myMark >= 80 && myMark <= 100) {
//     console.log("My result is A+ grade. \n");
//     if (myMark >= schoolarshipMark) {
//         console.log("I got schoolarship. \n");
//     } else {
//         console.log("I'm not eligible for schoolarship. \n");
//     }
// }
// else {
//     console.log("Result not found! \n");
// }

// -1 to -10 print in for loop
// for( var i = -1; i >= -10; i--) {
//     console.log(i)
// }

// -1 to -10 print in while loop
// var i = -1;
// while( i >= -10){
//     console.log(i);
//     i--;
// }
// 1 to 5 namta in nested loop
//  var number = 5;
//  for(var i = 1; i<= number; i++){
//  for(var j = 1; j<= 10; j++){
//     document.write(i + " X " + j +" = " + i*j + "</br>");
//  }
//  }
