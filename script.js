//APPLYING EVENT LISTENERS TO ALL BUTTONS

let str="";
function listener(evt){
    let a= evt.target.value;
    document.querySelector(".screen").value+=a;
}
let buttons=document.querySelectorAll("input");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",listener)
}

//REMOVING EVENT LISTENERS FROM AC DE and =

document.querySelector(".ac").removeEventListener("click",listener);
document.querySelector(".de").removeEventListener("click",listener);
document.querySelector(".equal").removeEventListener("click",listener);

//ADDING EVENT LISTENERS TO ALL 3 BUTTONS SEPERATELY

function allclear(){
    document.querySelector(".screen").value="";
}
function oneclear(){
    document.querySelector(".screen").value=document.querySelector(".screen").value.slice(0,-1);
}

function forequal(){
    try{
    document.querySelector(".screen").value=eval(document.querySelector(".screen").value);
    }
    catch(e){
        document.querySelector(".screen").value="Error"}
}

document.querySelector(".ac").addEventListener("click",allclear);
document.querySelector(".de").addEventListener("click",oneclear);
document.querySelector(".equal").addEventListener("click",forequal);


