let seguirComprando = true ,continuarCompra;

let indexObjet = 0;
class Productos {
    constructor (nombre, precio, consola, categoria, imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.consola = consola;
    this.categoria = categoria;
    this.imagen = imagen;
    this.id = indexObjet++;
    }
};

const producto1 = new Productos ("Bloodborne", 5900, "PS4", "Accion", "https://i.ibb.co/74RrfwB/bloodborne-ps4.jpg");
const producto2 = new Productos ("God of War: Ragnarok", 17700, "PS5", "Accion", "https://i.ibb.co/Ntjg681/god-of-war-ragnarok-ps5.jpg");
const producto3 = new Productos ("Horizon: Forbbiden West", 17700, "PS5", "Aventura", "https://i.ibb.co/PrPGtym/horizon-forbidden-west-ps5.jpg");
const producto4 = new Productos ("Days Gone", 11800, "PS4", "Accion", "https://i.ibb.co/4ZVfvhT/days-gone-ps4.jpg");
const producto5 = new Productos ("God of War", 5900, "PS4", "Accion", "https://i.ibb.co/NVHjZPS/god-of-war-ps4.jpg");
const producto6 = new Productos ("Call of Duty: Modern Warfare", 17700, "PS4", "Disparos", "https://i.ibb.co/dGHHbLX/cod-moder-warfare-ps4.jpg");
const producto7 = new Productos ("Spider-Man: Miles Morales", 14750, "PS5", "Accion", "https://i.ibb.co/YRJHNsz/spiderman-miles-morales-ps5.jpg");
const producto8 = new Productos ("Elden Ring", 17700, "PS5", "Accion", "https://i.ibb.co/1LqDB7J/elden-ring-ps5.jpg");
const producto9 = new Productos ("Demon's Souls", 20650, "PS5", "Accion", "https://i.ibb.co/2yYzbhT/demons-souls-ps5.jpg");
const producto10 = new Productos ("The Last of Us Parte II", 11800, "PS4", "Aventura", "https://i.ibb.co/QjvnbTL/tlou-2-ps4.jpg");
const producto11 = new Productos ("FIFA 23", 17700, "PS5", "Deportes", "https://i.ibb.co/WW8YZdM/fifa-23-ps5.png");
const producto12 = new Productos ("Uncharted: Legado de Ladrones", 14750, "PS5", "Aventura", "https://i.ibb.co/3TqMHkf/uncharted-coleccion-legado-ps5.jpg");

const arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12];
const carrito = [];

alert("Bienvenido a Mundo Play");

let compra = "Que item desea comprar?";

arrayProductos.forEach (p => {
    compra += `\n Ingrese: ${p.id} para comprar ${p.nombre} a $${p.precio}`
}
);

let eleccion = parseInt(prompt(compra));
let productosCarrito = "Usted va a comprar:"
let precioCarrito = 0

mostrarCarrito = () => {
    carrito.forEach (prod => {
        precioCarrito += prod.precio
        productosCarrito += `\n ${prod.nombre}`
    }
        )
};

while (seguirComprando === true) {
    if (eleccion === 0) {
        carrito.push(arrayProductos[0])
    } else if (eleccion === 1) {
        carrito.push(arrayProductos[1])
    } else if (eleccion === 2) {
        carrito.push(arrayProductos[2])
    } else if (eleccion === 3) {
        carrito.push(arrayProductos[3])
    } else if (eleccion === 4) {
        carrito.push(arrayProductos[4])
    } else if (eleccion === 5) {
        carrito.push(arrayProductos[5])
    } else if (eleccion === 6) {
        carrito.push(arrayProductos[6])
    } else if (eleccion === 7) {
        carrito.push(arrayProductos[7])
    } else if (eleccion === 8) {
        carrito.push(arrayProductos[8])
    } else if (eleccion === 9) {
        carrito.push(arrayProductos[9])
    } else if (eleccion === 10) {
        carrito.push(arrayProductos[10])
    } else if (eleccion === 11) {
        carrito.push(arrayProductos[11])
    } else {
    alert("Por favor, elija un producto de nuestro catalogo.")
    eleccion = parseInt(prompt(compra));
    continue
    }
    continuarCompra = parseInt(prompt("Quiere seguir comprando? \n1:Si o 2:No?"))
    if (continuarCompra === 1) {
        eleccion = parseInt(prompt(compra));
    } else { 
        mostrarCarrito ()
        alert(productosCarrito)
        alert(`Su total es de ${precioCarrito}`)
        alert("Muchas gracias por elegirnos!!")
        seguirComprando = false
    }
};

const juegos = document.getElementById ("juegos");

arrayProductos.forEach (p => {
    juegos.innerHTML +=
    `<div class="card border-light mb-3 col-4 producto">
    <img src= ${p.imagen} class="card-img-top" alt= ${p.nombre} + ${p.consola}> 
    <div class="card-body d-flex justify-content-around">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#agregarCarritoModal${p.id}">Comprar</button>
        <p class="card-text">$${p.precio}</p>
    </div>
    </div>
    <div class="modal fade" id="agregarCarritoModal${p.id}" tabindex="-1" aria-labelledby="agregarCarritoModalLabel${p.id}" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-body">
            <p> Desea agregar ${p.nombre} al carrito?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Si</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
        </div>
        </div>
    </div>
    </div>
    `
}
);





