/*
    TIPO DE DATO 'number'
*/


//1. entro y decimal
const entero = 42
const decimal = 3.14

//2. notacion cientifica
const cientifica = 5e3

//3. infinitos y Nan (not a number)
const infinito = Infinity
const noEsNumero = NaN

//opearciones aritmeticas
//1. suma, resta, multiplicar, dividir

const suma = 5 + 6
const resta = 4 - 6
const multiplicar = 4 * 8
const dividir = 16 / 2

// 2. modulo y exponenciacion
const modulo = 16 % 8
const exponenciacion = 2 ** 4


//PRESICION, javacript tiene problemas de calcuulo

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado == 0.3)

//OPERACIONES AVANZADAS

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio * 10+1)