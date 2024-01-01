let wishlist=[];

let data=[
   
   {
        id:101,
        name:"mobile",
        price:1000

    },

    {
        id:102,
        name:"car",
        price:500
    },

    {
        id:103,
        name:"earphone",
        price:800
    }

]

handleclick = (like_ele,id_btn) => {

    console.log(id_btn);

    if(like_ele.classList.contains("fa-regular")){
        like_ele.classList.add("fa-solid");
        like_ele.classList.remove("fa-regular");
        adddata(id_btn);
    }else{
        like_ele.classList.add("fa-regular");
        like_ele.classList.remove("fa-solid");
        removedata(id_btn);
    }
}
  
adddata =(id)=>{

    let addData=data.find((v)=>v.id===id);
    console.log(addData);

    if(addData){
        wishlist.push(addData);
        console.log(wishlist); 
    }
}

removedata = (id) => {
    let index = wishlist.findIndex((v) => v.id === id );
    console.log(index);

    wishlist.splice(index,1);
    console.log(wishlist);

}
function handle(){

    let div=document.getElementById("obj");

    let id1=Math.floor(Math.random()*1000);


    data.map((v)=>{

        let data1=document.createElement("div");
        data1.setAttribute("id","disp1");
        let data1txt=document.createTextNode(v.id);

        let data2=document.createElement("div");
        data2.setAttribute("id","disp2");
        let data2txt=document.createTextNode(v.name);

        let data3=document.createElement("div");
        data3.setAttribute("id","disp3");
        let data3txt=document.createTextNode(v.price);

        let like=document.createElement("i");
        like.setAttribute("id","fav");
        like.setAttribute("class","fa-regular fa-heart");
        like.addEventListener("click",()=>handleclick(like,v.id));

        data1.appendChild(data1txt);
        data2.appendChild(data2txt);
        data3.appendChild(data3txt);

        div.appendChild(data1);
        div.appendChild(data2);
        div.appendChild(data3);
        div.appendChild(like);

    })
}
    

handle();
handleclick();
