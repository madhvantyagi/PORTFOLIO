var web=document.getElementById("web");
var love=0;

const webDev=()=>{
var names=["web devloper", "web dev#</er", "web dev#</!@","web dev#</!@","web dev!0p^r","web devlo...","web devl[0]9er","web devloper"];

web.innerText=names[love];
love++;
if(love>=names.length){
    love=0;
}
}
var id= setInterval(webDev,150);

const cl=()=>{
    clearInterval(id);
}

setTimeout(cl, 1300);