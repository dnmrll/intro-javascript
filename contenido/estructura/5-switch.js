/*
    ESTRUCTURA SWITH
*/

// Costos de una fruta de una tienda 

let expr = 'Manzanas'

 switch (comprar) {
    case 'naranjas':
        console.log('las naramjas cuestan 16q la mano')
        break;
    case 'platanos':
        console.log('los platanos se venen a 18 la docena')
        break;
    case 'manzanas':
        console.log('el precio de las manzanas por unidad es de q5')
        break;
    //casos compartidos
    case 'mangos':
    case 'papayas':
        console.log('los mangos y las papayas vale q12 la libra')
        break;
    default:
        console.log('No se encontraron con inventario para ${comprar}')
        break;
 }