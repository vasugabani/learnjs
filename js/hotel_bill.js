

let datecheck=true;
let personcheck=true;
let foodcheck=true;
let tablecheck=true;

let update = null;

const handlesubmit = () => {
    // event.preventDefault();

    // let checkdate=true,checkperson=true;

    // console.log("ok");
    let id = Math.floor(Math.random() * 100);

    let date = document.getElementById("Date").value;
    console.log(date);

    if(date){
        document.getElementById("checkdate").innerHTML='';
        datecheck=false;
    }else{
        document.getElementById("checkdate").innerHTML='please enter date';
    }

    let table = document.getElementById("seltable").value;
    console.log(table);

    if(table ==='0'){
        document.getElementById("checktable").innerHTML='please select table';
    }else{
        document.getElementById("checktable").innerHTML='';
        tablecheck=false;
    }

    let food = document.getElementById("selfood").value;
    console.log(food);

    if(food ==='0'){
        document.getElementById("checkfood").innerHTML='please select food'
    }else{
        document.getElementById("checkfood").innerHTML=''
        foodcheck=false;
    }

    let person = document.getElementById("number").value;
    console.log(person);

    if(person){
        if(person>0){
            document.getElementById("checkperson").innerHTML=''
            personcheck=false;
        }else{
            document.getElementById("checkperson").innerHTML='please enter valid person'
        }
    }else{
        document.getElementById("checkperson").innerHTML='please enter person'
    }

    // let obj=localStorage.setItem('data',JSON.stringify([{ 'date':date, 'table': table, 'food': food, 'person': person }]))

    
   
        let name;

        if (food === 'punjabi') {
            name = "punjabi";
        } else if (food === 'chinese') {
            name = "chinese";
        } else if (food === 'south-indian') {
            name = "south indian"
        }
        console.log(name);
    
    
        let price;
        if (food === 'punjabi') {
            price = 250;
        } else if (food === 'chinese') {
            price = 150;
        } else if (food === 'south-indian') {
            price = 200;
        }
        console.log(price);
    
        let amount;
        amount = price * person;
        console.log(amount);
    
        let localdata = JSON.parse(localStorage.getItem('hotel'));
        console.log(localdata);

        if(datecheck || personcheck || foodcheck || tablecheck){
            return false;
        }else{
    
        if (update) {
            let obj = {
                'id': update,
                'date': date,
                'table': table,
                'food': food,
                'person': person,
                'amount':amount,
            };
            console.log("update",obj);
    
            if(food=='punjabi'){
                name='punjabi';
                price=250;
            }else if(food=='chinese'){
                name="chinese";
                price=150;
            }else if(food=='south-indian'){
                name='south indian';
                price=200;
            }
            amount=price*person;
    
            let index = localdata.findIndex((v) => v.id == update);
    
            localdata[index]=obj;
            localStorage.setItem('hotel',JSON.stringify(localdata));
    
            window.location.reload();
    
        } else {
            let obj = {
                id,
                'date': date,
                'table': table,
                'food': food,
                'person': person,
                'amount': amount
            }
            console.log("add",obj);
    
            if (localdata == null) {
                localStorage.setItem('hotel', JSON.stringify([obj]));
            } else {
                localdata.push(obj);
                localStorage.setItem('hotel', JSON.stringify(localdata));
            }
        }
        return true;
    }
}

const hendleclick = (id) => {
    console.log(id);

    let localdata = JSON.parse(localStorage.getItem('hotel'));

    let fdata = localdata.filter((v) => v.id != id);
    console.log(fdata);

    localStorage.setItem('hotel', JSON.stringify(fdata));

    window.location.reload();

}
const handleedit = (id) => {
    console.log(id);

    let localdata = JSON.parse(localStorage.getItem("hotel"));
    console.log(localdata);

    let index = localdata.findIndex((v) => v.id == id);
    console.log(localdata[index]);

    // localdata[index].id = update;

    document.getElementById("Date").value = localdata[index].date;
    document.getElementById("seltable").value = localdata[index].table;
    document.getElementById("selfood").value = localdata[index].food;
    document.getElementById("number").value = localdata[index].person;

    update = localdata[index].id;
}
const display = () => {

    let localdata = JSON.parse(localStorage.getItem('hotel'));
    // console.log(localdata);


    // document.getElementById("disp").style.display="block";

    let disptable = document.getElementById("disp");

    localdata.map((v) => {
       

        let tr = document.createElement("tr");
        // tr.setAttribute('id','tr'+id);
        // tr.setAttribute('obj','tr'+obj);
        // console.log(tr);

        let td = document.createElement("td");
        let tdtext = document.createTextNode(v.date);
        td.appendChild(tdtext);
        tr.appendChild(td);


        let td1 = document.createElement("td");
        let tdtext1 = document.createTextNode(v.table);
        td1.appendChild(tdtext1);
        tr.appendChild(td1);
        // disptable.appendChild(tr);

        let td2 = document.createElement("td");
        let tdtext2 = document.createTextNode(v.food);
        td2.appendChild(tdtext2);
        tr.appendChild(td2);
        // disptable.appendChild(tr);

        let td3 = document.createElement("td");
        let tdtext3 = document.createTextNode(v.person);
        td3.appendChild(tdtext3);
        tr.appendChild(td3);
        // disptable.appendChild(tr);

        let td4 = document.createElement("td");
        let tdtext4 = document.createTextNode(v.amount);
        td4.appendChild(tdtext4);
        tr.appendChild(td4);
        // disptable.appendChild(tr);

        let btn1 = document.createElement("button");
        btn1.setAttribute('onclick', "handleedit(" + v.id + ")")
        let btntext = document.createTextNode("E");

        btn1.appendChild(btntext);
        tr.appendChild(btn1);

        let btn = document.createElement("button");
        btn.setAttribute('onclick', "hendleclick(" + v.id + ")")
        let buttontext = document.createTextNode("X")

        btn.appendChild(buttontext);
        tr.appendChild(btn);

        disptable.appendChild(tr);
    })
    let finalbill=localdata.reduce((acc,v)=> acc + v.amount,0)
   console.log(finalbill); 
        
        
    let tr1=document.createElement("tr")
    let th1=document.createElement("th")
    th1.setAttribute('colspan','4')
    let thtext=document.createTextNode("total counter :")

    th1.appendChild(thtext);
    tr1.appendChild(th1);
    // disptable.appendChild(tr1);

    let tdfinal=document.createElement("td")
    let tdfinaltxt=document.createTextNode(finalbill + " /-")

    
    tdfinal.appendChild(tdfinaltxt)
    tr1.appendChild(tdfinal)
    disptable.appendChild(tr1)
}

display();
