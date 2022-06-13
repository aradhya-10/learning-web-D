const formy = document.querySelector('#umm');
const liss = document.querySelector('ul');
const inputt = document.querySelector('#inputtt');

formy.addEventListener("submit", function (e){
    e.preventDefault();
    const toadd = inputt.value;
    const addl = document.createElement('li');
    addl.innerText = toadd;
    liss.append(addl);
    inputt.value='';
})