function handlesubmit(){

    let x=parseFloat(document.getElementById("subject").value);
    let x1=parseFloat(document.getElementById("subject1").value);
    let x2=parseFloat(document.getElementById("subject2").value);

    let sub;

    sub=x+x1+x2;
    console.log("total marks is:",sub);

    let per;
    per=sub/3;
    console.log("per is :",per);

    if(per>90 && per<=100){
        console.log("grade a");
    }else if(per>80 && per<=90){
        console.log("grade b");
    }else if(per>70 && per<=80){
        console.log("grade c");
    }else if(per>60 && per<=70){
        console.log("grade d");
    }
}