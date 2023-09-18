function handlesubmit() {
    // console.log("ok");

    let r = parseFloat(document.getElementById("radius").value);

    let checke = true

    if (r) {
        if (r > 0) {
            document.getElementById("check").innerHTML = ''
            checke = false
        } else {
            document.getElementById("check").innerHTML = 'please enter valid radius'
        }
    } else {

        document.getElementById("check").innerHTML = 'please enter radius'
    }

    if (checke) {
        return false
    } else {
        let area = 3.14 * r * r;
        console.log("area of circle:", area);
    }

    return false;
}