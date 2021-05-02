

var scores, roundScore, activePlayer, dice;
var Plyaing;

 
document.querySelector('.dice').style.display = 'none';
function insatlisation(){
    document.querySelector('#current-0').textContent = "0";
    document.querySelector('#current-1').textContent = "0";
    document.querySelector('#score-0').textContent = "0";
    document.querySelector('#score-1').textContent = "0";
    document.querySelector('#name-0').textContent = "Player 1";
     document.querySelector('#name-1').textContent = "Player 2"; 
     document.querySelector('.player-1-panel').classList.remove('active');
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    Plyaing = true;
}
insatlisation();

document.querySelector('.btn-roll').addEventListener('click', function(event){
 if(Plyaing){
dice = Math.floor(Math.random() * 6) + 1;

var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block'; // We have to use block in order to make it visible again 
diceDOM.src = 'dice-' + dice +'.png';
if(dice ===1){
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   // document.querySelector('.dice').style.display = 'none';
}else{
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
}
}
});

document.querySelector('.btn-hold').addEventListener('click', function(event){ 
    if(Plyaing){
    scores[activePlayer] +=  roundScore ;
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    if(scores[activePlayer] > 50){
        document.querySelector('#name-' + activePlayer).innerHTML = '<b> Winner !!!</b>';
        document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    Plyaing = false;
    }else{
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        
    }
     
} 
});

document.querySelector('.btn-new').addEventListener('click', insatlisation);