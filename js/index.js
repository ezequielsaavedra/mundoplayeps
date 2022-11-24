const juegos = document.getElementById("juegos");
const productosCards = document.getElementsByClassName("producto")
const buttonDisparos = document.getElementById("Disparos");
const buttonAventura = document.getElementById("Aventura");
const buttonAccion = document.getElementById("Accion");
const buttonDeportes = document.getElementById("Deportes");
const buttonPS4 = document.getElementById("PS4");
const buttonPS5 = document.getElementById("PS5");
const buttonPrecio1 = document.getElementById("precio1");
const buttonPrecio2 = document.getElementById("precio2");
const buttonPrecio3 = document.getElementById("precio3");
const buttonPrecio4 = document.getElementById("precio4");

let indexObjet = 0;

class Productos {
    constructor (nombre, precio, consola, categoria, categoriaDos, imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.consola = consola;
    this.categoria = categoria;
    this.categoriaDos = categoriaDos;   
    this.imagen = imagen;
    this.id = indexObjet++;
    }
};

const producto0 = new Productos ("Bloodborne", 5900, "PS4", "Accion", "Producto-destacado", "https://i.ibb.co/74RrfwB/bloodborne-ps4.jpg");
const producto1 = new Productos ("God of War: Ragnarok", 17700, "PS5", "Accion", "Producto-destacado","https://i.ibb.co/Ntjg681/god-of-war-ragnarok-ps5.jpg");
const producto2 = new Productos ("Horizon: Forbbiden West", 17700, "PS5", "Aventura", "Producto-destacado", "https://i.ibb.co/PrPGtym/horizon-forbidden-west-ps5.jpg");
const producto3 = new Productos ("Days Gone", 11800, "PS4", "Accion", "Producto-destacado", "https://i.ibb.co/4ZVfvhT/days-gone-ps4.jpg");
const producto4 = new Productos ("God of War", 5900, "PS4", "Accion", "Producto-destacado", "https://i.ibb.co/NVHjZPS/god-of-war-ps4.jpg");
const producto5 = new Productos ("Call of Duty: Modern Warfare", 17700, "PS4", "Disparos", "Producto-destacado", "https://i.ibb.co/dGHHbLX/cod-moder-warfare-ps4.jpg");
const producto6 = new Productos ("Spider-Man: Miles Morales", 14750, "PS5", "Accion", "Producto-destacado", "https://i.ibb.co/YRJHNsz/spiderman-miles-morales-ps5.jpg");
const producto7 = new Productos ("Elden Ring", 17700, "PS5", "Accion", "Producto-destacado", "https://i.ibb.co/1LqDB7J/elden-ring-ps5.jpg");
const producto8 = new Productos ("Demon's Souls", 20650, "PS5", "Accion", "Producto-destacado", "https://i.ibb.co/2yYzbhT/demons-souls-ps5.jpg");
const producto9 = new Productos ("The Last of Us Parte II", 11800, "PS4", "Aventura", "Producto-destacado", "https://i.ibb.co/QjvnbTL/tlou-2-ps4.jpg");
const producto10 = new Productos ("FIFA 23", 17700, "PS5", "Deportes", "Producto-destacado", "https://i.ibb.co/WW8YZdM/fifa-23-ps5.png");
const producto11 = new Productos ("Uncharted: Legado de Ladrones", 14750, "PS5", "Aventura", "Producto-destacado", "https://i.ibb.co/3TqMHkf/uncharted-coleccion-legado-ps5.jpg");

const arrayProductos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11];

arrayProductos.forEach (p => {
    juegos.innerHTML +=
    `
    <div class="card border-light mb-3 col-4 producto ${p.categoria} ${p.categoriaDos} " id="producto${p.id}">
    <img src= ${p.imagen} class="card-img-top" alt= ${p.nombre}, ${p.consola}> 
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
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="agregarCarritoProducto${p.id}">Si</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
        </div>
        </div>
    </div>
    </div>
    `
}
);

const productosDestacados = arrayProductos.filter((j) => j.categoriaDos);
const productosAccion = arrayProductos.filter((j) => j.categoria.includes("Accion"));
const productosAventura = arrayProductos.filter((j) => j.categoria.includes("Aventura"));
const productosDisparos = arrayProductos.filter((j) => j.categoria.includes("Disparos"));
const productosDeportes = arrayProductos.filter((j) => j.categoria.includes("Deportes"));

juegos.onload = productosDestacados.forEach (p => {
productosCards.innerHTML
}
)


