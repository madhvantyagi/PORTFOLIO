var codebox = document.querySelector(".code-box");
console.log(codebox)
codebox.textContent = "";


var code_arr = ["the setup function runs once when you press reset or power the board void setup()", "// initialize digital pin LED_BUILTIN as an output. ", "pinMode(LED_BUILTIN, OUTPUT); ", "} ", "// the loop function runs over and over again forever ", " void loop() { </pigitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level) ", " delay(1000);                       // wait for a second ", " digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW ", "  delay(1000);                       // wait for a second ", " } "];
var code_arr2 = ["ahis is our new experiment that we can do about in our generation ", "quantum code in our froozen cosmos ", "new line of hacking begin"];
var count = 0, i = 0, reminder = 0;
var int1 = 1, int2 = 0,  count2 = 0, h = 0;
// console.log(code_arr[9]);
console.log(code_arr[9]);
const paraGen = () => {
    var para = document.createElement("p");
    codebox.appendChild(para);
    return para;
}

var temp = document.createElement('p');


const iterator = () => {
    //1st if condition
    if (int1 <= code_arr.length) {
        codebox.appendChild(temp);
        temp.innerHTML += code_arr[count][i];//this line
        i++;
        if (i >= code_arr[count].length - 1) {
            temp = paraGen();
            count++;
            int1++;
            console.log(`i am count ${count}`);
            console.log(`i am int ${int1}`);
            // console.log(`i am i ${i}`);
            i = 0;     // 11   10
        } if (count >= code_arr.length) {
            codebox.innerHTML = "";
            // i=0;
        }
    }
    

//2nd if condition
    if (int1 == code_arr.length + 1) {
        console.log(int1 == code_arr.length + 1);
        //  console.log(int1);
        console.log("i am start");
        codebox.appendChild(temp);
        // console.log(count2);
        temp.innerHTML += code_arr2[count2][h];
        h++;
        if (h >= code_arr2[count2].length - 1) {
            temp = paraGen();
            count2++;
            int2++;
            h = 0;
        }

    }


}


// console.log("main function working");
// console.log(int1);


//
// var id= setInterval(iterator,10);

// var id2 = setInterval(iterator2,100);
