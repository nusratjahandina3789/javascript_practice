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

// 1 to 5 namta in nested for loop
//  var number = 5;
//  for(var i = 1; i <= number; i++){
//  for(var j = 1; j <= 10; j++){
//     document.write(i + " X " + j +" = " + i*j + "</br>");
//  }
//  }

// 1 to 5 namta in nested while loop
// var number = 5;
// var i = 1;
// while(i <= number){
//     var j = 1;
//     while(j <= 10){
//         document.write(i + " X " + j +" = " + i*j + "</br>");
//         j++;
//     }
//     i++;
// }
// for in
// const student = {
//     name : "Dina",
//     age : "20"

// }
// console.log(student);
// for(const keys in student){
//     console.log(keys);
//     console.log(student[keys]);
// }


// for of
// const fruit = "Apple";
// for(const demo in fruit){
//     console.log(demo);
// }


// const studentInfo = [
//     {
//         name : "Dina", id: "10", address: "Manda,Dhaka-1214"
//     },
//     {
//         name : "Santo", id: "1", address: "Jamalpur"
//     },
//     {
//         name : "Samiul", id: "5", address: "Chandpur"
//     },
//     {
//         name : "Tamim", id: "12", address: "Shaheb Bazar"
//     },
// ]
// console.log(studentInfo[3]);
// for(let i = 0; i < studentInfo.length; i++){
//     console.log(studentInfo[i]);
    
// }
// callback function
// function greeting(name, demo){
//     console.log("Hello " + name);
//     demo();
// }
// function demo(){
//     console.log("I'm free now!");
// }
// greeting("World", demo);

// map
// studentInfo.map((item)=>{
// console.log(item);

// })

// filter 
// const number = [2,3,4,5,67,8];
// const newNumbers = number.filter((num)=> num > 5
// )
// console.log(newNumbers);

// find
// const number = [2,3,4,5,67,8];
// const newNumbers = number.find((num)=> num > 5
// )
// console.log(newNumbers);

// string method
// let alphabetText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(alphabetText.length);
// let alphabetText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(alphabetText.charAt(3));
// split method
// let text = "Hello World";
// console.log(text.split(" "[0]));

// slice method

// const number = [1,2,3,4,5,6,7,8,9];
// const newNumber = number.slice(3,7);
// console.log(newNumber);
//    console.log(number);
   

// splice method

// const number = [1,2,3,4,5,6,7,8,9];
// const newNumber = number.splice(2,3);
// console.log(newNumber);
//    console.log(number);

// reduce method

// const price = [2,3,4,5,6];
// const total = price.reduce((acc , current)=>{
//     return acc + current;
// },0)
// console.log(total);

// string split method
// let text = "Hello World";
// const texts = text.split(" ",2);
// console.log(texts);
// console.log(text);

// string replace method

// let text = "Hello World";
// const texts = text.replace("Hello","Mern-2408");
// console.log(texts);
// console.log(text);









// Record-01 (Add,Remove,Toggle)

// let one = document.querySelector('.one');
// let btn = document.querySelector('.btn');

// btn.addEventListener('Click', function() {
//     console.log('Ok Cool!');
//     // one.classList.add('two')
//     // one.classList.remove('two')
//     one.classList.toggle('two')
// })

// Record-02 (Atribute Property)

// let test = document.querySelector('.user');
// console.log(test.className);
// let info = {
//     name:"Dina"
// }
// console.log(info.name);

// Record-03 (Child Nodes)

// let list = document.querySelector('ul');
// console.log(list.child);
// console.log(list.childNodes);
// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// Record-04 (declaration expression IIFE)
// Function Declaration
// function greeting(){
//     console.log("Hello Mern-2408");
// }
// greeting();
// Function Expression
// const demo = function(){
//     console.log("Hello Mern-2408");
// }
// demo();
// IIFE Function 
// (function(){
//     console.log("Hello!");
// })();

// Record-05 (function vs method)
// const info = {
//     id:"10",
//     fullName: function(){
//         console.log("Nusrat Jahan Dina");
//     }
    
// }
// info.fullName();

// Record-06 (arrow function)
// const information = (a,b)=>{
//     return a + b;
// }
// console.log(information(10,10));

// Record-07 (default parameter value)
// function add(a, b = 'No argument pass'){
//     return a + b;
// } 
// add(20,10);

// Record-08 (add, modify and delete object)
// const info = {
//     name: "Dina",
//     email: "dinujahan@gmail.com"
// }
// info.phone = '01306409484'
// delete info.phone
// console.log(info);

// Record-09 (filter)
// const age = [10,20,30,40,50,60,70,80,90];
// const newAgeCollection = age.filter((item)=>{
//         return item < 50;
// })
// console.log(newAgeCollection);

// Record-10 (filter)
// const info = [
// {
//     name: "Dina",
//     roll: '1'
// },
//  {
//     name: "Santo",
//     roll: '2'
// },
//  {
//     name: "Samiul",
//     roll: '3'
// },
// {
//     name: "Tamim",
//     roll: '4'
// },

// ]
// const search = info.findIndex((item)=>{
//       return item.roll === '3'
// })
// console.log(search);

// Record-10 (destructing)
// const person = {
//     name: "Dina",
//     age: '19',
//     gender:'Female',
//     Email:'dinujahan@gmail.com'
// }
// let {name:demoName,age,gender,email} = person;
// console.log(demoName);
// console.log(age);

// Record-10 (spread operstor)
// let nameArr = ['Dina','Lamia','Tamima'];
// let newNameArr = [...nameArr, 'Samiul','Santo'];
// console.log(newNameArr);

// Record-10 (sorting data reverse data)
// const sortData = [3,2,9,5,7,1];
// const newSortData = sortData.sort();
// console.log(newSortData);
// Reverse Data
// const reverseData = [1,2,3,4,5,6,7,8,9];
// const newReverseData = reverseData.reverse();
// console.log(newReverseData);

// Record-10 (sorting data,reverse data and update)

// const sortData = [3,2,9,5,7,1];
// const newSortData = sortData.toSorted();
// console.log(newSortData);
// console.log(sortData);
// Reverse Data
// const reverseData = [1,2,3,4,5,6,7,8,9];
// const newReverseData = reverseData.toReversed();
// console.log(newReverseData);
// console.log(reverseData);

// Record-10 (Rest Operator)
// function demo(...a){
//     console.log(a);
// }demo(2,3,4,67,43,87)


// function demo(b,...a){
//     let sum = 0;
//     a.map((item)=>{
//         sum += item;
//     })
//     console.log(sum);
//     console.log(b);
// }demo('Total : ',2,3,4,67,43,87)

// Record-10 (Slice & Splice Method)
// slice method

// const number = [1,2,3,4,5,6,7,8,9];
// const newNumber = number.slice(3,7);
// console.log(newNumber);
//    console.log(number);
   

// splice method

// const number = [1,2,3,4,5,6,7,8,9];
// const newNumber = number.splice(2,3);
// console.log(newNumber);
//    console.log(number);
// console.log(window);
// getElementById
// const dina = document.getElementById("one").innerHTML = "My Name is Dina"
// console.log(dina);

// getElementByClassName
// const dina = document.getElementsByClassName("one")[1].innerHTML = "Nusrat"
// console.log(dina);

// getElementByTagName
// console.log(document.getElementsByTagName("div"));

// Difference in innerText innerHTML textConent
// const dina = document.getElementById("one")
// console.log(dina.innerText);
// console.log(dina.innerHTML);
// console.log(dina.textContent);

// const result = document.getElementsByTagName("h1")
// console.log(result);
// // for(const element of result){
// //     console.log(element);
    
// // }
// const res = Array.from(result)
// console.log(res);
// res.map((item)=>{
//     console.log(item);
    
// })

// const result = document.querySelectorAll("h1")
// console.log(result);
// const res = Array.from(result)
// console.log(res);
// res.map((item)=>{
//     console.log(item);
    
// })

// Attribute Change
// const dina = document.getElementById("one").src = "myImage.png"
// console.log(dina);

// Create Element

// const parent = document.getElementById("list")
// console.log(parent);

// const liList = document.createElement("li")
// liList.innerHTML = "Orange"
// parent.append(liList)

// li last child or first or nth child show

// const parent = document.querySelector("#list li:last-child")
// console.log(parent);
// body background color change

// function getColor(){
//     demo.style.backgroundColor = "red"
// }

// const demo = document.getElementById('one')
// function getColor(){
//     demo.style.backgroundColor = "red"
// }

// addEventListener

// const inputField = document.getElementById('input')
// const btnField = document.getElementById('btn')
// const emptyField = document.getElementById('empty')

// btnField.addEventListener('click',function(){
//     console.log(inputField.value);
//     if(inputField.value == ''){
//         console.log("Empty");
//         emptyField.innerHTML = 'Please fill the data'
//         inputField.style.border = '1px solid red'
//         // inputField.style.display = 'none'
//     }
    
// })
// setTimeout
// console.log('1');
// setTimeout(()=>{
//     console.log('3');
// },2000)
// console.log('2');

const counter = document.querySelectorAll('.counter')
const arr = Array.from(counter)
console.log(arr);
arr.map((counter)=>{   
console.log(counter.dataset.number);
let count = 0
function greeting(){
    count++
    // console.log(count);
    counter.innerHTML = count
    if(counter.dataset.number == count){
        console.log("Stop");
        clearInterval(stop)
    }
}
const stop = setInterval(greeting,counter.dataset.speed)
    
})









