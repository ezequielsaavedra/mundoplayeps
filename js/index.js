alert("Bienvenido a Mundo Play");

let compra = parseInt(prompt("Que item desea comprar? \n1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty"));

let carrito = 0 ,seguirComprando = true ,continuarCompra;

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
        compra = parseInt(prompt("Por favor, elija un producto de nuestro catalogo: \n1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty"))
        continue
    };
    continuarCompra = parseInt(prompt("Quiere seguir comprando? \n1:Si o 2:No?"))
    if (continuarCompra === 1) {
        compra = parseInt(prompt("Que item desea comprar? \n1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty")) 
    } else { 
        alert ("El total de su compra es " + carrito + " U$D. \nGracias por comprar con nostros!!")
        seguirComprando = false
    };
};




