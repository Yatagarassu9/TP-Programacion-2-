Serena - Tienda Online

Proyecto universitario realizado en 2025 por tres compañeros.  
*Serena* es una tienda de ropa distinta, creada para ofrecer prendas originales y diferentes de lo convencional.  
Este proyecto combina HTML, CSS y JavaScript con buenas prácticas y conceptos aprendidos en clase.

---

Descripción General:
El proyecto simula un e-commerce de ropa con carrito de compras, formulario de contacto, modo oscuro/claro y página de presentación.  
Incluye 4 páginas principales:

1. `index.html`  Página de inicio con los productos disponibles.  
2. `carrito.html`  Página que muestra el carrito de compras.  
3. `contacto.html`  Formulario de contacto con validaciones.  
4. `acerca.html`  Página con la historia y descripción del proyecto.  

---

Tecnologías Usadas:

 HTML5
- Estructura semántica con etiquetas (`header`, `nav`, `main`, `footer`).
- Uso de `meta charset="UTF-8"` para soportar caracteres especiales.
- Inclusión de favicon (`link rel="icon"`).
- Formularios (`form`, `input`, `select`, `fieldset`, `legend`) con validaciones (`required`, `pattern`).
- Imágenes de productos (`<img>`) con atributos `alt` para accesibilidad.
- Botones con funciones integradas mediante `onclick`.

 CSS3
- Fuente local y via conexion por google fonts por si la pagina no esta disponible.
- Uso de variables CSS con `:root` para colores (`--bg`, `--text`, `--primary`, `--accent`).
- Implementación de modo oscuro/claro con clases dinámicas.
- Diseño responsivo con `grid` y media queries (`@media`).
- Estilos avanzados:
  - `transition`, `transform`, `hover` para animaciones suaves.
  - Botones estilizados con bordes redondeados.
  - Sombra (`box-shadow`) en tarjetas y formulario.
  - Estilización del carrito con ítems en rectángulos e imágenes pequeñas a la izquierda.
  - Formulario con inputs estilizados y resaltados al hacer focus.
- Footer y header uniformes en todas las páginas.

 JavaScript (ES6)
- Uso de `addEventListener("DOMContentLoaded")` para iniciar la lógica cuando carga la página.
- Carrito de compras:
  - Guardado en LocalStorage (`localStorage.setItem`, `getItem`, `removeItem`).
  - Funciones para agregar productos, incrementar/decrementar cantidad y eliminar.
  - Render dinámico de la lista de productos con botones (+, -, eliminar).
  - Cálculo automático del total con `reduce()`.
- Notificaciones flotantes al agregar productos al carrito.
- Modo oscuro/claro:
  - Cambio de clase `dark` en `body`.
  - Ícono dinámico 🌙/☀️ en el botón.
  - Persistencia del modo en `localStorage`.
- Formulario de contacto:
  - Validación en tiempo real con `checkValidity()`.
  - Mensajes de error personalizados debajo de cada campo.
  - Envío simulado usando *Fetch API* hacia `https://jsonplaceholder.typicode.com/posts`.
  - Mensajes dinámicos de éxito o error.

---

Estructura del Proyecto
.
├── index.html Página principal (productos)
├── carrito.html Carrito de compras
├── contacto.html Formulario de contacto
├── acerca.html Descripción e historia
├── css/
│ └── styles.css Estilos globales
├── js/
│ ├── main.js Modo oscuro + carrito básico + notificaciones
│ ├── carrito.js Lógica de renderizado y control del carrito
│ └── form.js Validación y envío del formulario
└── assets/
└── images/
├── favicon.ico
├── remera.webp
├── zapas.webp
├── buzo.jpg
├── pantalones.jpg
└── readme.txt


Integrantes del Grupo : Rafael Cruz, Francisco Risso, Facundo Romero.