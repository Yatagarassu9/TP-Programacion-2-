Serena - Tienda Online

Proyecto universitario realizado en 2025 por tres compañeros.
Serena es una tienda de ropa distinta, creada para ofrecer prendas originales y diferentes de lo convencional.

Este trabajo busca simular un e-commerce funcional utilizando las tecnologías vistas en clase (HTML5, CSS3 y JavaScript ES6), aplicando buenas prácticas de programación, diseño responsivo, validaciones en formularios y almacenamiento de datos en el navegador.

🎯 Objetivos del Proyecto

Desarrollar una tienda online de ropa con funcionalidades reales de un e-commerce.

Implementar un carrito de compras dinámico, capaz de agregar, modificar y eliminar productos.

Crear un formulario de contacto validado en tiempo real, con retroalimentación al usuario.

Incorporar modo oscuro/claro con persistencia en el navegador.

Asegurar un diseño atractivo, accesible y responsivo, adaptable a distintas pantallas.

Fomentar el trabajo en equipo, organizando las tareas de diseño, maquetado y programación.

📝 Descripción General

La aplicación simula una tienda en línea llamada Serena, enfocada en ofrecer ropa con estilo propio y diferente a lo convencional.

El sitio está compuesto por 4 páginas principales:

index.html → Página de inicio donde se muestran los productos disponibles con sus imágenes, nombre, precio y botón para agregarlos al carrito.

carrito.html → Vista del carrito de compras, donde el usuario puede ver sus productos, sumar/restar cantidades, eliminar ítems y calcular el total.

contacto.html → Formulario de contacto validado con varios campos (nombre, email, teléfono, fecha de nacimiento, motivo, mensaje, etc.) y envío simulado mediante Fetch API.

acerca.html → Página de presentación del proyecto, donde se cuenta la historia y la motivación de la tienda.

*Requisitos Implementados
 HTML5

Estructura semántica: uso de header, nav, main y footer en todas las páginas.

Codificación universal: uso de meta charset="UTF-8" para soportar caracteres especiales en español.

Favicon: icono de la tienda en la pestaña del navegador.

Formularios completos:

Inputs de diferentes tipos (text, email, tel, date, checkbox, radio, textarea, select).

Validaciones con atributos como required, pattern y placeholder.

Accesibilidad: todas las imágenes incluyen atributo alt.

Botones interactivos: asociados a funciones dinámicas de JavaScript.

 CSS3

Variables CSS: definidas en :root para manejar colores base (--bg, --text, --primary, --accent, --danger).

Modo oscuro/claro: aplicado mediante la clase dark y cambio dinámico de estilos.

Diseño responsivo: uso de grid, flexbox y @media queries para adaptar el diseño a distintas resoluciones (desktop, tablet y móvil).

Estilos avanzados:

Transiciones suaves con transition y transform.

Botones estilizados con bordes redondeados y efectos hover.

Sombra (box-shadow) en tarjetas de productos y formularios.

Carrito con ítems organizados en rectángulos, con miniaturas de imágenes, nombre, precio y botones de acción.

Formulario estilizado, con inputs que resaltan en :focus.

Unificación visual: el header y footer son iguales en todas las páginas, con enlaces de navegación y redes sociales.

 JavaScript (ES6)

Ejecución controlada: uso de addEventListener("DOMContentLoaded") para asegurar que la lógica se ejecute después de que cargue la página.

Carrito de compras:

Persistencia con localStorage.

Funciones para agregar productos, incrementar o decrementar cantidad y eliminar.

Renderizado dinámico de la lista de productos.

Cálculo automático del total usando reduce().

Notificaciones flotantes: al agregar un producto, aparece un mensaje animado en la pantalla.

Modo oscuro/claro:

Botón de alternancia con ícono 🌙/☀️ dinámico.

Guardado de la preferencia en localStorage para mantenerla al recargar.

Formulario de contacto:

Validación en tiempo real con checkValidity().

Mensajes de error personalizados debajo de cada campo.

Envío simulado con Fetch API hacia https://jsonplaceholder.typicode.com/posts.

Mensajes dinámicos de confirmación o error de red.

Estructura del Proyecto
.
├── index.html          Página principal
├── carrito.html         Carrito de compras
├── contacto.html        Formulario de contacto
├── acerca.html          Descripción e historia
├── css/
│   └── styles.css       Estilos globales
├── js/
│   ├── main.js          Modo oscuro + carrito básico + notificaciones
│   ├── carrito.js       Lógica del carrito
│   └── form.js          Validación y envío del formulario
└── assets/
    ├── images/          Imágenes de productos + favicon + redes
    └── RobotoFlex-VariableFont.ttf   Fuente

Funcionalidades Destacadas

Carrito persistente

El usuario puede cerrar la pestaña y al volver a abrir el carrito, sus productos seguirán allí gracias a localStorage.

Se actualizan cantidades, subtotales y total de forma automática.

Validación en tiempo real del formulario

El formulario indica al instante si los datos son inválidos.

Se asegura que todos los campos requeridos estén completos antes de enviar.

El envío muestra mensajes dinámicos (✅ éxito o ❌ error).

Modo oscuro/claro

El usuario puede alternar entre ambos modos.

Se recuerda la preferencia al recargar la página.

Diseño moderno y responsivo

Uso de tipografía clara y minimalista.

Grid de productos adaptable a pantallas grandes, medianas y móviles.

Footer con enlaces de navegación y redes sociales.

Integrantes del Grupo

Rafael Cruz 
Francisco Risso 
Facundo Romero

