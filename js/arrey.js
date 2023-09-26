// let book1 = "maths"     //variable stored one value
// let book2 = "english"

// let book = ["maths","english"]      //variable one but store multi value
// console.log(book);


// ----------------------------------------------

        // opration on arrey 

// ----------------------------------------------

//arrey length

// let book = ["maths","english","science","drawing"];

// console.log(book.length);       //4

// -----------------------------------------------------

//update index

// let book = ["maths","english","science","drawing"];

// book[1] = "gujarati"

// console.log(book);              //(maths,gujarati,science,drawing)

// -------------------------------------------------------

// element add in last

// let book = ["maths","english","science","drawing"];

// book.push("gujarati")

// console.log(book);      //(maths,english,science,drawing,gujarati)

// --------------------------------------------------------

// element add to start

// let book = ["maths","english","science","drawing"];

// book.unshift("gujarati")

// console.log(book);      //(gujarati,maths,english,science,drawing)

// ---------------------------------------------------------

//element add to between

// let book = ["maths","english","science","drawing"];

// book.splice(3,0,"history");

// console.log(book);          //(maths,english,science,history,drawing)

// -------------------------------------------------------

// remove element in last

// let book = ["maths","english","science","drawing"];

// book.pop();                //remove drawing

// console.log(book);         //(maths,english,science)

// --------------------------------------------------------

// remove Element to start

// let book = ["maths","english","science","drawing"];

// book.shift();               //remove maths

// console.log(book);          //(english,science,drawing)

// ---------------------------------------------------------

// remove element in arry         
                
                // splice(which position,how many element do remove)

// let book = ["maths","english","science","drawing"];

// book.splice(1,1);

// console.log(book);          //(maths,science,drawing)

// -----------------------------------------------------

// empty arrey

// let book = ["maths","english","science","drawing"];

// book = [];                      //type 1

// book.length = 0;            //type 2

// console.log(book);          //[]

// ------------------------------------------------------

// find arrey or not 

// let book = ["maths","english","science","drawing"];    //arrey     //true

// let book1 = "maths"   //variable

// console.log(Array.isArray(book1));       //false

// -------------------------------------------------

// convert in arrey 

// let text = "this is a phone";

// let wordarrey = text.split(" ") //(pass value and remove that mention value and split)

// console.log(wordarrey);         //(this,is,a,phone)

// ------------------------------------------------

// make sentence from arrey 

// let name = ["my", "name", "is", "vasu"];

// let wordarrey = name.join(" ")   //(pass value to join sentence)

// console.log(wordarrey);         //(my name is vasu)

// ------------------------------------------------

//merge array 

// let num=[1,2,3]
// let num1=[4,5]

// let ans=num.concat(num1);
// console.log(ans);               //(1,2,3,4,5)

// -------------------------------------------------

//check element is avaible or not ( ans give in boolean(true/false) )

// let num=[1,2,3]

// let ans=num.some((value) => value > 2);     //find given condition in value or data
// console.log(ans);                               //true

// ------------------------------------------------

// check element is avaible or not    ( ans give in value)

// let num=[1,2,3]

// let ans=num.find((value) => value>2)    //find given condition in value or data
// console.log(ans);                       //3

// --------------------------------------------------

// sub array      ( make a array in main array)

// let num=[1,2,3,4,5]

// let ans=num.slice(2,5)  //(which index, how many elements)
// console.log(ans);       //(3,4,5)

// -------------------------------------------------

// find index 

// let num=['car','bike','motor','bike']

// let ans=num.indexOf("bike",0) //(value, which position to start)
// console.log(ans);               //1

// --------------------------------------------------

// last index   ( search start to last)

// let num=['car','bike','motor','bike']

// let ans=num.lastIndexOf("bike") //(value, which position to start)
// console.log(ans);       //3

// ------------------------------------------------

// map aaray  ( create a new array)     (interation)     (return array)

// let num =[22,25,33,63,45]

// let newarray=num.map((value) =>{        //(value,index,array)
//         // console.log(value); //(22,25,33,63,45)
//         // return value + 2;

// })
// console.log(newarray);   //(24,27,35,65,47)


// let newarray=num.map((value) =>{        
//         if(value>30){
//                 return value + 2;
//         }else{
//                 return 0;
//         }
// })
// console.log(newarray);       //(0,0,35,65,47)

// -----------------------------------------------

// filter array   (given condition and check true value)

// give function and values are true in function so function gives a new array and this array creats by true value  

// let num =[22,25,33,63,45]

// let array = num.filter((value) => {
//         return value > 30        //(give condition)
// })
// console.log(array);     //(33,63,45)

// --------------------------------------------------

// every function  (boolean)

// let age =[100,19,19,18,20]
// let adultage = 18
//                         //give condition and condition check to every value are true then after print in true
// let ans = age.every((age) => {  
//         return age >= adultage
// })
// console.log(ans);       //true

// -----------------------------------------------------

// includes function  (boolean) (search value is in data or not)

// let name=['bike','car','motor','plane']

// let ans=name.includes("ship")   //search value name in bracket
// console.log(ans);       //false

// ------------------------------------------------------

// findindex function  (check condition and return first true value's index)

// let age=[12,19,20,22]
// let adultage=18

// let ans=age.findIndex((age) => {
//         return age>=adultage
// })
// console.log(ans);         //1

// ------------------------------------------------------

// fill function    (every values in front of store in same value)

// let name=['bike','car','motor']

// name.fill("ship")  //enter value to convert all 
// console.log(name);      //(ship,ship,ship)

// -----------------------------------------------------

// sort function 

// let num=[5,4,3,2,1]

// num.sort();
// console.log(num);       //1,2,3,4,5

// ----------------------------------------------------

// reverse function  (starting last)

// let num=[12,24,36,48,20]

// num.reverse();
// console.log(num);       // 20,48,36,24,12

// ------------------------------------------------

// reduce method   ( perticular oprations )    (return single value)

// let num = [1,2,3,5,2,1]

// let array = num.reduce((v1, v2) => {
//         return v1 + v2
// })
// console.log(array);       //14