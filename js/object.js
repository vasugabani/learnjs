// const obj = {
//     name : 'vasu',
//     age: 21,
//     city : 'surat',
// }
// console.log(obj.city,obj["city"]);
// console.log(obj);


// const obj = [
//     {
//         name : 'vasu',
//         age : 21,
//     },
//     {
//         name : 'dev',
//         age : 20,
//     }
// ]

// obj.map((v)=>{
//     console.log(v.name,v.age);
// })


// const person = [
//     {
//         name : 'vasu',
//         age : 21,
//         course : [
//             "c",
//             "html"
//         ]
//     }
// ]

// person.map((v,i)=>{
//     console.log(v.name,v.age);

//     v.course.map((v1)=>console.log(v1))
// })


// const myobj = {
//     name: "jd",
//     age: 20,
//     cars: {
//         car1: "ford",
//         car2: "breza",
//         car3: "BMW"
//     }
// }

// for (let k in myobj) {

//     if (k === 'cars') {
//         for (let j in myobj[k]) {
//             console.log(myobj[k][j]);
//         }
//     } else {
//         console.log(myobj[k]);
//     }

// }


// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];
// person.map((v) => {
//     // console.log(v);
//     for (let k in v) {

//         if (k === 'course') {
//             for (let j in v[k]) {
//                 console.log(v[k][j]);
//             }
//         } else {
//             console.log(v[k]);
//         }
//     }
// })


let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat: 10
        }
    }
}

for (let k in data) {
    // console.log(k);


    // for (let j in data[k]) {
    //     console.log(data[k][j]);

    //     if (k === 'branches') {

    //         for (let i in data[k][j]) {
    //             console.log(i,j,k,data[k][j][i]);
    //         }
    //     }
    // }

    
}