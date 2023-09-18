function handlesubmit(){
    // console.log("ok");

    let cast=document.getElementById("cast").value;
    console.log("cast is:",cast);

    let fees=parseInt(document.getElementById("fees").value);
    console.log("fees is:",fees);

    let cgpa=parseFloat(document.getElementById("cgpa").value);
    console.log("cgpa is:",cgpa);

    let grade;
    if(cgpa>=9 && cgpa<=10){
        grade='B';
    }else if(cgpa>=8.5 && cgpa<9.5){
        grade='A';
    }
    console.log("grade is:",grade);

    let scholar;
    if(grade=='A' || grade=='B'){
        if(cast=='o'){
            console.log("no scholarship");
        }else if(cast=='ob'){
            scholar=fees*0.25;
           ;
        }else if(cast=='sc'){
            scholar=fees*0.5;
            
        }else if(cast=='st'){
            scholar=fees*1;
            
        }
        console.log("scholarship is:",scholar);
    }

    return false;
}