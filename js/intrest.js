function handlesubmit() {
    event.preventDefault();

    // console.log("ok");

    let p=document.getElementById("amount").value;
    // console.log(p);
    let r=document.getElementById("rate").value;
    // console.log(r);
    let t=document.getElementById("time").value;
    // console.log(t);
    let select=document.getElementById("select").value;
    
    let ans;
    if(select === 'y'){
        ans=(p * r * t) / 100;
    }else if(select === 'm'){
        ans=(p * r * t) / 1200;
    }
    console.log(ans);

    document.getElementById("answer").innerHTML = ans;
}