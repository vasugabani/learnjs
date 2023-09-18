function handlesubmit() {

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let heightc = true, weightc = true;

    // console.log(height);
    // console.log(weight);

    if (height) {
        if (height > 50 && height <= 300) {
            document.getElementById("result").innerHTML = ''
            heightc = false;
        } else {
            document.getElementById("result").innerHTML = 'please enter valid height'
        }
    } else {
        document.getElementById("result").innerHTML = 'please enter height'
    }

    if (weight) {
        if (weight > 10 && weight <= 200) {
            document.getElementById("error").innerHTML = ''
            weightc = false;
        } else {
            document.getElementById("error").innerHTML = 'please enter valid weight'
        }
    } else {
        document.getElementById("error").innerHTML = 'please enter weight'
    }

    if (heightc || weightc) {
        return false
    } else {
        let m, bmi;

            m = height / 100;
            console.log(m);
            bmi = weight / (m * m);
            console.log("bmi is", bmi);
            document.getElementById("check").innerHTML = bmi;

        let rate;
        if (bmi < 18.6) {
            rate = "under weight";
            console.log(rate);
        } else if (bmi <= 24.9) {
            rate = "normal range";
            console.log(rate);
        } else if (bmi > 24.9) {
            rate = "overweight";
            console.log(rate);
        }
        document.getElementById("rating").innerHTML = rate


        return false;
    }


}