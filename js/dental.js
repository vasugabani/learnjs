const sit1 = 1, cost1 = 500;
const sit2 = 2, cost2 = 1500;
const sit3 = 4, cost3 = 2500;
const sit4 = 6, cost4 = 12000;
const sit5 = 12, cost5 = 35000;

let treat_name, sit_s = 0, cost_c = 0;

const handlechange = () => {

    let sel = document.getElementById("select").value;
    console.log(sel);

    if (sel === '1') {
        treat_name = 'Teeth Cleaning'
        sit_s = sit1
        cost_c = cost1
    } else if (sel === '2') {
        treat_name = 'Fillings'
        sit_s = sit2
        cost_c = cost2
    } else if (sel === '3') {
        treat_name = 'Root Canal Treatment'
        sit_s = sit3
        cost_c = cost3
    } else if (sel === '4') {
        treat_name = 'RCT + Cover'
        sit_s = sit4
        cost_c = cost4
    } else if (sel === '5') {
        treat_name = 'Braces / Invisalign'
        sit_s = sit5
        cost_c = cost5
    }

    document.getElementById("treat").innerHTML = treat_name
    document.getElementById("sit").innerHTML = sit_s
    document.getElementById("cost").innerHTML = cost_c

    document.getElementById("apt").style.display = 'block'
}

const handleclick = () => {

    // console.log("ok");

    let d = document.getElementById("date").value
    let apt_date = new Date(d)
    console.log(apt_date);

    let print = '<table border="2px"><tr><th>Treatment</th><th>Seating</th><th>Costing</th></tr>'

    for (let i = 0; i < sit_s; i++) {

        print = print + '<tr>'

        if (i === 0) {
            print = print + '<td rowspan=' + sit_s + '>'
            print = print + treat_name
            print = print + '</td>'
        }

        print = print + '<td>'
        print = print + (apt_date.toLocaleDateString())
        print = print + '</td>'

        print = print + '<td>'
        print = print + cost_c / sit_s
        print = print + '</td>'

        print = print + '</tr>'

        console.log(apt_date.getDate());
        apt_date.setDate(apt_date.getDate() + 7)

    }

    print = print + '</table>'

    document.getElementById("coast_plan").innerHTML = print

}

