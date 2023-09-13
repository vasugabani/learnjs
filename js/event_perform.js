function handlebutton() {
    console.log("click event");
}
function handleover() {
    console.log("mouse over");
}
function handleout() {
    console.log("mouse out");
}
function handledowm() {
    console.log("mouse down");
}
function handleup() {
    console.log("mouse up");
}
function handlekey() {
    console.log("key down");
}
function handlekeyup() {
    console.log("key up");
}
function handlefocus() {
    let x=document.getElementById("name").style.backgroundColor='green';
}
function handleblur() {
    let x=document.getElementById("name").style.backgroundColor='white';
}

window.onload=function () {
    alert("onload event")
}

window.onunload=function () {
    console.log("ok");
}

window.onresize=function(){
    console.log("re size");
}