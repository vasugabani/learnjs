let nname = [];
let update=null;

function handlesubmit() {
    event.preventDefault();


    let name = document.getElementById("name").value

    if(update !== null){
        nname[update]= name;        
    }else{
        nname.push(name);
    }
    update=null;
    document.getElementById("name").value =' ';
    display();
}

function handleclick(i) {
    event.preventDefault();

    nname.splice(i,1);

    display();

}

const display = () => {
    

    let print = '<ul>'

    nname.map((v,i) => {
        print = print + `<li>${v} <button onclick="handleedit(${i})">E</button><button onclick="handleclick(${i})">X</button></li>`
    })
        
    
    print = print + '</ul>'

    document.getElementById("check").innerHTML = print;
}

const handleedit = (i) => {

    update=i;
    // console.log(update);

    document.getElementById("name").value = nname[i];

    display();
}