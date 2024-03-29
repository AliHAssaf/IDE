let code_area =document.getElementById("code-area");
let run =document.getElementById("run");
let delet =document.getElementById("delete");
let output =document.getElementById("output");

run.onclick = () =>{
    output.innerHTML = code_area.value;
    localStorage.setItem("result",code_area.value)
}
delet.onclick = () =>{
    // code_area.value = null;
    output.innerHTML = "";
}
onload = () =>{
    code_area.value = localStorage.getItem("result");
}
// var protocl = location.protocol;
// alert(protocl);
// alert(location.href);
// alert(location.hostname);
// alert(location.pathname);
var reloadbtn = document.getElementById("reloadbtn");
reloadbtn.onclick = () => {
    location.reload();
}