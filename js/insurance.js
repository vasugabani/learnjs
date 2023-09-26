
function handlesubmit() {
    // console.log("ok");

    let name = document.getElementById("name").value;
    console.log(name);

    let number = document.getElementById("number").value;
    console.log(number);

    let date = document.getElementById("date").value;

    let today = new Date(date);

    let age = 2023 - today.getFullYear()

    console.log(date);
    console.log(today);
    console.log(age);

    let primium, self_emp;

    if (age >= 18 && age <= 25) {
        primium = 1000
    } else if (age >= 26 && age <= 35) {
        primium = 1500
    } else if (age >= 36 && age <= 45) {
        primium = 2000
    } else if (age > 45) {
        primium = 2500
    }
    console.log(primium);

    let occup = document.getElementById("sal_self").value;
    console.log(occup);

    if (occup == '2') {
        self_emp = primium * 0.1
    } else if (occup == '1') {
        self_emp = 0;
    }
    console.log(self_emp);

    let income = document.getElementById("select").value;
    let income1;

    if (income == '1') {
        income1 = '50 lakh'
    } else if (income == '2') {
        income1 = '1 cr'
    } else if (income == '3') {
        income1 = '1.5 cr'
    } else if (income == '4') {
        income1 = '2 cr';
    }
    console.log(income1);

    let amount = document.getElementById("amount").value;

    if (income == '1') {
        if (amount > 0 && amount <= 5000000) {
            document.getElementById("alert").innerHTML = ''
        } else {
            document.getElementById("alert").innerHTML = 'enter valid income'
        }
    }
    if (income == '2') {
        if (amount > 300000 && amount <=10000000) {
            document.getElementById("alert").innerHTML = ''
        } else {
            document.getElementById("alert").innerHTML = 'enter valid income'
        }
    }
    if (income == '3') {
        if (amount > 500000 && amount <= 15000000) {
            document.getElementById("alert").innerHTML = ''
        } else {
            document.getElementById("alert").innerHTML = 'enter valid income'
        }
    }
    if (income == '4') {
        if (amount > 20000000) {
            document.getElementById("alert").innerHTML = ''
        } else {
            document.getElementById("alert").innerHTML = 'enter valid income'
        }
    }
    console.log(amount);

    let smoking = document.getElementById("smoke").value;
    console.log(smoking);

    let smoke_charge;

    if (smoking == '1') {
        smoke_charge = primium * 0.2
    } else {
        smoke_charge = 0;
    }

    console.log(smoke_charge);

    let total_pre, payable_charge;

    payable_charge = self_emp + smoke_charge

    total_pre = primium + payable_charge

    console.log(total_pre);

    document.getElementById("coast").style.display = 'block'

    let print = '<table  border=1><tr><th>name</th><th>age</th><th>mobile no</th><th>insurance amount</th><th>premium</th></tr>'

    print = print + '<tr>'

    print = print + '<td>'
    print = print + name
    print = print + '</td>'

    print = print + '<td>'
    print = print + age
    print = print + '</td>'

    print = print + '<td>'
    print = print + number
    print = print + '</td>'

    print = print + '<td>'
    print = print + amount
    print = print + '</td>'

    print = print + '<td>'
    print = print + total_pre
    print = print + '</td>'

    print = print + '</tr>'

    print = print + '</table>'

    document.getElementById("coast").innerHTML = print
    console.log(print);

    return false;
}


