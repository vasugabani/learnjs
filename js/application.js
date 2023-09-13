function validateForm() {
    // console.log("ok");
    
    let name=document.contactForm.name.value;
    console.log(name);

    if(name === ''){
        document.getElementById("nameErr").innerHTML = 'please enter name';
    }else{
        let namereg=/^[a-zA-z ]{2,30}$/

        if(namereg.test(name)){
            document.getElementById("nameErr").innerHTML = '';
        }else{
            document.getElementById("nameErr").innerHTML = 'please enter valid name'
        }   
    }

    let ename=document.contactForm.email.value;

    if(ename === ''){
        document.getElementById("emailErr").innerHTML = 'please enter E-mail id'
    }else{
        
        let namee=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
        if(namee.test(ename)){
            document.getElementById("emailErr").innerHTML = ''
        }else{
            document.getElementById("emailErr").innerHTML = 'please enter valid email'
        }
    }

    let mobile=document.contactForm.mobile.value;

    if(mobile === ''){
        document.getElementById("mobileErr").innerHTML = 'enter mobile number'
    }else{

        let mobile_num=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

        if(mobile_num.test(mobile)){
            document.getElementById("mobileErr").innerHTML =''
        } else{
            document.getElementById("mobileErr").innerHTML = 'please enter valid number'
        }
    }

    let check=document.contactForm.country.value;

    if(check === '0'){
        document.getElementById("countryErr").innerHTML = ' please select country'
    }else{
        document.getElementById("countryErr").innerHTML = ''
    }

    return false;
}    