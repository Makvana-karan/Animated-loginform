let usernameref = document.getElementById("username");
let passwordref = document.getElementById("password");
let eyel = document.querySelector(".eyeball-l");
let eyer = document.querySelector(".eyeball-r");
let handl = document.querySelector(".hand-l");
let handr = document.querySelector(".hand-r");

let normalEyeStyle = () =>{
    eyel.style.cssText = "left:0.6em; top:0.6em;";
    eyer.style.cssText = "right:0.6em; top:0.6em;";
};

let normalHandStyle = () =>{
    handl.style.cssText = "height:2.81em; top:8.4em; left:7.5em; transform:rotate(0deg);";
    handr.style.cssText = "height:2.81em; top:8.4em; rigth:7.5em; transform:rotate(0deg);";
};

//when clicked user on user input
usernameref.addEventListener("focus",() => {
    eyel.style.cssText = "left:0.75em; top:1.12em;";
    eyer.style.cssText = "right:0.75em; top:1.12em;";
    normalHandStyle();
});

//when clicked on password input
passwordref.addEventListener("focus",() => {
    handl.style.cssText = "height:6.56em; top:3.87em; left:11.75em;transform:rotate(-155deg);";
    handr.style.cssText = "height:6.56em; top:3.87em; right:11.75em;transform:rotate(155deg);";
    normalEyeStyle();
});

document.addEventListener("click",(e) =>{
    let clickedElem = e.target;
    if(clickedElem !== usernameref && clickedElem !== passwordref){
        normalEyeStyle();
        normalHandStyle();
    }
});
