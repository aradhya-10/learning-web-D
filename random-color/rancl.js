const bd = document.body;
let head = document.querySelector('h1');
let btn = document.querySelector('button');

btn.addEventListener('click',()=> {
    let r = Math.floor(Math.random()*255)+1;
    let g = Math.floor(Math.random()*255)+1;
    let b = Math.floor(Math.random()*255)+1;
    head.innerText=`rgb(${r},${g},${b})`;
    //bd.bgColor=`rgb(${r},${g},${b})`;
    //this hardcode's the HTML (in-line)
    bd.style.backgroundColor=`rgb(${r},${g},${b})`;
    //well apparently, so does this :)
})

//Alternatively:
// btn.addEventListener('click', () =>{
//     const newColor = randomColor();
//     head.innerText=newColor;
//     bd.bgColor=newColor;
// });

// function randomColor()
// {
//     let r = Math.floor(Math.random()*255);
//     let g = Math.floor(Math.random()*255);
//     let b = Math.floor(Math.random()*255);
//     return `rgb(${r},${g},${b})`;
// }