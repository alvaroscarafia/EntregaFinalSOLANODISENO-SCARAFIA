const agregarAlCarritoButtons = document.querySelectorAll(".agregarAlCarrito");
agregarAlCarritoButtons.forEach(agregarAlCarritoBoton => {
    agregarAlCarritoBoton.addEventListener("click", clickParaAgregar);
})

const containerProductosCarrito = document.querySelector(".containerProductosCarrito");

function clickParaAgregar(event){
    const boton = event.target;
    const item = boton.closest(".card");
    
    const nombreProductoCarrito = item.querySelector(".card-title").textContent;
    const precioProductoCarrito = item.querySelector(".precioProducto").textContent;
    const imagenProductoCarrito = item.querySelector(".imgProducto").src

    agregarProductosAlCarrito(nombreProductoCarrito,precioProductoCarrito,imagenProductoCarrito);
}

function agregarProductosAlCarrito (nombreProductoCarrito,precioProductoCarrito,imagenProductoCarrito){
    const seccionCarrito = document.createElement('div');

    const productoEnCarrito = `<div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${imagenProductoCarrito} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${nombreProductoCarrito}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice width="20px" ">${precioProductoCarrito}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div> `;
seccionCarrito.innerHTML = productoEnCarrito;
containerProductosCarrito.append(seccionCarrito);
}