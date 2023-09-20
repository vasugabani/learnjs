// function greeting() {
//     console.log("good");
// }
// greeting();

// function calage(birth) {
//     let age;

//     age=2023-birth;

//     return age;
// }

// let year=calage(2002);
// console.log(year);

// const calAge = (birth) => {
//     let age;

//     age=2023-birth;
//     return age;
// }

// let ans=calAge(2003);
// console.log(ans);

const costing = (place) => {          //4
    if (place === 'goa') {                     //5
        return 35000;
    } else if (place === 'manali') {
        return 65000;
    }
}

const package = (place) => {   //2
    let cost = costing(place);              //3     //6

    let mes;
    mes = place + ' costing is ' + cost + '.'        //7

    return mes;
}

let ans = package('goa')  //1       //8
console.log(ans);

let ans1 = package('manali')        //9
console.log(ans1);