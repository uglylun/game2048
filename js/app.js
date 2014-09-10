var game, startBtn;

window.onload = function(){
	var container = document.getElementById('div2048');
	startBtn = document.getElementById('start');
	startBtn.onclick = function(){
		this.style.display = 'none';
		game = game || new game2048(container);
		game.init();
	}
}

window.onkeydown = function(e){
	var keynum, keychar;
	if(window.event){		// IE
		keynum = e.keyCode;
	}
	else if(e.which){		// Netscape/Firefox/Opera
		keynum = e.which;
	}
	keychar = String.fromCharCode(keynum);
	if(['W', 'S', 'A', 'D'].indexOf(keychar) > -1){
		if(game.over()){
			game.clean();
			startBtn.style.display = 'block';
			startBtn.innerHTML = 'game over, replay?';
			return;
		}
		game.move(keychar);
	}
}