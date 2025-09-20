//modo negro 
const toggle = document.getElementById("modo-toggle");

if (toggle) {
  if (localStorage.getItem("modo") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("modo", "dark");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("modo", "light");
      toggle.textContent = "🌙";
    }
  });
}


function agregarCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const index = carrito.findIndex(p => p.nombre === nombre);

  if (index >= 0) {
    carrito[index].cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarNotificacion(`${nombre} agregado al carrito`);
}

//notis
function mostrarNotificacion(mensaje) {
  const notif = document.createElement("div");
  notif.className = "notificacion";
  notif.textContent = mensaje;
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.classList.add("visible");
  }, 50);

  setTimeout(() => {
    notif.classList.remove("visible");
    setTimeout(() => notif.remove(), 300);
  }, 2000);
}
