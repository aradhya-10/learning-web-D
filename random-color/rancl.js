const bd = document.body;
let head = document.querySelector('h1');
let btn = document.querySelector('button');

btn.addEventListener('click',()=> {
    let r = Math.floor(Math.random()*255)+1;
    let g = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;
    head.innerText=`rgb(${r},${g},${b})`;
    bd.bgColor=`rgb(${r},${g},${b})`;
})

