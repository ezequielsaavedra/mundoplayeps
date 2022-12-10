//login

const userNombre = document.getElementById("inputNombre");
const userApellido = document.getElementById("inputApellido");
const userEmail = document.getElementById("inputEmail");

const iniciarSesion = () => {
    if ((localStorage.getItem("user"))){
        const user = JSON.parse(localStorage.getItem("user"));
        userNombre.value = user.nombre
        userApellido.value = user.apellido
        userEmail.value = user.email
        $("#btnIngresar").click(function(){
        const user = {
            nombre: userNombre.value,
            apellido: userApellido.value,
            email: userEmail.value,
        }
    const userJSON = JSON.stringify(user)
    localStorage.setItem("user",userJSON)
        $(".login").hide();
        $(".hidden").show();
        $("#filtroConsola").hide();
        $(".Producto-estandar").hide();
    })
    } else {$("#btnIngresar").click(function(){
            const user = {
                nombre: userNombre.value,
                apellido: userApellido.value,
                email: userEmail.value,
            }
        const userJSON = JSON.stringify(user)
        localStorage.setItem("user",userJSON)   
            $(".login").hide();
            $(".hidden").show();
            $("#filtroConsola").hide();
            $(".Producto-estandar").hide();
    })}
}

iniciarSesion ();

// body

const juegos = document.getElementById("juegos");
const carritoOffcanvas = document.getElementById("carrito");
const totalCompra = document.getElementById("totalCompra");
const iva = document.getElementById("iva");
const precioFinal = document.getElementById("precioFinal");
const contador = document.getElementById("contador");
const formComprar = document.getElementById("formComprar");
const arrayProductos = [];

const obtenerProductos = async () => {
    const response = await fetch("./json/productos.json")
    const productos = await response.json()
    productos.forEach (p=> {
        arrayProductos.push(p)
    })
    return arrayProductos
}

const crearCards = () => {
    obtenerProductos().then(arrayProductos => {
        arrayProductos.forEach (p => {
            juegos.innerHTML +=
            `
            <div class="card border-light mb-3 col-4 producto ${p.categoria} ${p.categoriaDos} ${p.consola} ${p.className}" id="producto${p.id}">
            <img src= ${p.imagen} class="card-img-top" alt= ${p.nombre}, ${p.consola}> 
            <div class="card-body">
            <h5  class="card-title">${p.nombre}</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#agregarCarritoModal${p.id}">Comprar</button>
                <p class="card-text align-self-center pt-3">Precio: $${p.precio}</p>
                <p class="card-text align-self-center" id="cantidad${p.id}">Cantidad disponible: x${p.stock}</p>
            </div>
            </div>
            <div class="modal fade" id="agregarCarritoModal${p.id}" tabindex="-1" aria-labelledby="agregarCarritoModalLabel${p.id}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-body">
                    <p> Desea agregar ${p.nombre} al carrito?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick= "selecProd(arrayProductos[${p.id}],${p.id})">Si</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
                </div>
                </div>
            </div>
            </div>
            `
    })
    }
    );
}

crearCards();

const carrito = [];

const cambiarCantidad = (prod) => {
        document.getElementById(`cantidad${prod.id}`).innerText = `Cantidad disponible: x${prod.stock}`    
}

const selecProd = (prod, id) => {
    if (prod.stock >= 1) {
        prod.stock--
        cambiarCantidad (prod);
        if (carrito.find((prod) => prod.id === id)) {
            prod.cantidad++
        } else {
        carrito.push(prod)
        }
        calcularPrecio ();
        contadorCarrito ();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Lo siento!',
            text: "Ya no tenemos ese producto disponible."
        })
    }
}


const agregarCarrito = () => {
    $("#btnCarrito").click(function(){
        carritoOffcanvas.innerHTML = ""
        formComprar.innerHTML = ""
        actualizarCarrito()
        calcularPrecio()
    }
    )
}

const eliminarCarrito = (id) => {
        const productoEliminar = carrito.find((p) => p.id === id);
        productoEliminar.stock++
        cambiarCantidad (productoEliminar);
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
                    <button type="button" class="btn btn-danger position-absolute top-50 start-100 translate-middle me-5 btn-remove" onClick="eliminarCarrito(${p.id})">-</button>
                </div>
            </div>
        </div>
    </div>`
    }
    );
}

const calcularPrecio = () => {
    const precioSinIva = carrito.reduce((total, e) => total + e.precio*e.cantidad,0)
    const precioIva = precioSinIva*.21
    const precioMasIva = precioSinIva + precioIva
    totalCompra.innerText = `El monto es de: $${precioSinIva}`
    iva.innerText = `+ IVA: $${precioIva}`
    precioFinal.innerText = `Su total es de: $${precioMasIva}`
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

const vaciarCarrito = () => {
    if(carrito.length >= 1) {
        carrito.forEach (p=> {
            p.stock = p.stock + p.cantidad
            cambiarCantidad (p);
            p.cantidad = 1
        })
        carrito.splice (0, carrito.length)
            carritoOffcanvas.innerHTML = ""
        formComprar.innerHTML = ""
        actualizarCarrito ();
        calcularPrecio ();
        contadorCarrito ();
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
        carrito.forEach (p => {
            p.cantidad = 1
        })
        carrito.splice(0,carrito.length)
        calcularPrecio ();
        contadorCarrito ();
}   

agregarCarrito ();

finalizarCompra ();

//filtros

const agregarFiltrosCategorias = (btn, prod) => {
    $(btn).change(function(){
        $(".producto").hide();
        $(prod).toggle();
        $("#eliminarFiltros").show();
        $("#filtroConsola").show();
        $(".consolaButtons").prop("checked", false);
    }
    )
}

const agregarFiltrosConsolas = (btn, prod) => {
    $(btn).change(function(){
        $(".producto").hide();
        $(prod).toggle();
})
}

const eliminarFiltros = () => {
    $("#eliminarFiltros").click(function(){
        $(".producto").hide();
        $(".filtrosButton").prop("checked", false);
        $(".Producto-destacado").show();
        $("#eliminarFiltros").hide();
        $("#filtroConsola").hide();
    }
    )
}

eliminarFiltros ();

agregarFiltrosCategorias ("#Accion",".Accion");
agregarFiltrosCategorias ("#Aventura", ".Aventura");
agregarFiltrosCategorias ("#Disparos", ".Disparos");
agregarFiltrosCategorias ("#Deportes", ".Deportes");
agregarFiltrosConsolas ("#PS4", ".Accion-PS4");
agregarFiltrosConsolas ("#PS4", ".Aventura-PS4");
agregarFiltrosConsolas ("#PS4", ".Disparos-PS4");
agregarFiltrosConsolas ("#PS4", ".Deportes-PS4");
agregarFiltrosConsolas ("#PS5", ".Accion-PS5");
agregarFiltrosConsolas ("#PS5", ".Aventura-PS5");
agregarFiltrosConsolas ("#PS5", ".Disparos-PS5");
agregarFiltrosConsolas ("#PS5", ".Deportes-PS5");

//buscador

const inputBuscar = document.getElementById("inputBuscar");

const searchBar = () => {
    $("#buttonBuscar").click(function(){
        $(".producto").hide();
        $("#eliminarFiltros").show();
        const arrayBuscar = arrayProductos.filter((p)=> p.className.includes(`${inputBuscar.value.toLowerCase()}`))
        const mostrarBuscador = arrayBuscar.forEach(p=> {
            $(`.${p.className}`).show();
        })
    }
    )
}

$(".searchBar").keypress(function(e) {
    if (e.which == 13) {
        return false;
    }
    });

searchBar();