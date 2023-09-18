function handlesubmit() {

    let x = parseFloat(document.getElementById("subject").value);
    let x1 = parseFloat(document.getElementById("subject1").value);
    let x2 = parseFloat(document.getElementById("subject2").value);

    let sub;

    let xe = true, x1e = true, x2e = true;

    if (x) {
        if (x > 0) {
            document.getElementById("checck").innerHTML = ''
            xe = false
        } else {
            document.getElementById("checck").innerHTML = 'please enter valid marks'
        }
    } else {
        document.getElementById("checck").innerHTML = 'please enter marks'
    }

    if (x1) {
        if (x1 > 0) {
            document.getElementById("checck1").innerHTML = ''
            x1e = false
        } else {
            document.getElementById("checck1").innerHTML = 'please enter valid marks'
        }
    } else {
        document.getElementById("checck1").innerHTML = 'please enter marks'
    }

    if (x2) {
        if (x2 > 0) {
            document.getElementById("checck2").innerHTML = ''
            x2e = false
        } else {
            document.getElementById("checck2").innerHTML = 'please enter valid marks'
        }
    } else {
        document.getElementById("checck2").innerHTML = 'please enter marks'
    }

    if (xe || x1e || x2e) {
        return false
    } else {
        sub = x + x1 + x2;
        console.log("total marks is:", sub);

        let per;
        per = sub / 3;
        console.log("per is :", per);

        if (per > 90 && per <= 100) {
            console.log("grade a");
        } else if (per > 80 && per <= 90) {
            console.log("grade b");
        } else if (per > 70 && per <= 80) {
            console.log("grade c");
        } else if (per > 60 && per <= 70) {
            console.log("grade d");
        }
    }

    return false
}