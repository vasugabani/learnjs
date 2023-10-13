// localStorage.setItem("name","vasu");
// localStorage.setItem("age","21");

// let ans=localStorage.getItem("name");
// console.log(ans);
// // localStorage.removeItem("name");

// localStorage.clear();

// sessionStorage.setItem("name","vasu");
// sessionStorage.setItem("age","21");

// let ans1=sessionStorage.getItem("name");
// console.log(ans1);
// // sessionStorage.removeItem("name");

// // sessionStorage.clear();

const handlesbmit = () => {
    // event.preventDefault();
    let localdata=JSON.parse(localStorage.getItem('name'));

    let name=document.getElementById("name").value;
    console.log(name);

    if(localdata){
        localdata.push(name);
        console.log(localdata);
    
        localStorage.setItem('name',JSON.stringify(localdata));
    }else{
        localStorage.setItem('name',JSON.stringify([name]));
    }
    display();
}

const display = () => {
    let localdata=JSON.parse(localStorage.getItem('name'));
    console.log(localdata);

    let ul=document.getElementById("disp");
    ul.innerHTML=''

    localdata.map((v)=>{
        let li=document.createElement("li");
        let litext=document.createTextNode(v);
        li.appendChild(litext);
        ul.appendChild(li);
    })
    
}
display();