const agregarAlCarritoButtons = document.querySelectorAll(".agregarAlCarrito");
agregarAlCarritoButtons.forEach(agregarAlCarritoBoton => {
    agregarAlCarritoBoton.addEventListener("click", clickParaAgregar);
})

const containerProductosCarrito = document.querySelector(".containerProductosCarrito");

                                                        /* FUNCION PARA AGREGAR AL CARRITO */

function clickParaAgregar(event){
    const boton = event.target;
    const item = boton.closest(".card");
    
    const nombreProductoCarrito = item.querySelector(".card-title").textContent;
    const precioProductoCarrito = item.querySelector(".precioProducto").textContent;
    const imagenProductoCarrito = item.querySelector(".imgProducto").src;

    agregarProductosAlCarrito(nombreProductoCarrito,precioProductoCarrito,imagenProductoCarrito);
}

function agregarProductosAlCarrito (nombreProductoCarrito,precioProductoCarrito,imagenProductoCarrito){
    const seccionCarrito = document.createElement('div');

    const productoEnCarrito = `
<div class="row productoEnCarrito">
    <div class="col-6">
        <div class="productoEnCarritoCss d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${imagenProductoCarrito} class="imagenProductoCarrito">
            <h6 class="tituloProductoCarritoCss tituloProductoCarritoJs text-truncate ml-3 mb-0">${nombreProductoCarrito}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="precioEnCarrito d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 precioEnCarritoJs width="20px" ">${precioProductoCarrito}</p>
        </div>
    </div>
    <div class="col-4">
        <div class="cantidadProdCarrito d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="cantidadProdCarritoJs" type="number" value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div> `;

seccionCarrito.innerHTML = productoEnCarrito;
containerProductosCarrito.append(seccionCarrito);

actualizacionPrecioCarrito();
}

                                                        /* ACTUALIZACION DE PRECIO EN CARRITO */

function actualizacionPrecioCarrito(){
    let total = 0;
    const totalCarrito = document.querySelector(".totalCarritoJs");
    
    const productosEnCarrito = document.querySelectorAll(".productoEnCarrito");
    
    productosEnCarrito.forEach((productoEnCarrito) => {
        const elementoCarritoPrecio = productoEnCarrito.querySelector(".precioEnCarritoJs");
        const carritoPrecio = Number(elementoCarritoPrecio.textContent.replace("$", ""));
        
        const cantidadProductoCarritoElement = productoEnCarrito.querySelector(".cantidadProdCarritoJs");
        const cantidadProductoCarrito = cantidadProductoCarritoElement.value;
        console.log(cantidadProductoCarrito);
    })
}
