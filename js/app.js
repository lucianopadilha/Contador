


function incrementar() {
	let contador = document.getElementById('contador')
	
	contador.innerHTML++
	contador.style.color = 'green'

	let cima = document.getElementById('cima')
	let baixo = document.getElementById('baixo')

	cima.style.background = 'green'
	baixo.style.background = 'transparent'
	cima.style.background = "green url('./assets/seta-para-cima.png')"
	cima.style.backgroundSize = '50px'
	cima.style.borderRadius = '30px'
}



function decrementar() {
	contador.innerHTML--
	contador.style.color = 'red'
	baixo.style.background = "red url('./assets/seta-para-baixo.png')"
	baixo.style.backgroundSize = '50px'
	baixo.style.borderRadius = '30px'
	cima.style.background = 'transparent'
}



function reset() {
	contador.innerHTML = '0'
	contador.style.color = 'black'
	baixo.style.background = 'transparent'
	cima.style.background = 'transparent'
}

