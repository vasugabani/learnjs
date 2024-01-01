// Spreading Opreator

// BY Array.......

let arr=[10,20,40,95,30]

// let newArr = [...arr]       //copy arr
// console.log(newArr);

// let newArr = [1,2,...arr,25]     //merging
// console.log(newArr);

// let [eng, eco, BA, acc, hindi] = [...arr]    //destructure
// console.log(acc);

//BY Object........

// let object={
//     id:1,
//     name:'amit'
// }

// let newO = {...object}     //copy 
// console.log(newO);

// let newO = {                         //merging
//     age:25,
//     city:'surat',
//     ...object
// }
// console.log(newO);

// let {id,name}=object             //destructure
// console.log(id,name);

let person={
    id:1,
    name:'amit'
}       

// console.log(Object.keys(person));          //return value object keys

// console.log(Object.values(person));         //return value object value

// console.log(Object.entries(person));        //return each keys of persnoal array

// console.log(Object.fromEntries(Object.entries(person)));    //return single array from entries

// console.log(Object.hasOwnProperty('age'));  //return boolean & cheack value and keys in object

// console.log(Object.freeze(person));     //apply freeze then we can not changing an array

// person.name='ajay'      //update

// person.age=25           //add

// delete person.name      //delete 

// Object.assign(person,{city:'surat'})     //1.add 

// console.log(Object.assign({},{obj1},{obj2}));   //we can add multiple object in one object