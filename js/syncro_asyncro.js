// const first = () => {
//     console.log('First');
// }
// const second = () => {
//     console.log('Second');
// }
// const third = () => {
//     console.log('Third');
// }
// first(); // First
// second(); // Second
// third(); // Third

// SYNCHRONIZE  PROBLEM------------------------------------

// const first = () => {
//     console.log('First');
// }
// const second = () => {

//     let d=new Date();

//     while(Date.now()-d<5000){

//     }
//     console.log('Second');
// }
// const third = () => {
//     console.log('Third');
// }
// first(); // First
// second(); // Second
// third(); // Third


// CALL BACK FUNCTION----------------------------------------

// const add = (a,b,callback) => {          2
//     let c=a+b;

//     callback(c);         3
// }

// const print = (data) => {        4
//     console.log(data);
// }

// add(10,20,print)      1

// ASYNCHRONOUS -----------------------------------------

// Asynchronous by  CALL BACK FUNCTION

// console.log("first process");

// const add = (callback) => {

//     setTimeout(() => {
//         callback("second process")
//     }, 4000);
// }

// const print = (data) => {
//     console.log(data);
// }

// add(print);

// console.log("third process");


// Asynchronous by PROMISE

// console.log("first process");

// const mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("second process");
//     }, 5000);
// });

// mypromise
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error))

// console.log("third process");


// callback Hell----------------------------

// const firstFun = (a,callback) => {

//     setTimeout(function(){

//         callback(a+5);
//     },1000)
// }

// const secondFun = (a,callback) => {

//     setTimeout(function(){
//         callback(a*2)
//     },1000)
// }

// const thirdFun = (a,callback) => {

//     setTimeout(function(){
//         callback(a+20)
//     },1000)
// }

// firstFun(10,function(r1){
//     console.log("first Function: ",r1);

//     secondFun(r1,function(r2){
//         console.log("second function: ",r2);

//         thirdFun(r2,function(r3){
//             console.log("third function: ",r3);
//         })
//     })
// })


// callback hell solve by promise===================

const firstFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            resolve(a + 5);
        }, 1000)
    })

}

const secondFun = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(a * 2)
        }, 1000)
    })

}

const thirdFun = (a) => {
    return new Promise((reslove, reject) => {
        setTimeout(function () {
            reslove(a + 20)
        }, 1000)
    })

}

firstFun(10)
    .then((r1) => secondFun(r1))
    .then((r2) => thirdFun(r2))

    
    .then((r3) => console.log("final result: ", r3));