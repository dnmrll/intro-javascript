const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(prompt('Adivina el numero secreto entre 1 y 10'))

if (numeroJugador = numeroSecreto){
    console.log('ganaste')
} else if (numeroSecreto < numeroJugador) {
    console.log('el numero es muy bajo, intenta de nuevo')
}else if (numeroSecreto > numeroJugador){
    console.log('el numero es muy alto, inteta de nuevo')
 }