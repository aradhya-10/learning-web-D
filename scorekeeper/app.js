let round=3, score1=0, score2=0, f=1;
const rounds = document.getElementById('sel');
const display = document.querySelector('h3');
const button = document.querySelectorAll('.btn'); 
const score = document.querySelector('#score');
const color = document.querySelectorAll('span');

rounds.addEventListener('change', function(e){
    round=rounds.value;
    enable(round);
    console.log(round);
})

score.addEventListener('click', function(e){
    const x = e.target.id[2];
    console.log(`Clicked ${x}`);
    inc(x);
})

function inc(x){

    if(x==3)
    {
        enable();
    }

    else if(f==1)
    { 
        let sc = display.innerText;
        score1 = (sc[0]-'0');
        score2 = (sc[5]-'0');
            
        if(x==1)
            {score1++;}
        if(x==2)
            {score2++;}
        
        if(score1>=round || score2>=round)
            {disable();}
        else
            {display.innerText = `${score1} to ${score2}`;}
    }
}

function disable(){  
    colorr();
    button[0].classList.add(`disabled`);
    button[1].classList.add(`disabled`);
    f=0;
}

function enable(x=3){  
    score1=0;
    score2=0;
    rounds.value = x;
    display.innerText = `${score1} to ${score2}`;
    button[0].classList.remove(`disabled`);
    button[1].classList.remove(`disabled`);
    f=1;
}

function colorr(){
    let s1,s2;
    if(score1>score2)
    {
        s1= "color: rgb(0, 255, 0)";
        s2= "color: rgb(255, 0, 0)";
    }
    else
    {
        s2= 'color: rgb(0, 255, 0)';
        s1= 'color: rgb(255, 0, 0)';
    }

    display.innerHTML = `<span class='score1' style='${s1}'>${score1}</span> to <span class='score2' style='${s2}'>${score2}</span>`;    
}
