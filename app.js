$(document).ready(function () {
	//defino todos los spots
    var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');
   //los 2 jugadores
	var x ='x';
	var o ='o';
   //los turnos de juego empezando por 0++
	var turns = 0;
    //toda la casuistica con la que gana o
	$('#board li').on('click',function(){
		if(
			$(spot1).hasClass('o') && $(spot2).hasClass('o') && $(spot3).hasClass('o') ||
			$(spot4).hasClass('o') && $(spot5).hasClass('o') && $(spot6).hasClass('o') ||
			$(spot7).hasClass('o') && $(spot8).hasClass('o') && $(spot9).hasClass('o') ||
			$(spot1).hasClass('o') && $(spot4).hasClass('o') && $(spot7).hasClass('o') ||
			$(spot2).hasClass('o') && $(spot5).hasClass('o') && $(spot8).hasClass('o') ||
			$(spot3).hasClass('o') && $(spot6).hasClass('o') && $(spot9).hasClass('o') ||
			$(spot1).hasClass('o') && $(spot5).hasClass('o') && $(spot9).hasClass('o') ||
			$(spot3).hasClass('o') && $(spot5).hasClass('o') && $(spot7).hasClass('o') 
		
		  ){//si gana o desaparecen todas las clases incluida la clase disable que impide a un jugador seleccionar spot cuando este esta ocupado le añadimos la clase incial + y
			alert('winner is o');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
			$('#board li').removeClass('disable');
			$('#board li').text('+');
          //lo mismo para player two
		}else if(
			$(spot1).hasClass('x') && $(spot2).hasClass('x') && $(spot3).hasClass('x') ||
			$(spot4).hasClass('x') && $(spot5).hasClass('x') && $(spot6).hasClass('x') ||
			$(spot7).hasClass('x') && $(spot8).hasClass('x') && $(spot9).hasClass('x') ||
			$(spot1).hasClass('x') && $(spot4).hasClass('x') && $(spot7).hasClass('x') ||
			$(spot2).hasClass('x') && $(spot5).hasClass('x') && $(spot8).hasClass('x') ||
			$(spot3).hasClass('x') && $(spot6).hasClass('x') && $(spot9).hasClass('x') ||
			$(spot1).hasClass('x') && $(spot5).hasClass('x') && $(spot9).hasClass('x') ||
			$(spot3).hasClass('x') && $(spot5).hasClass('x') && $(spot7).hasClass('x') 
		  ){
			alert('winner is player x');
			$('#board').removeClass('x');
			$('#board').removeClass('o');
			$('#board').removeClass('disable');
			$('#board').text('+');
			//definimos el caso del empate
		} else if(turns == 9){
			alert('This is a draw');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
			$('#board li').removeClass('disable');
			$('#board li').text('+');
			turns =0;
         //definimos cuando un spot ya esta ocupado
		}else if($(this).hasClass('disable')){
			alert('this spot is already filled');
			//defino lo que ocurre al comienzo de la partida
		}else if(turns %2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(
			    $(spot1).hasClass('o') && $(spot2).hasClass('o') && $(spot3).hasClass('o') ||
			    $(spot4).hasClass('o') && $(spot5).hasClass('o') && $(spot6).hasClass('o') ||
			    $(spot7).hasClass('o') && $(spot8).hasClass('o') && $(spot9).hasClass('o') ||
			    $(spot1).hasClass('o') && $(spot4).hasClass('o') && $(spot7).hasClass('o') ||
			    $(spot2).hasClass('o') && $(spot5).hasClass('o') && $(spot8).hasClass('o') ||
			    $(spot3).hasClass('o') && $(spot6).hasClass('o') && $(spot9).hasClass('o') ||
			    $(spot1).hasClass('o') && $(spot5).hasClass('o') && $(spot9).hasClass('o') ||
			    $(spot3).hasClass('o') && $(spot5).hasClass('o') && $(spot7).hasClass('o') 
			   )
			{
				  alert('winner is o');
				  turns=0;

			};

		}else{
			turns ++;
			$(this).text(x);
			$(this).addClass(' disable x');

			if(
				$(spot1).hasClass('x') && $(spot2).hasClass('x') && $(spot3).hasClass('x') ||
			    $(spot4).hasClass('x') && $(spot5).hasClass('x') && $(spot6).hasClass('x') ||
		   	    $(spot7).hasClass('x') && $(spot8).hasClass('x') && $(spot9).hasClass('x') ||
			    $(spot1).hasClass('x') && $(spot4).hasClass('x') && $(spot7).hasClass('x') ||
			    $(spot2).hasClass('x') && $(spot5).hasClass('x') && $(spot8).hasClass('x') ||
			    $(spot3).hasClass('x') && $(spot6).hasClass('x') && $(spot9).hasClass('x') ||
			    $(spot1).hasClass('x') && $(spot5).hasClass('x') && $(spot9).hasClass('x') ||
			    $(spot3).hasClass('x') && $(spot5).hasClass('x') && $(spot7).hasClass('x') 
		   	  ){
				 alert('winner is x');
				 turns=0;

		    };

		};

	});
	//por ultimo defino las caracteristicas del boton evento click en reset 
	$('#reset').on('click',function(){
		$('#board li').removeClass('x');
		$('#board li').removeClass('o');
		$('#board li').removeClass('disable');
		$('#board li').text('+');
		turns =0;

	});
    
    //NOTA voy a seguir desarrollando este proyecto para poder jugar contra la consola
});