//max element

// let num=[45,22,89,32,62]

// const maxarr = (num) => {
//     let max=num[0];

//     for(let i=1;i<num.length;i++){
//         if(num[i]>max){
//             max=num[i];
//         }
//     }
//     console.log(max);
// }
// maxarr(num);

// let max = Math.max(45,22,89,32,62);
// console.log(max);

// -------------------------------------

//minimun element

// let min = Math.min(45,22,89,32,62);
// console.log(min);

// let num = [45, 22, 89, 32, 62]

// const minarr = (num) => {
//         let min=num[0];

//         for(let i=1;i<num.length;i++){
//             if(num[i]<min){
//                 min=num[i];
//             }
//         }
//         console.log(min);
//     }
//     minarr(num);

// -----------------------------------

//ascending order

// let name=['bike','motor','ship','car']

// let ans1=name.sort()
// console.log(ans1);

// let arr=[45,22,89,32,62]

// const sortasc = (arr) => {
//     let temp;

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]){
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp
//             }
//         }
//     }
//     console.log(arr);
// }
// sortasc(arr);

// ------------------------------------

//descending order

// let num1=[45,22,89,32,62]

// num.sort((a,b)=>b-a);
// console.log(num);

// let arr1=[45,22,89,32,62]

// const sortdsc = (arr1) => {
//     let temp;

//     for(let i=0;i<arr1.length;i++){
//         for(let j=i+1;j<arr1.length;j++){
//             if(arr1[j]>arr1[i]){
//                 temp=arr1[i];
//                 arr1[i]=arr1[j];
//                 arr1[j]=temp
//             }
//         }
//     }
//     console.log(arr1);
// }
// sortdsc(arr1);

// -------------------------------------------

// reverse

// let num = [12, 56, 78, 41, 63]

// const reverse = (num) => {
//     let newarr = []

//     for (let i = num.length - 1; i >= 0; i--) {
//         newarr.push(num[i])
//     }
//     console.log(newarr);
// }

// reverse(num);

// ----------------------------------------------

//sum

// let num = [12,56,78,41,63]

// const sumarr = (num) => {
//     let sum=0;

//     for (i=0;i<num.length;i++){
//         sum=sum+num[i]
//     }
//     console.log(sum);
// }

// sumarr(num);

// ------------------------------------------------

//average

// let num = [12,56,78,41,63]

// const avgarr = (num) => {
//     let sum=0;
//     let avg;

//     for (i=0;i<num.length;i++){
//         sum=sum+num[i]
//         avg=sum/num.length;

//     }
//     console.log(avg);
// }

// avgarr(num);

// ------------------------------------------

// check element

// let arr=[2,88,65,47,32]

// const checkarr = (arr,ele) => {
//     let store;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===ele){
//             store=ele;
//         }
//     }
//     if(store){
//         console.log(store + ' is avaible');
//     }else{
//         console.log(ele + ' is not avaible');
//     }
// }

// checkarr(arr,99);

// ------------------------------------------

//remove duplicate

// let arr = [11,45,89,63,45]

// const remove = (arr) => {

//     let newarr=[];

//     arr.map((v)=>{

//         if(!newarr.includes(v)){

//             newarr.push(v);
//         }
//     })
//     console.log(newarr);
// }
// remove(arr);


// const removedup = (arr) => {

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++)

//             if(arr[i]===arr[j]){
//                 for(k=j;k<arr.length;k++){
//                     arr[k]=arr[k+1];
//                 }
//                 arr.length--;
//             }

//     }
//     console.log(arr);
// }

// removedup(arr);

// -------------------------------------------

//merge array

// let data1 = [2, 5, 33, 42]
// let data2 = [4, 86, 75, 63]
// let data3 = [];

// const checkmerge = () => {

//     for (i = 0; i < data1.length; i++) {
//         data3[i] = data1[i];

//     }

//     for (i = 0; i < data2.length; i++) {
//         data3[data1.length + i] = data2[i];
//     }

//     console.log(data3);
// }

// checkmerge();

// -------------------------------------------

//split an array into two array

// let num = [2, 5, 'a', 'b', 'c', 'd', 41, 52, 63, 45]

// let string = num.filter((v)=> typeof v === 'string');
// let number = num.filter((v)=> typeof v === 'number');


// num.forEach(value => {

//         if (typeof (value) === 'string') {
//             string.push(value)

//         }
//         if (typeof (value) === 'number') {
//             number.push(value)
//         }

// });

// console.log(string);
// console.log(number);

// ---------------------------------------------

//rorating

// let arr = [1, 2, 3, 4, 5]

// const rotate = (arr, n) => {                         //right rotate ( behind to starting)

//     for (let i = 0; i < n; i++) {
//         let ele = arr.pop();
//         arr.unshift(ele)
//         console.log(ele);
//     }
//     console.log(arr);
// }
// rotate(arr, 3);

// const rotate = (arr, n) => {                     //left rotate ( strating to last)

//         for (let i = 0; i < n; i++) {
//             let ele = arr.shift();
//             arr.push(ele)
//             console.log(ele);
//         }
//         console.log(arr);
//     }
//     rotate(arr, 2);

// ---------------------------------------------

//second largest

// let num=[45,89,36,75,20]

// const seclarge = (num) => {

//     let sec = num.sort((a,b)=>b-a);
//     console.log(sec[1]);
// }

// seclarge(num);

// --------------------------------------------

//3rd smallest

// let num=[45,89,36,75,20]

// const small = (num,k) => {

//     let ans=num.sort((a,b)=>a-b)
//     console.log(ans[k-1]);
// }
// small(num,3)

// ------------------------------------------

//median

// let num=[45,89,36,75,20]

// const median = (num) => {

//    let newarr = num.sort((a,b)=>a-b);
//    console.log(newarr);
//    let median;

//     if(newarr.length%2===0){
//         let first=Math.floor(newarr.length/2-1);
//         let second=Math.floor(newarr.length/2);

//         median=(first+second)/2;

//     }else{
//         let ans=Math.floor(newarr.length/2);
//         median=newarr[ans]
//     }
//     console.log(median);
// }
// median(num);

// --------------------------------------------

//compare two array is same or not

// let arr1 =[100,10,100,40]

// let arr2=[100,10,100,30]

// const check = (arr1,arr2) => {

//     if(arr1.length !== arr2.length){
//         console.log("array is not same");
//     }else{

//         let flag=true;

//         for(let i=0;i<arr1.length;i++){

//             if(arr1[i] != arr2[i]){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag){
//             console.log("same");
//         }else{
//             console.log("not same");
//         }
//     }
// }
// check(arr1,arr2)

// --------------------------------------------

//first index of occurance

// let num = [25, 46, 78, 32, 89, 25]

// const first = (num) => {

//     let ans = num.indexOf(25, 0);
//     console.log(ans);

// }
// first(num);

// --------------------------------------------

//last index of occurance

// let num1 = [25, 46, 78, 32, 89, 25]

// const last = (num) => {

//     let ans = num.lastIndexOf(25);
//     console.log(ans);

// }
// last(num);

// ---------------------------------------------

//remove occurance

// let num1 = [25, 46, 78, 32, 89, 25]

// const remove = (num1,ele) => {
//     let ans=num1.filter((v)=> v !== ele)
//     console.log(ans);
// }
// remove(num1,25)

// ---------------------------------------------

//replace occurance

// let num1 = [25, 46, 78, 32, 89, 25]

// const replace = (num1,ele,newele) => {

//     let ans=num1.map((v)=> v === ele ? newele : v)
//     console.log(ans);
// }
// replace(num1,25,99)

// ---------------------------------------------

//reverse array without changes in main array

// let num=[1,2,3,4,5]
// console.log(num);

// let arr=num.slice().reverse();
// console.log(arr);

// ---------------------------------------------

//check assanding 

// let num =[12,53,54,55,56]

// const check = (num) => {

//     let flag=true

//     for(let i=0;i<num.length;i++){
//         for(let j=i+1;j<num.length;j++){
//             if(num[i]>num[j]){
//                 flag=false;
//                 break;
//             }
//         }
//     }
//     if(flag){
//         console.log("assanding order");
//     }else{
//         console.log("not assanding order");
//     }
// }
// check(num);

// -----------------------------------------------

//dessanding order

// let num =[50,49,48,47,46]

// const check = (num) => {

//     let flag=true

//     for(let i=0;i<num.length;i++){
//         for(let j=i+1;j<num.length;j++){
//             if(num[i]<num[j]){
//                 flag=false;
//                 break;
//             }
//         }
//     }
//     if(flag){
//         console.log("dessanding order");
//     }else{
//         console.log("not dessanding order");
//     }
// }
// check(num);

// -----------------------------------------------

//first max 3 ele sum

// let arr=[20,30,45,10,96,89]

// const check = (arr) => {

//     let ans=arr.sort((a,b)=>b-a).slice(0,3).reduce((acc,v)=> acc+v);
//     console.log(ans);
// }
// check(arr)

// ---------------------------------------------

//multi diamension array

let arr=[
    [1,'vasu',21],
    [2,'amit',31],
    [3,'parth',22],
];


// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

arr.map((v)=>{
    v.map((v1)=>{
        console.log(v1);
    })
})