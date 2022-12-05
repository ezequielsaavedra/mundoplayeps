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

//carrito

const carritoOffcanvas = document.getElementById("carrito");
const totalCompra = document.getElementById("totalCompra");
const contador = document.getElementById("contador")
const formComprar = document.getElementById("formComprar")
const carrito = [];

const selecProd = (prod, id) => {
    // $(btn).click(function(){
        if (carrito.find((prod) => prod.id === id)) {
            prod.cantidad++
        } else {
        carrito.push(prod)
        }
        calcularPrecio ();
        contadorCarrito ();
    // }
    // )
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