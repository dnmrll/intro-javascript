console.log('Suma de numeros del 1 al 50:')

function sumarNumeros() {
    let suma = 0;
    for (let i = 1; i <= 50; i++) {
      suma += i
    }
    return suma
  }
  
  console.log("La suma de los números del 1 al 50 es:" + sumarNumeros())
  