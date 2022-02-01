var web=document.getElementById("web");
var count=0;

const animate=()=>{
var names=["web devloper", "web dev#</er", "web dev#</!@","web dev#</!@","web dev!0p^r","web devlo...","web devl[0]9er","web devloper"];

web.innerText=names[count];
count++;
if(count>=names.length){
    count=0;
}
}
var id= setInterval(animate,150);

const cl=()=>{
    clearInterval(id);

}

setTimeout(cl, 1300);