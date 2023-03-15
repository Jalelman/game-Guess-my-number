'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let hightscore=0;
console.log(secretNumber)
const displayMessage = function(message){
    document.querySelector(".message").textContent=message;
};
document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
    if(!guess){
        displayMessage('theree is no number');

    }else if(guess===secretNumber){
        displayMessage('Correct Number');
        document.querySelector(".number").textContent=secretNumber;
        document.querySelector("body").style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>hightscore){
            document.querySelector(".highscore").textContent=score;
        }

    }else if(guess !==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber? "tooHight":"too Low");
            score--;
            document.querySelector(".score").textContent=score;

        }else{
            displayMessage('game over');
            document.querySelector(".score").textContent=0;
        }
    }

});