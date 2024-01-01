let update = null;

const add = () => {
    // console.log("ok");

    let roll =parseInt(document.getElementById("roll_no").value) ;
    let name = document.getElementById("name").value;
    let fees =parseInt(document.getElementById("fees").value) ;

    let obj = {
        roll,
        name,
        fees,
    }

    // console.log(obj);

    if(update){
        try{
            fetch("http://localhost:3004/student/" + update,{
                method:"PUT",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(obj)
            })
            .then((response)=> {
                if (!response.ok) {
                    throw new Error("something went wrong")
                }   
            })
            .catch((error)=>console.log(error.message))
        }catch(error){

        }
    }else{
        try{
            fetch("http://localhost:3004/student", {
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(obj)
            })
    
            .then((response)=> {
                if (!response.ok) {
                    throw new Error("something went wrong")
                }   
            })
            .catch((error)=>console.log(error.message))
        }catch(error){
    
        }
    }
    update=null;
    
}

const handleDelete = (id) => {

    try{
        fetch("http://localhost:3004/student/" + id,{
            method:"DELETE"
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error("Something Went Wrong!");
            }
        })
        .catch((error)=>console.log(error.message))

    }catch(error){

    }
}

// const handleEdit = (id,roll,name,fees) => {
//     console.log(id,roll,name,fees);

//     document.getElementById("roll_no").value = roll;
//     document.getElementById("name").value = name;
//     document.getElementById("fees").value = fees;

//     update = id;
// }

const handleEdit = (v) => {
    let data = JSON.parse(v)
    console.log(data);

    document.getElementById("roll_no").value = data.roll;
    document.getElementById("name").value = data.name;
    document.getElementById("fees").value = data.fees;

    update = data.id;
}

const displayData = () => {
    // console.log("ok");

    try{
        fetch("http://localhost:3004/student")

        .then((response) => {
            // console.log(response);

            if(response.ok){
                return response.json();
            }

            throw new Error("something went wrong")
        })
        .then((data)=>{

            // console.log(data)

            let print = `<table border="1"><tr><th>Roll No</th><th>Name</th><th>Fees</th><th>Action</th></tr>`;

            data.map((v)=>{
                print += `<tr>`;
                print += `<td>${v.roll}</td><td>${v.name}</td><td>${v.fees}</td>`;
                print += `<td><button onclick="handleDelete(${v.id})">Delete</button><button onclick=handleEdit('${JSON.stringify(v)}')>Edit</button></td>`
                print += `</tr>`;
            })

            print += `</table>`;

            document.getElementById("disp").innerHTML = print;
        })
        .catch((error)=>console.log(error))

    }catch(error){
        console.log(error);
    }
}

window.onload = displayData;

let formref=document.getElementById("student_form");
formref.addEventListener('submit', add);