function handlebackground(){
    // console.log("ok");

    let countryname=document.getElementById("country").value;
    // console.log(country);

    // if(countryname === '0'){
    //     document.getElementById("check").innerHTML = 'please select country'
    // }else{
    //     document.getElementById("check").innerHTML = ''
    // }

    if(countryname === 'in'){
       document.getElementById("color").style.backgroundColor = 'orange';
    }else if(countryname === 'uk'){
        document.getElementById("color").style.backgroundColor = 'blue';
        // console.log("uk");
    }else if(countryname === 'br'){
        document.getElementById("color").style.backgroundColor = 'green';
        // console.log("brazil");
    }else{
        document.getElementById("color").style.backgroundColor = 'white';
    }
}