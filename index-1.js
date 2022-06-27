gsap.registerPlugin("ScrollTrigger");

let Iot=document.querySelector("#code-box-parent");
let filler=gsap.to(".filler-iot",{  
    x:200,
   opacity:0,
   ease:"ease",
  duration:1.5
});

Iot.addEventListener("mouseenter",()=>{
    filler.play();
})

Iot.addEventListener("mouseleave",()=>{
filler.reverse();
})

var codebox = document.querySelector(".code-box");
console.log(codebox)
codebox.textContent = "";


var code_arr = ["I am Madhvan Tyagi Software programmer ", "I have excellence in so many devlopement techniques", " ", "Right now I am working over the Time machine ,", " I need 100 trillion dollar funding to continue my project ", "some of my Algorithms are here  ", " They are in binary", "  0101010110110111010010001111010110100100101001010110101110 ", " } "];
var code_arr2 = ["int timer = 500; ","int LEDPins[] = {13, 12, 8, 4, 2};       // an array of declared pin numbers on the board ","int countOFpin = 6;           // the number of arrays ","void setup()   { ","// we have declared an array to intialize the LED pins as OUTPUT ","for (int PIN = 0; PIN < countOFpin; PIN= PIN + 1)   { ","pinMode(LEDPins[PIN], OUTPUT); }  ","}"]
var code_arr3 = ["void setup(){ ","pinMode(13, OUTPUT); ","pinMode(8, OUTPUT); ","pinMode(4, OUTPUT); ","} ","void loop(){ ","// the first LED is made to blink one time ","digitalWrite(13, HIGH); ","delay(1000); // delay time in milliseconds ","digitalWrite(13, LOW); ","delay(1000); ","// the second LED will blink two times ","digitalWrite(8, HIGH); ","delay(500); // the duration is 0.5 seconds ","digitalWrite(8, LOW); ","delay(500); ","digitalWrite(8, HIGH); ","delay(500); ","digitalWrite(8, LOW); ",""]
var count = 0, i = 0, reminder = 0;
var int1 = 1, int2 = 0,  count2 = 0, h = 0 ,count3=0,g=0 , notifier=1;

var screenColor=document.querySelector(".screen-screen");
var screenText=document.getElementById("screen-screen-text");
screenText.textContent="";

var btn=document.querySelector("#run");

const screenAnimator=()=>{
    if(notifier==1){
    gsap.to(screenColor,{duration:"1.5",backgroundColor:"#0fb87d"});
         gsap.to(screenText,{duration:"1.2",color:"black"});
    screenText.textContent="I was the charles babbage ";
    notifier++;
    console.log("i am screen animator");
}
    else if(notifier==2){
        gsap.to(screenColor,{duration:"1.5",backgroundColor:"#0fb87d"});
        screenText.textContent="Excellence in Python, java , c++";
       notifier++;
}
  
    
    else if(notifier==3){
        gsap.to(screenColor,{duration:"1.5",backgroundColor:"#0fb87d"});
        screenText.textContent="Know  Ml techniques and algorithms";
        notifier=1;
    }
}
const removeAnimator=()=>{
    screenText.textContent="";
    gsap.to(screenColor,{duration:"1.5",backgroundColor:"#10382a"});
}

btn.addEventListener("click",screenAnimator);

// setTimeout(screenAnimator,2000);

//web dev animation
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
var clear= setInterval(webDev,150);

const cl=()=>{
    clearInterval(clear);
}

setTimeout(cl, 1300);



console.log(code_arr[9]);
const paraGen = () => {
    var para = document.createElement("p");
    codebox.appendChild(para);
    para.classList.add("temp_terminal");
    return para;
}

var temp = document.createElement('p');



const iterator = () => {
    //1st if condition
    if (int1 <= code_arr.length) {
        // console.log(i);
        // console.log("i am again here");
        codebox.appendChild(temp);
        temp.innerHTML += code_arr[count][i];//this line
        i++;
        if (i >= code_arr[count].length - 1) {
            temp.classList.remove("temp_terminal");
            temp = paraGen();
            count++;
            int1++;
            // console.log(`i am count ${count}`);
            console.log(`i am int ${int1}`);
            // console.log(`i am i ${i}`);
            i = 0;     // 11   10
        } if (count >= code_arr.length) {
            codebox.innerHTML = "";
            i=0;
            count=0;
        }
    }
    

//2nd if condition
    if (int1 == code_arr.length + 1) {
     //  console.log(int1);
        codebox.appendChild(temp);
        // console.log(count2);
        temp.innerHTML += code_arr2[count2][h];
        h++;
        if (h >= code_arr2[count2].length - 1) {
            temp.classList.remove("temp_terminal");
            temp = paraGen();
            count2++;
            int2++;
            console.log(`i am an int2 ${int2}`);
            h = 0;
        }
        if(count2>=code_arr2.length){
            int1++;
            codebox.innerHTML="";
            h=0;
            count2=0;
        }

    }

    if(int2==code_arr2.length){

        console.log(int2);
        codebox.appendChild(temp);
        temp.innerHTML+=code_arr3[count3][g];
     
        g++;
        if(g>=code_arr3[count3].length-1){
            temp.classList.remove("temp_terminal");
            temp=paraGen();
            count3++;
            console.log(`this is a count3 ${count3} `);
             g=0;

        }
        if(count3>=code_arr3.length){
            int1=1,int2=0;
            codebox.innerHTML="";
            g=0;
            count3=0;
            console.log("i have got this code");
           
        }

    }

}


// console.log("main function working");
// console.log(int1);


//
var id= setInterval(iterator,150);

// var id2 = setInterval(iterator2,100);

function ScrollDiv(){ // Auto Scroll Terminal

    if(document.getElementById('code-box-parent').scrollTop<(document.getElementById('code-box-parent').scrollHeight-document.getElementById('code-box-parent').offsetHeight)){-1
          document.getElementById('code-box-parent').scrollTop+=1;
          }
    else {document.getElementById('code-box-parent').scrollTop=0;}
 }
 
 setInterval(ScrollDiv,2);

 
var target= document.getElementById("")

const mouseScroller=()=>{
    var width=window.innerWidth;
    var height =window.innerHeight;
    
}

 const effect =()=>{



 }



//  gsap.to(screenColor, {duration: 3,backgroundColor:"red"});

//CODE FOR MAKING MOUSE ANIMATION

let word=document.querySelectorAll(".who-am-i");
let cursor=document.querySelector(".cursor");

word="yeah";
let x,y;




document.body.addEventListener("mousemove",cordinates);
function cordinates(e){
x=e.clientX;
y=e.clientY;
// console.log(cursor);
cursor.style.left=x-5+"px";
cursor.style.top=y-5+"px";
// console.log(x,y);
}

let Div=document.createElement("div");
// Div.appendChild(document.createTextNode('yeah i am working in the world'));
// let mainDiv=document.querySelector(".three");
// console.log(mainDiv);
// mainDiv.appendChild(Div);
let mainTime=gsap.timeline({
paused:true
}).to(".girl-talking",{
    x:400,
    duration:15,
  
}).to(".boy-talking ,.girl-talking",{
  
    duration:20,
     css:{
         scale:0.7,
        x:400
     },
    
}).from(".para-us",{
   opacity:0,
   y:250,
   duration:30
});

ScrollTrigger.create({
    animation:mainTime,
    trigger:".three",
    start:"top 0",
    end:"=+1000",
    scrub:true,
    pin:true,
    // markers:true,
    onEnter:function(){
        tar.classList.add("trans-div1");
    },
    onLeave:function(){
        tar.classList.remove("trans-div1");
    }
    
});
  
let tar=document.querySelector(".outside-div");
ScrollTrigger.create({
    trigger:".two",
    // markers:true,
    onEnter:function(){
      tar.classList.add("trans-div");
      console.log(tar);
    },
    start:"top 0",
    end:"700px",
    onLeave:function(){
        tar.classList.remove("trans-div");
        console.log("I am oncomplete");
    }

});

ScrollTrigger.create({
    trigger:".four",
    // markers:true,
    onEnter:function(){
      tar.classList.add("trans-div2");
    },
    start:"top 0",
    end:"550px",
    markers:true,
    onLeave:function(){
        tar.classList.remove("trans-div2");
    }

});

var madhavan=document.querySelector("#madhavan");
 console.log(madhavan);
madhavan.addEventListener("mousemove",()=>{
    cursor.classList.add("big");
})
madhavan.addEventListener("mouseleave",()=>{
    cursor.classList.remove("big");
})


let logo= document.querySelectorAll(".contact-connect-logo");
let t= document.querySelectorAll(".contact-connect-name");
console.log(logo[0],logo)
logo[0].addEventListener("mouseenter",()=>{
    t[0].classList.add("fake");
    gsap.from(t[0],{x:"40",opacity:0,duration:0.9,ease:"ease"});
}
);

logo[0].addEventListener("mouseleave",()=>{
    t[0].classList.remove("fake");
})

logo[1].addEventListener("mouseenter",()=>{
    t[1].classList.add("fake");
    gsap.from(t[1],{x:"40",opacity:0,duration:0.9,ease:"ease"});
}
);

logo[1].addEventListener("mouseleave",()=>{
    t[1].classList.remove("fake");
})

logo[2].addEventListener("mouseenter",()=>{
    t[2].classList.add("fake");
    gsap.from(t[2],{x:"40",opacity:0,duration:0.9,ease:"ease"});
}
);

logo[2].addEventListener("mouseleave",()=>{
    t[2].classList.remove("fake");
})

logo[3].addEventListener("mouseenter",()=>{
    t[3].classList.add("fake");
    gsap.from(t[3],{x:"40",opacity:0,duration:0.9,ease:"ease"});
}
);

logo[3].addEventListener("mouseleave",()=>{
    t[3].classList.remove("fake");
})
