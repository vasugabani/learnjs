function handlesubmit() {
    event.preventDefault();
    
    let height=parseFloat(document.getElementById("height").value);
    let weight=parseFloat(document.getElementById("weight").value);

    // console.log(height);
    // console.log(weight);

    let m;
    m=height/100;
    console.log(m);

    let bmi;
    bmi=weight/(m*m);
    console.log("bmi is",bmi);

    document.getElementById("check").innerHTML=bmi;

    let rate;
    if(bmi<18.6){
        console.log("under weight",rate);
    }else if(bmi<=24.9){
        console.log("normal range",rate);
    }else if(bmi>24.9){
        console.log("overweight",rate);
    }
    document.getElementById("rating").innerHTML=rate;
}