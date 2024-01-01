function handlesubmit() {

    event.preventDefault()
    
    let gen = document.getElementById("gen").value;
    let ram = document.getElementById("ram").value;
    let sto = document.getElementById("sto").value;
    let gra = document.getElementById("gra").value;

    let gentotel;
    // console.log(gen,ram,sto,gra);/

    if (gen == 'i3') {
        gentotel = 6000
    } else if (gen == 'i5') {
        gentotel = 9000
    } else if (gen == 'i7') {
        gentotel = 12000
    }

    let ramtotel;

    if (ram == '4') {
        ramtotel = 2000
    } else if (ram == '8') {
        ramtotel = 4000
    } else if (ram == '12') {
        ramtotel = 6000
    }

    let stototel;

    if (sto == '256') {
        stototel = 2500
    } else if (sto == '512') {
        stototel = 5000
    } else if (sto == '1TB') {
        stototel = 10000
    }

    let gratotel;

    if (gra == 'yes') {
        gratotel = 4200
    } else {
        gratotel = 0
    }

    // console.log(gentotel,ramtotel,stototel,gratotel);

    let totel = gentotel + ramtotel + stototel + gratotel;

    document.getElementById("ans").innerHTML = totel;

    return false;
}