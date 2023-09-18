function handlesubmit() {
    // console.log("ok");

    let num=parseInt(document.getElementById("number").value);
    console.log(num);

    let sel=document.getElementById("select").value;
    console.log(sel);

    let sel1=document.getElementById("select1").value
    console.log(sel1);

    let c=true;

    if(num){
        if(num>0){
            document.getElementById("check").innerHTML = ''
            c=false
        }else{
            document.getElementById("check").innerHTML = 'please enter valid number'
        }
    }else{
        document.getElementById("check").innerHTML = 'please enter number'
    }

    if(c){
        return false;
    }else{
        let ans;

        if(sel && sel1){
             if(sel == '1' && sel1 == '1'){
                 ans= num;
             }else if(sel == '1' && sel1 == '2'){
                 ans = num / 100;
             }else if(sel == '1' && sel1 == '3'){
                 ans= num / 100000;
             }
        }
        if(sel && sel1){
             if(sel == '2' && sel1 == '1'){
                 ans= num * 100;
             }else if(sel == '2' && sel1 == '2'){
                 ans = num;
             }else if(sel == '2' && sel1 == '3'){
                 ans = num / 1000
             }
        }
        if(sel && sel1){
             if(sel == '3' && sel1 == '1'){
                 ans= num * 100000
             }else if(sel == '3' && sel1 == '2'){
                 ans = num * 1000
             }else if(sel == '3' && sel1 == '3'){
                 ans = num
             }
        }
        console.log(ans);
        document.getElementById("answer").innerHTML = ans;
    }

   

   return false;
}