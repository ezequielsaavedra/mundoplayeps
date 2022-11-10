let indexObjet = 0
class Productos {
    constructor (nombre, precioUSD, consola, categoria, imagen){
    this.nombre = nombre;
    this.precioUSD = precioUSD;
    this.consola = consola;
    this.categoria = categoria;
    this.imagen = imagen;
    this.id = indexObjet++;
    }
    aPeso () {
        this.precioPesos = this.precioUSD * 167 * 1.75 ;
        return  (this.precioPesos);
    }
    masIVA () {
        this.precioPesosMasIVA = this.precioPesos * 1.21;
        return (this.precioPesosMasIVA);
    }
}

const arrayProductos = []

const producto1 = new Productos ("Bloodborne", 20, "PS4", "Accion", "https://i.ibb.co/74RrfwB/bloodborne-ps4.jpg");
const producto2 = new Productos ("God of War: Ragnarok", 60, "PS5", "Accion", "https://i.ibb.co/Ntjg681/god-of-war-ragnarok-ps5.jpg");
const producto3 = new Productos ("Horizon: Forbbiden West", 60, "PS5", "Aventura", "https://i.ibb.co/PrPGtym/horizon-forbidden-west-ps5.jpg");
const producto4 = new Productos ("Days Gone", 40, "PS4", "Accion", "https://i.ibb.co/4ZVfvhT/days-gone-ps4.jpg");
const producto5 = new Productos ("God of War", 20 , "PS4", "Accion", "https://i.ibb.co/NVHjZPS/god-of-war-ps4.jpg");
const producto6 = new Productos ("Call of Duty: Modern Warfare", 60, "PS4", "Disparos", "https://i.ibb.co/dGHHbLX/cod-moder-warfare-ps4.jpg");
const producto7 = new Productos ("Spider-Man: Miles Morales", 50, "PS5", "Accion", "https://i.ibb.co/YRJHNsz/spiderman-miles-morales-ps5.jpg");
const producto8 = new Productos ("Elden Ring", 60, "PS5", "Accion", "https://i.ibb.co/1LqDB7J/elden-ring-ps5.jpg");
const producto9 = new Productos ("Demon's Souls", 70, "PS5", "Accion", "https://i.ibb.co/2yYzbhT/demons-souls-ps5.jpg");
const producto10 = new Productos ("The Last of Us Parte II", 40, "PS4", "Aventura", "https://i.ibb.co/QjvnbTL/tlou-2-ps4.jpg");
const producto11 = new Productos ("FIFA 23", 60, "PS5", "Deportes", "https://i.ibb.co/WW8YZdM/fifa-23-ps5.png");
const producto12 = new Productos ("Uncharted: Coleccion Legado de Ladrones", 50, "PS5", "Aventura", "https://i.ibb.co/3TqMHkf/uncharted-coleccion-legado-ps5.jpg");

console.log (producto1);
console.log (indexObjet);

arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);
arrayProductos.push(producto4);
arrayProductos.push(producto5);
arrayProductos.push(producto6);
arrayProductos.push(producto7);
arrayProductos.push(producto8);
arrayProductos.push(producto9);
arrayProductos.push(producto10);
arrayProductos.push(producto11);
arrayProductos.push(producto12);

console.log (arrayProductos);

producto1.aPeso();
producto1.masIVA();
console.log (producto1.precioPesos);
console.log (Math.round(producto1.precioPesosMasIVA));

const games = document.getElementById ("games");

console.log (games);

arrayProductos.forEach(p => {
    games.innerHTML +=
`<div class="card border-light mb-3 col-4 producto">
<img src= ${p.imagen} class="card-img-top" alt= ${p.nombre} + ${p.consola}> 
<div class="card-body d-flex justify-content-around">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#agregarCarritoModal${p.id}">Comprar</button>
    <p class="card-text">${p.precioUSD} U$D</p>
</div>
</div>
<div class="modal fade" id="agregarCarritoModal${p.id}" tabindex="-1" aria-labelledby="agregarCarritoModalLabel${p.id}" aria-hidden="true">
<div class="modal-dialog">
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
});





//let compra = parseInt(prompt("Que item desea comprar? \n1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty"));
//let carrito = 0 ,seguirComprando = true ,continuarCompra;

// agregarCarrito = (total, producto) => {
//     resultado = total + producto
//     return resultado
// };

// while (seguirComprando === true) {
//     if (compra === 1) {
//         carrito = agregarCarrito (carrito, 15)
//     } else if (compra === 2) {
//         carrito = agregarCarrito (carrito, 60)
//     } else if (compra === 3) {
//         carrito = agregarCarrito (carrito, 45)
//     } else if (compra === 4) {
//         carrito = agregarCarrito (carrito, 9)
//     } else if (compra === 5) {
//         carrito = agregarCarrito (carrito, 30)
//     } else {
//         compra = parseInt(prompt("Por favor, elija un producto de nuestro catalogo: \n1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty"))
//         continue
//     };
//     continuarCompra = parseInt(prompt("Quiere seguir comprando? \n1:Si o 2:No?"))
//     if (continuarCompra === 1) {
//         compra = parseInt(prompt("Que item desea comprar? \n1:Bloodborne 2:God of War 3:Horizon 4:Days Gone 5:Call of Duty")) 
//     } else { 
//         alert ("El total de su compra es " + carrito + " U$D. \nGracias por comprar con nostros!!")
//         seguirComprando = false
//     };
// };



