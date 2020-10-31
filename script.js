var scores , roundscores , activeplayer , dice , diceDOM ,gameplaying , player1name, player2name;

init();

document.querySelector('.btn--roll').addEventListener('click', function() {
    if(gameplaying){
	    
	    dice = Math.floor(Math.random() * 6 )+ 1  ;

	    diceDOM = document.querySelector('.dice');
	    diceDOM.style.display = 'block';
	    diceDOM.src = 'dice-' + dice +'.png';

	    if (dice > 1){
	        roundscores +=dice ;
	        document.querySelector('#current--' + activeplayer).textContent = roundscores;
	    }else{
	        nextplayer();
	    }	
    }
}); 

document.querySelector('.btn--hold').addEventListener('click', function() {
     if(gameplaying){
	     
	    scores[activeplayer] += roundscores;

	    document.querySelector('#score--' + activeplayer).textContent= scores[activeplayer];

	    if(scores[activeplayer] >= 50) {
	        document.querySelector('#name--' + activeplayer).textContent= 'Winner!';
	        document.querySelector('.dice').style.display= 'none';
	        document.querySelector('.player--'+ activeplayer).classList.add('player--winner');
	    	gameplaying = false;
	    }else{
	        nextplayer();
	    }
     }
});

function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
        roundscores=0 ;

        document.getElementById('current--0').textContent= '0';
        document.getElementById('current--1').textContent= '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        
        document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn--new').addEventListener('click',init);

function init(){
    scores = [0,0] ;
    roundscores = 0 ;
    activeplayer = 0 ;
    gameplaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score--0').textContent= '0';
    document.getElementById('score--1').textContent= '0';
    document.getElementById('current--0').textContent= '0';
    document.getElementById('current--1').textContent= '0';
    document.querySelector('#name--0').textContent= 'Player 1';
    document.querySelector('#name--1').textContent= 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    name ();
    
}
function name (){
	player1name= prompt('what\'s your name player1:');
	player2name= prompt('what\'s your name player2:');

	if (player1name===''){
		document.querySelector('#name--0').textContent= 'Player 1'
	}else{
		document.querySelector('#name--0').textContent= player1name;
	}
	if(player2name ===''){
		document.querySelector('#name--1').textContent= 'Player 2'
	}else{
		document.querySelector('#name--1').textContent= player2name;
}
	}
	
    
// var x = document.querySelector('#score--0').textContent;
// console.log(x);
