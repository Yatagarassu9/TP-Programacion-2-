document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");
  const vaciarBtn = document.getElementById("vaciar-carrito");

  vaciarBtn.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    renderCarrito();
  });

  function renderCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    lista.innerHTML = "";

    if (carrito.length === 0) {
      lista.innerHTML = "<li>El carrito está vacío</li>";
      total.textContent = "";
      return;
    }

    carrito.forEach((p, i) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="info">
          <span><strong>${p.nombre}</strong> - $${p.precio} x ${p.cantidad}</span>
          <div class="acciones">
            <button data-accion="sumar" data-index="${i}">+</button>
            <button data-accion="restar" data-index="${i}">-</button>
            <button data-accion="eliminar" data-index="${i}">Eliminar</button>
          </div>
        </div>
      `;
      lista.appendChild(li);
    });

    let suma = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    total.textContent = "Total: $" + suma;
  }

  lista.addEventListener("click", (e) => {
    if (!e.target.dataset.accion) return;
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const index = e.target.dataset.index;

    if (e.target.dataset.accion === "sumar") {
      carrito[index].cantidad++;
    } else if (e.target.dataset.accion === "restar") {
      carrito[index].cantidad--;
      if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
    } else if (e.target.dataset.accion === "eliminar") {
      carrito.splice(index, 1);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
  });

  renderCarrito();
});
