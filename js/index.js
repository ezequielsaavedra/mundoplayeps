alert("Bienvenido a Mundo Play");

let compra = parseInt(prompt("Que item desea comprar? 1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty"));

let carrito = 0 ,seguirComprando = true ,continuarCompra, cuotas; 

console.log (typeof carritoDividido)

agregarCarrito = (total, producto) => {
    resultado = total + producto
    return resultado
};

while (seguirComprando === true) {
    if (compra === 1) {
        carrito = agregarCarrito (carrito, 15)
    } else if (compra === 2) {
        carrito = agregarCarrito (carrito, 60)
    } else if (compra === 3) {
        carrito = agregarCarrito (carrito, 45)
    } else if (compra === 4) {
        carrito = agregarCarrito (carrito, 9)
    } else if (compra === 5) {
        carrito = agregarCarrito (carrito, 30)
    } else {
        compra = parseInt(prompt("Por favor, elija un producto de nuestro catalogo: 1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty"))
        continue
    }
    continuarCompra = prompt("Quiere seguir comprando? Si o No?").toLowerCase()
    if (continuarCompra === "si") {
        compra = parseInt(prompt("Que item desea comprar? 1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty")) 
    } else { 
        alert ("El total de su compra es " + carrito + " U$D. Gracias por comprar con nostros!!")
        seguirComprando = false
        // while (seguirComprando === true) {
        // cuotas = parseInt(prompt("El total de su compra es " + carrito + " U$D. En cuantas cuotas desea abonar? 1 - 3 - 6 -12"))
        //     if ((cuotas === 1) || (cuotas === 3) || (cuotas === 6) || (cuotas === 12)) {
        //         alert ("Su total es " + carrito / cuotas + " U$D a abonar en "+ cuotas + " cuota/s. Gracias por elegirnos!!")
        //         seguirComprando = false
        //     } 
        //     else {
        // cuotas = parseInt(prompt("Por favor, seleccione una cantidad permitida: 1 - 3 - 6 -12"))
        //     continue
        //     }
        // }
    // } else {
    //     prompt("Quiere seguir comprando? Si o No?").toLowerCase()
    //     continue
    }
};




