let btn = document.querySelector('button');
let logIn = document.querySelector('button span');
let form = document.querySelector('form');
let heading = document.querySelector('.hidden');

function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

btn.addEventListener("mouseover", function(e){
    let btnH = btn.offsetHeight;
    let btnW = btn.offsetWidth;
    let screenH = document.documentElement.clientHeight;
    let screenW = document.documentElement.clientWidth;
    let height = screenH - btnH;
    let width = screenW - btnW;

    btn.style.right = random(0, width) + 'px';
    btn.style.top = random(0, height) + 'px';
    btn.style.transition = '0.2s ease-in-out';

    setTimeout(function(){
        logIn.innerText = 'Catch me if you can'
    }, 5000);
});

logIn.addEventListener("mouseover", function(){
    logIn.innerText = "Come on... Click me";
});

setTimeout(function(){
    form.style.display = "none";
    heading.style.display = "inline-block";
}, 40000);