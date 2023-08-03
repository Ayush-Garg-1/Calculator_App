let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.equal-btn');
let clear = document.querySelector('.clear-btn');
let t=0;
let p=true;
buttons.forEach((btn)=>{
    btn.onclick=()=>{
    document.getElementById('result').style.fontSize = "18px";    
    let btnValue =btn.value;
    screen.value+=btnValue;
    if( t===1 || btnValue=='+'  || btnValue=='-' || btnValue=='*' || btnValue=='/' || btnValue=='%' ){
    t=1;
    p = false;
    document.getElementById('result').innerText= ` = ${eval(screen.value)}`;
    }
    if(p){
    document.getElementById('result').innerText= ` = ${screen.value}`;
    }
}
});

equal.onclick=()=>{
    document.getElementById('result').style.fontSize = "30px";
}
clear.onclick=()=>{
    screen.value="";
    document.getElementById('result').innerText="";
}