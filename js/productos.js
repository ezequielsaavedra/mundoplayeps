const juegos = document.getElementById("juegos");

// class Productos {
//     constructor (id, nombre, precio, consola, categoria, categoriaDos, imagen, cantidad, stock){
//     this.id = id
//     this.nombre = nombre;
//     this.precio = precio;
//     this.consola = consola;
//     this.categoria = categoria;
//     this.categoriaDos = categoriaDos;   
//     this.imagen = imagen;
//     this.cantidad = cantidad;
//     this.stock = stock
//     }
// };

const arrayProductos = []


const obtenerProductos = async () => {
    const response = await fetch("./json/productos.json")
    const productos = await response.json()
    return productos
}

obtenerProductos().then(productos => {
    const [ producto0, 
        producto1,
        producto2,
        producto3, 
        producto4, 
        producto5, 
        producto6, 
        producto7, 
        producto8, 
        producto9, 
        producto10, 
        producto11, 
        producto12,
        producto13,
        producto14,
        producto15,
        producto16,
        producto17,
        producto18,
        producto19,
        producto20,
        producto21,
        producto22,
        producto23,
        producto24,
        producto25,
        producto26,
        producto27,
        producto28,
        producto29,
        producto30,
        producto31,
        producto32,
        producto33,
        producto34
    ] = productos
    arrayProductos.push(
        producto0, 
        producto1,
        producto2,
        producto3, 
        producto4, 
        producto5, 
        producto6, 
        producto7, 
        producto8, 
        producto9, 
        producto10, 
        producto11, 
        producto12,
        producto13,
        producto14,
        producto15,
        producto16,
        producto17,
        producto18,
        producto19,
        producto20,
        producto21,
        producto22,
        producto23,
        producto24,
        producto25,
        producto26,
        producto27,
        producto28,
        producto29,
        producto30,
        producto31,
        producto32,
        producto33,
        producto34)
})


obtenerProductos().then(arrayProductos => {
    arrayProductos.forEach ((p) => {
        juegos.innerHTML +=
        `
        <div class="card border-light mb-3 col-4 producto ${p.categoria} ${p.categoriaDos} ${p.consola}" id="producto${p.id}">
        <img src= ${p.imagen} class="card-img-top" alt= ${p.nombre}, ${p.consola}> 
        <div class="card-body d-flex justify-content-around">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#agregarCarritoModal${p.id}">Comprar</button>
            <p class="card-text align-self-center">$${p.precio}</p>
        </div>
        </div>
        <div class="modal fade" id="agregarCarritoModal${p.id}" tabindex="-1" aria-labelledby="agregarCarritoModalLabel${p.id}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-body">
                <p> Desea agregar ${p.nombre} al carrito?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick= "selecProd(producto${p.id},${p.id})" id="agregarCarritoProducto${p.id}">Si</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
            </div>
            </div>
        </div>
        </div>
        `
})
}
)

// const producto0 = new Productos ("Bloodborne", 5900, "PS4", "Accion", "Producto-destacado", "https://i.ibb.co/74RrfwB/bloodborne-ps4.jpg");
// const producto1 = new Productos ("God of War: Ragnarok - PS5", 17700, "PS5", "Accion", "Producto-destacado","https://i.ibb.co/Ntjg681/god-of-war-ragnarok-ps5.jpg");
// const producto2 = new Productos ("Horizon: Forbbiden West", 17700, "PS5", "Aventura", "Producto-destacado", "https://i.ibb.co/PrPGtym/horizon-forbidden-west-ps5.jpg");
// const producto3 = new Productos ("Days Gone", 11800, "PS4", "Accion", "Producto-destacado", "https://i.ibb.co/4ZVfvhT/days-gone-ps4.jpg");
// const producto4 = new Productos ("God of War", 5900, "PS4", "Accion", "Producto-destacado", "https://i.ibb.co/NVHjZPS/god-of-war-ps4.jpg");
// const producto5 = new Productos ("Call of Duty: Modern Warfare", 17700, "PS4", "Disparos", "Producto-destacado", "https://i.ibb.co/dGHHbLX/cod-moder-warfare-ps4.jpg");
// const producto6 = new Productos ("Spider-Man: Miles Morales", 14750, "PS5", "Accion", "Producto-destacado", "https://i.ibb.co/YRJHNsz/spiderman-miles-morales-ps5.jpg");
// const producto7 = new Productos ("Elden Ring", 17700, "PS5", "Accion", "Producto-destacado", "https://i.ibb.co/1LqDB7J/elden-ring-ps5.jpg");
// const producto8 = new Productos ("Demon's Souls", 20650, "PS5", "Accion", "Producto-destacado", "https://i.ibb.co/2yYzbhT/demons-souls-ps5.jpg");
// const producto9 = new Productos ("The Last of Us Parte II", 11800, "PS4", "Aventura", "Producto-destacado", "https://i.ibb.co/QjvnbTL/tlou-2-ps4.jpg");
// const producto10 = new Productos ("FIFA 23", 17700, "PS5", "Deportes", "Producto-destacado", "https://i.ibb.co/WW8YZdM/fifa-23-ps5.png");
// const producto11 = new Productos ("Uncharted: Legado de Ladrones", 14750, "PS5", "Aventura", "Producto-destacado", "https://i.ibb.co/3TqMHkf/uncharted-coleccion-legado-ps5.jpg");
// const producto12 = new Productos ("The Last of Us", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/6nW5RmH/tlou-ps4.jpg");
// const producto13 = new Productos ("GTA V", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/9ytfrKY/gtav-ps4.jpg");
// const producto14 = new Productos ("Horizon Zero Dawn", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/wzFnsqs/horizon-zero-dawn-ps4.jpg");
// const producto15 = new Productos ("Spider-Man", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/jbNdSz9/spiderman-ps4.jpg"); 
// const producto16 = new Productos ("Uncharted 4", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/GPcQHCB/uncharted-4-ps4.jpg");
// const producto17 = new Productos ("Ghost of Tsushima", 11800, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/tm8wNks/got-ps4.jpg");
// const producto18 = new Productos ("God of War: Ragnarok - PS4", 5900, "PS4", "Accion", "Producto-estandar", "https://i.ibb.co/SnZSzc4/god-of-war-ragnarok-ps4.jpg");
// const producto19 = new Productos ("Battlefield 1", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/PmDyrZY/battlefield1.jpg");
// const producto20 = new Productos ("Borderlands 3", 17700, "PS5", "Disparos", "Producto-estandar", "https://i.ibb.co/zPV3SYn/borderlands-3.jpg");
// const producto21 = new Productos ("Call of Duty: Moder Warfare Remastered", 11800, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/ZS4G9VJ/callofdutymodernwarfare.png");
// const producto22 = new Productos ("Deathloop", 14750, "PS5", "Disparos", "Producto-estandar", "https://i.ibb.co/YLNLnX0/deathloop-ps5.jpg");
// const producto23 = new Productos ("FIFA 22", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/C5mSVB8/fifa-22.png");
// const producto24 = new Productos ("Gran Turismo", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/gRXh2Q0/gran-turismo.jpg");
// const producto25 = new Productos ("NBA 2K21", 14750, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/2NNVc6m/nba2k21.png");
// const producto26 = new Productos ("NBA 2K23", 20650, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/FqdY2PB/nba2k23.jpg");
// const producto27 = new Productos ("NHL20", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/4Yn23Ft/nhl-20.jpg");
// const producto28 = new Productos ("Rainbow Six Extraction", 20650, "PS5", "Disparos", "Producto-estandar", "https://i.ibb.co/hFybr2T/rainbowsixextraction-1.png");
// const producto29 = new Productos ("Rainbow Six Siege", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/Rcd6Z8h/rainbowsixsiege.jpg");
// const producto30 = new Productos ("Sniper Elite 5", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/nnGMk7J/sniper-elite-5.jpg");
// const producto31 = new Productos ("Steep", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/Xbk6Hbt/steep.jpg");
// const producto32 = new Productos ("AOTennis 2", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/bX8pjGy/tennis-2.jpg");
// const producto33 = new Productos ("The Show 21", 11800, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/XzBrQVL/theshow21.jpg");
// const producto34 = new Productos ("W2C 10", 11800, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/9grJGRq/w2c-10.jpg");