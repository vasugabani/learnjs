function insert(value) {
    // console.log(value);

    document.form1.textview.value = document.form1.textview.value + value;
    // console.log(value);
}
function equal() {
    let exp = document.form1.textview.value;
    console.log(exp);

    let ans = eval(exp);
    console.log(ans);

    document.form1.textview.value = ans;
}
function backspace() {
    let exp = document.form1.textview.value;

    document.form1.textview.value=exp.substring(0,exp.length-1);
}
function cleardata() {
    document.form1.textview.value = '';
}