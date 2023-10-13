// select element by id     ( value get )

// let ele=document.getElementById("select");
// // console.log(ele);   //( li tag)
// console.log(ele.innerHTML);     //( list 2)

// -------------------------------------

//change element by id      ( value set )

// let ele=document.getElementById("select");
// ele.innerHTML = "hello"
// console.log(ele);

// ------------------------------------

//select element by class  ( multiple value)   (get value)

// let ele=document.getElementsByClassName("class");
// console.log(ele);  //(multiple value in array)

// ---------------------------------

//select element by class (multiple value)  (set value)

// let ele=document.getElementsByClassName("class");

// for(let i=0;i<ele.length;i++){
//     ele[i].innerHTML = "hello"
// }

// console.log(ele);

// -------------------------------

//change element by tag

// let ele=document.getElementsByTagName("h3");

// for(let i=0;i<ele.length;i++){
//     ele[i].innerHTML = "list"
// }
// console.log(ele);

// -------------------------------

// let div = document.getElementById("check");

// let h1ele = document.createElement("h1");
// let h1text = document.createTextNode("hello");

// h1ele.appendChild(h1text);
// div.appendChild(h1ele);

// let atag=document.createElement("a");
// atag.setAttribute('href','#');
// atag.setAttribute('onclick','handlecilcl()')
// let atext=document.createTextNode("hello");

// atag.appendChild(atext);
// div.appendChild(atag);

// function handlecilcl(){
//     console.log("clicked");
// }

// =====================================

const handlesubmit = () => {
    event.preventDefault();
    let name=document.getElementById("name").value;
    console.log(name);

    let id=Math.floor(Math.random()* 1000)

    let div=document.getElementById("check");

    let ptag=document.createElement("p");
    ptag.setAttribute('id',"p-"+ id);

    let ptext=document.createTextNode(name);

    let btn=document.createElement("button");
    btn.setAttribute("onclick","handleclick(" + id + ")");

    let btntext=document.createTextNode("X");

    ptag.appendChild(ptext);
    // ptag.appendChild(id);

    btn.appendChild(btntext);
    div.appendChild(btn) ;
    
    ptag.appendChild(btn)

    div.appendChild(ptag);
}

const handleclick = (id) => {
    // console.log("ok",id);

    let newdiv=document.getElementById('p-'+id);0
    newdiv.remove();

    
}