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

// body

const juegos = document.getElementById("juegos");
const carritoOffcanvas = document.getElementById("carrito");
const totalCompra = document.getElementById("totalCompra");
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
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick= "selecProd(arrayProductos[${p.id}],${p.id})" id="agregarCarritoProducto${p.id}">Si</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
            </div>
            </div>
        </div>
        </div>
        `
})
}
);

const carrito = [];

const selecProd = (prod, id) => {
    if (prod.stock >= 1) {
        prod.stock--
        if (carrito.find((prod) => prod.id === id)) {
            prod.cantidad++
        } else {
        carrito.push(prod)
        }
        calcularPrecio ();
        contadorCarrito ();
        console.log(carrito)
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
                    <button type="button" class="btn btn-danger position-absolute top-50 start-100 translate-middle me-5 btn-remove" onClick="eliminarCarrito(${p.id})">-</button>
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