function handlesubmit() {
    // console.log(ok);
    let salary=parseInt(document.getElementById("salary").value);
    console.log("salary is :",salary);

    let tax;

    if(salary<=300000){
        console.log("no pay tax");
    }else if(salary>300000 && salary<=600000){
        tax=300000*0 + (salary-300000)*0.05;
    }else if(salary>600000 && salary<=900000){
        tax=300000*0 + 300000*0.05 + (salary-600000)*0.1;
    }else if(salary>900000 && salary<=1200000){
        tax=300000*0 + 300000*0.05 + 300000*0.1 + (salary-900000)*0.15;
    }else if(salary>1200000 && salary<=1500000){
        tax=300000*0 + 300000*0.05 + 300000*0.1 + 300000*0.15 + (salary-1200000)*0.2;
    }else if(salary>1500000){
        tax=300000*0 + 300000*0.05 + 300000*0.1 + 300000*0.15 + 300000*0.2 + (salary-1500000)*0.3;
    }
    console.log("tax is :",tax);
}