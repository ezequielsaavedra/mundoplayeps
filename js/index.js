//login

const userNombre = document.getElementById("inputNombre");
const userApellido = document.getElementById("inputApellido");
const userEmail = document.getElementById("inputEmail");

$("#btnIngresar").click(function(){
    const user = {
        nombre: userNombre.value,
        apellido: userApellido.value,
        email: userEmail.value,
    }
    const userJSON = JSON.stringify(user)
    localStorage.setItem("user",userJSON)
    if (localStorage.getItem("user")) {
        $(".login").hide();
        $(".hidden").show();
        $(".Producto-estandar").hide();
    }
})

//productos

const juegos = document.getElementById("juegos");
const carritoOffcanvas = document.getElementById("carrito");
const totalCompra = document.getElementById("totalCompra");
const contador = document.getElementById("contador")
const formComprar = document.getElementById("formComprar")
let indexObjet = 0;

class Productos {
    constructor (nombre, precio, consola, categoria, categoriaDos, imagen, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.consola = consola;
    this.categoria = categoria;
    this.categoriaDos = categoriaDos;   
    this.imagen = imagen;
    this.cantidad = 1;
    this.id = indexObjet++;
    }
};

const producto0 = new Productos ("Bloodborne", 5900, "PS4", "Accion", "Producto-destacado", "https://i.ibb.co/74RrfwB/bloodborne-ps4.jpg");
const producto1 = new Productos ("God of War: Ragnarok - PS5", 17700, "PS5", "Accion", "Producto-destacado","https://i.ibb.co/Ntjg681/god-of-war-ragnarok-ps5.jpg");
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
const producto12 = new Productos ("The Last of Us", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/6nW5RmH/tlou-ps4.jpg");
const producto13 = new Productos ("GTA V", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/9ytfrKY/gtav-ps4.jpg");
const producto14 = new Productos ("Horizon Zero Dawn", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/wzFnsqs/horizon-zero-dawn-ps4.jpg");
const producto15 = new Productos ("Spider-Man", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/jbNdSz9/spiderman-ps4.jpg"); 
const producto16 = new Productos ("Uncharted 4", 5900, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/GPcQHCB/uncharted-4-ps4.jpg");
const producto17 = new Productos ("Ghost of Tsushima", 11800, "PS4", "Aventura", "Producto-estandar", "https://i.ibb.co/tm8wNks/got-ps4.jpg");
const producto18 = new Productos ("God of War: Ragnarok - PS4", 5900, "PS4", "Accion", "Producto-estandar", "https://i.ibb.co/SnZSzc4/god-of-war-ragnarok-ps4.jpg");
const producto19 = new Productos ("Battlefield 1", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/PmDyrZY/battlefield1.jpg");
const producto20 = new Productos ("Borderlands 3", 17700, "PS5", "Disparos", "Producto-estandar", "https://i.ibb.co/zPV3SYn/borderlands-3.jpg");
const producto21 = new Productos ("Call of Duty: Moder Warfare Remastered", 11800, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/ZS4G9VJ/callofdutymodernwarfare.png");
const producto22 = new Productos ("Deathloop", 14750, "PS5", "Disparos", "Producto-estandar", "https://i.ibb.co/YLNLnX0/deathloop-ps5.jpg");
const producto23 = new Productos ("FIFA 22", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/C5mSVB8/fifa-22.png");
const producto24 = new Productos ("Gran Turismo", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/gRXh2Q0/gran-turismo.jpg");
const producto25 = new Productos ("NBA 2K21", 14750, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/2NNVc6m/nba2k21.png");
const producto26 = new Productos ("NBA 2K23", 20650, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/FqdY2PB/nba2k23.jpg");
const producto27 = new Productos ("NHL20", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/4Yn23Ft/nhl-20.jpg");
const producto28 = new Productos ("Rainbow Six Extraction", 20650, "PS5", "Disparos", "Producto-estandar", "https://i.ibb.co/hFybr2T/rainbowsixextraction-1.png");
const producto29 = new Productos ("Rainbow Six Siege", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/Rcd6Z8h/rainbowsixsiege.jpg");
const producto30 = new Productos ("Sniper Elite 5", 5900, "PS4", "Disparos", "Producto-estandar", "https://i.ibb.co/nnGMk7J/sniper-elite-5.jpg");
const producto31 = new Productos ("Steep", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/Xbk6Hbt/steep.jpg");
const producto32 = new Productos ("AOTennis 2", 5900, "PS4", "Deportes", "Producto-estandar", "https://i.ibb.co/bX8pjGy/tennis-2.jpg");
const producto33 = new Productos ("The Show 21", 11800, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/XzBrQVL/theshow21.jpg");
const producto34 = new Productos ("W2C 10", 11800, "PS5", "Deportes", "Producto-estandar", "https://i.ibb.co/9grJGRq/w2c-10.jpg");

const arrayProductos = [producto0, 
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
];

arrayProductos.forEach (p => {
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
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id="agregarCarritoProducto${p.id}">Si</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
        </div>
        </div>
    </div>
    </div>
    `
}
);

//carrito

const carrito = [];

const selecProd = (btn, prod, id) => {
    $(btn).click(function(){
        if (carrito.find((prod) => prod.id === id)) {
            prod.cantidad++
        } else {
        carrito.push(prod)
        }
        calcularPrecio ();
        contadorCarrito ();
    }
    )
}

const agregarCarrito = () => {
    $("#btnCarrito").click(function(){
        carritoOffcanvas.innerHTML = ""
        formComprar.innerHTML = ""
        actualizarCarrito()
    }
    )
}

const eliminarCarrito = (id) => {
        const productoEliminar = carrito.find((p) => p.id === id);
        if (productoEliminar.cantidad > 1){
            productoEliminar.cantidad--
        } else {
            carrito.splice(carrito.indexOf(productoEliminar),1)
        }
        carritoOffcanvas.innerHTML = ""
        actualizarCarrito ();
        calcularPrecio ();
        contadorCarrito ();
}

const actualizarCarrito = () =>{
    carrito.forEach(p => {
        carritoOffcanvas.innerHTML += 
    `<div class="card border-light m-4">
        <div class="row g-0 ">
            <div class="col-md-4 ">
            <img src="${p.imagen}" class="img-fluid rounded-start" alt="${p.nombre}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text" id="cantidadProd">Cantidad: x${p.cantidad}</p>
                    <p class="card-text">Precio: $${p.precio}</p>
                    <button type="button" class="btn btn-danger position-absolute top-50 start-100 translate-middle me-5 btn-remove" onClick="eliminarCarrito(${p.id})" id="btnRemove${p.id}">-</button>
                </div>
            </div>
        </div>
    </div>`
    }
    );
}

const calcularPrecio = () => {
    const precioTotal = carrito.reduce((total, e) => total + e.precio*e.cantidad,0)
    totalCompra.innerText = `Su total es de: $${precioTotal}`  
}

const contadorCarrito = () => {
    contador.innerText = carrito.reduce((total, e) => total + e.cantidad,0)
}

const finalizarCompra = () => {
    if (carrito.length > 0) {
        $(".btn-remove").remove();
            formComprar.innerHTML = 
            `
            <form class="row g-3">
            <h5 class="card-title">Confirme sus datos</h5>
            <div class="col-md-6">
                <label for="Nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="Nombre" required>
            </div>
            <div class="col-md-6">
                <label for="inputApellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="Apellido" required>
            </div>
            <div class="col-12">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="Email" required>
            </div>
            <div class="col-12 d-flex justify-content-center g-5">
                <button type="button" class="btn btn-primary" id="confirmarCompra" onclick="aceptarCompra()">Comprar</button>
            </div>
            </form>
            `
            const user = JSON.parse(localStorage.getItem("user"));
            const nombreComprador = document.getElementById("Nombre");
            const apellidoComprado = document.getElementById("Apellido");
            const emailComprador = document.getElementById("Email")
            nombreComprador.value = user.nombre
            apellidoComprado.value = user.apellido
            emailComprador.value = user.email
    }
}

const aceptarCompra = () => {
    const comprador = JSON.parse(localStorage.getItem("user"));
    Swal.fire({
        icon: 'success',
        title: 'Compra realizada!',
        text: `Su compra se ha realizado con exito ${comprador.nombre}.
        En breves nos estaremos comunicando con usted para coordinar la entrega.
        Muchas gracias por elegirnos!!`
    })
    carritoOffcanvas.innerHTML = ""
        formComprar.innerHTML = ""
        carrito.splice(0,carrito.length)
        calcularPrecio ();
        contadorCarrito ();
}

selecProd ("#agregarCarritoProducto0",producto0, 0);
selecProd ("#agregarCarritoProducto1",producto1, 1);
selecProd ("#agregarCarritoProducto2",producto2, 2);
selecProd ("#agregarCarritoProducto3",producto3, 3);
selecProd ("#agregarCarritoProducto4",producto4, 4);
selecProd ("#agregarCarritoProducto5",producto5, 5);
selecProd ("#agregarCarritoProducto6",producto6, 6);
selecProd ("#agregarCarritoProducto7",producto7, 7);
selecProd ("#agregarCarritoProducto8",producto8, 8);
selecProd ("#agregarCarritoProducto9",producto9, 9);
selecProd ("#agregarCarritoProducto10",producto10, 10);
selecProd ("#agregarCarritoProducto11",producto11, 11);
selecProd ("#agregarCarritoProducto12",producto12, 12);
selecProd ("#agregarCarritoProducto13",producto13, 13);
selecProd ("#agregarCarritoProducto14",producto14, 14);
selecProd ("#agregarCarritoProducto15",producto15, 15);
selecProd ("#agregarCarritoProducto16",producto16, 16);
selecProd ("#agregarCarritoProducto17",producto17, 17);
selecProd ("#agregarCarritoProducto18",producto18, 18);
selecProd ("#agregarCarritoProducto19",producto19, 19);
selecProd ("#agregarCarritoProducto20",producto20, 20);
selecProd ("#agregarCarritoProducto21",producto21, 21);
selecProd ("#agregarCarritoProducto22",producto22, 22);
selecProd ("#agregarCarritoProducto23",producto23, 23);
selecProd ("#agregarCarritoProducto24",producto24, 24);
selecProd ("#agregarCarritoProducto25",producto25, 25);
selecProd ("#agregarCarritoProducto26",producto26, 26);
selecProd ("#agregarCarritoProducto27",producto27, 27);
selecProd ("#agregarCarritoProducto28",producto28, 28);
selecProd ("#agregarCarritoProducto29",producto29, 29);
selecProd ("#agregarCarritoProducto30",producto30, 30);
selecProd ("#agregarCarritoProducto31",producto31, 31);
selecProd ("#agregarCarritoProducto32",producto32, 32);
selecProd ("#agregarCarritoProducto33",producto33, 33);
selecProd ("#agregarCarritoProducto34",producto34, 34);


agregarCarrito ();

finalizarCompra ();

//filtros productos

const agregarFiltros = (btn, prod) => {
    $(btn).change(function(){
        $(".producto").hide();
        $(prod).toggle();
        $("#eliminarFiltros").show();
    }
    )
}

const eliminarFiltros = () => {
    $("#eliminarFiltros").click(function(){
        $(".producto").hide();
        $(".filtrosButton").prop("checked", false);
        $(".Producto-destacado").show();
        $("#eliminarFiltros").hide();
    }
    )
}

eliminarFiltros ();

agregarFiltros ("#Accion",".Accion");
agregarFiltros ("#Aventura", ".Aventura");
agregarFiltros ("#Disparos", ".Disparos");
agregarFiltros ("#Deportes", ".Deportes");
agregarFiltros ("#PS4",".PS4");
agregarFiltros ("#PS5",".PS5");