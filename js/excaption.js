let a = parseInt(prompt("please enter value of A: "));
let b = parseInt(prompt("please enter value of B: "));

try {

    if(b===0){
        throw new Error('B must not be zero');
    }else{
        let ans= a/b;
        document.getElementById("res").innerHTML=ans;
    }

} catch (error) {

    document.getElementById("res").innerHTML=error.message;

} finally {

console.log("run");
}
