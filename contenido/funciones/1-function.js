/*
    FUNCIONES
*/

//somos due;os de una empresa y necesitanos apkucar descuentos anuestros productos

function  calcularPrecioDescuento(pprecio, descuentoEnPorcentaje) {
    const descuento = (precio * descuentoEnPorcentaje) / 100
    const nuevoPrecio = precio-descuento
    return nuevoPrecio    
}

const precioOriginal = 1000
const descuento = 18
const precioFinal = calcularPrecioDescuento(precioOriginal, descuento)

console.log('precio original: Q'+precioOriginal)
console.log('descuento:'+descuento +"%")
console.log('precio con descuento: Q' + precioFinal)