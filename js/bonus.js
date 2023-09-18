function handlesubmit(){

    let x=parseFloat(document.getElementById("bonus").value);
    console.log("salary is :",x);
    let x1=parseFloat(document.getElementById("bonus1").value);
    console.log("salary is :",x1);
    let x2=parseFloat(document.getElementById("bonus2").value);
    console.log("salary is :",x2);

    let xe=true,x1e=true,x2e=true;

    if(x){
        if(x>0){
            document.getElementById("checck").innerHTML = ''
            xe=false
        }else{
            document.getElementById("checck").innerHTML = 'please enter valid salary'
        }
    }else{
        document.getElementById("checck").innerHTML = 'please enter salary'
    }

    if(x1){
        if(x1>0){
            document.getElementById("checck1").innerHTML = ''
            x1e=false
        }else{
            document.getElementById("checck1").innerHTML = 'please enter valid salary'
        }
    }else{
        document.getElementById("checck1").innerHTML = 'please enter salary'
    }

    if(x2){
        if(x2>0){
            document.getElementById("checck2").innerHTML = ''
            x2e=false
        }else{
            document.getElementById("checck2").innerHTML = 'please enter valid salary'
        }
    }else{
        document.getElementById("checck2").innerHTML = 'please enter salary'
    }

    if(xe || x1e || x2e){
        return false
    }else{
        let bs;
    bs=x*0.5;
    console.log("bonus is : ",bs);

    bs=x1*0.3;
    console.log("bonus is : ",bs);

    bs=x2*0.2;
    console.log("bonus is : ",bs);

    }

    return false;
}