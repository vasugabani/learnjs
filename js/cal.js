let x = parseInt(prompt("enter value of x:"));
let y = parseInt(prompt("enter value of y:"));

let op = parseInt(prompt("enter value of op:"));

console.log(x,y,op);

switch (op){
    case '+':
        x=x+y;
        console.log(x);
        break;
    case'-':
        x=x-y;
        console.log(x);
        break;
    case'*':
        x=x*y;
        console.log(x);
        break;
    case'/':
        x=x/y;
        console.log(x);
        break;        
}
