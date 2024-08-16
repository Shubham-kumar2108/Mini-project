let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","green","blue","red"];


document.addEventListener("keypress",function(){
 if(started==false){
    console.log("Game Started");
    started=true;
    levelup();
 }
});

function btnFlash(btn){
  btn.classList.add ("flash");
  setTimeout(function(){
        btn.classList.remove ("flash");
    }, 500);

}

function userFlash(btn){
    btn.classList.add ("userflash");
    setTimeout(function(){
          btn.classList.remove ("userflash");
      }, 500);
  
  }

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIndx=Math.floor(Math.random() * 3);
    let randColor= btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    btnFlash(randBtn);
}

function chkAnswer(idx){
    //console.log("curr level:",level);
    
    if(userseq[idx] === gameseq[idx]){
        console.log("same value");
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`GAME OVER! Your score was <b>${level}</b> <br>press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor="white";  
        },150 ) ;
        reset() ;
    }

}

function btnPress(){
    
    let btn=this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    chkAnswer(userseq.length-1);
}
   
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}