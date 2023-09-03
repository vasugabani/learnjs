function handlesubmit(){

    let x=parseFloat(document.getElementById("bonus").value);
    console.log("salary is :",x);
    let x1=parseFloat(document.getElementById("bonus1").value);
    console.log("salary is :",x1);
    let x2=parseFloat(document.getElementById("bonus2").value);
    console.log("salary is :",x2);

    let bs;
    bs=x*0.5;
    console.log("bonus is : ",bs);

    bs=x1*0.3;
    console.log("bonus is : ",bs);

    bs=x2*0.2;
    console.log("bonus is : ",bs);
}