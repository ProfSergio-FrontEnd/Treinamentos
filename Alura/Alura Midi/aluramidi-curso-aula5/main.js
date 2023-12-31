function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');


listaDeTeclas.forEach((tecla) => {
	
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
	

    tecla.addEventListener('click', () => {
        tocaSom(idAudio);
    });

    tecla.addEventListener('keydown', (evento) => {
		//console.log('Passei1');

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        } else if (evento.code.startsWith('Digit')) {// Verifica se o código do evento começa com 'Digit' (para teclas de 1 a 9)
			// Obtém o número da tecla e formato texto
            const numeroTecla = evento.code.replace('Digit', ''); 
			const idBotao = `Digito${numeroTecla}`;
			const botao = document.getElementById(idBotao);
			//console.log(idBotao);

			if (botao) {
				botao.classList.add('ativa');
			
				setTimeout(() => {
					botao.classList.remove('ativa');
				}, 300);
			}
					
			var idTecla = ``;
			
			switch (numeroTecla) {
				case "1": idTecla = `#som_tecla_pom`;
					break;
				case "2": idTecla = `#som_tecla_clap`;
					break;
				case "3": idTecla = `#som_tecla_tim`;
					break;
				case "4": idTecla = `#som_tecla_puff`;
					break;
				case "5": idTecla = `#som_tecla_splash`;
					break;
				case "6": idTecla = `#som_tecla_toim`;
					break;
				case "7": idTecla = `#som_tecla_psh`;
					break;
				case "8": idTecla = `#som_tecla_tic`;
					break;
				case "9": idTecla = `#som_tecla_tom`;
					break;
				default: idTecla = `#som_tecla_default`;
			}
        
            tocaSom(idTecla);
        }
    }); 
	

	

	document.addEventListener('keyup', (evento) => {
		if (evento.code.startsWith('Digit') || evento.code === 'Space' || evento.code === 'Enter') {
		//	console.log('AQUI2');
			
       if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        } else if (evento.code.startsWith('Digit')) {// Verifica se o código do evento começa com 'Digit' (para teclas de 1 a 9)
			// Obtém o número da tecla e formato texto
            const numeroTecla = evento.code.replace('Digit', ''); 
			const idBotao = `Digito${numeroTecla}`;
			const botao = document.getElementById(idBotao);			

			if (botao) {
				botao.classList.remove('ativa');
			}
		}
		}
	});

});