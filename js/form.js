document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto-form");
  const resultado = document.getElementById("resultado");

  const validarCampo = (input, mensaje) => {
    const error = input.nextElementSibling;
    if (!input.checkValidity()) {
      error.textContent = mensaje;
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  };

  form.nombre.addEventListener("input", () => validarCampo(form.nombre, "Nombre requerido"));
  form.email.addEventListener("input", () => validarCampo(form.email, "Email inválido"));
  form.telefono.addEventListener("input", () => validarCampo(form.telefono, "Teléfono inválido (10 dígitos)"));
  form.fecha.addEventListener("input", () => validarCampo(form.fecha, "Seleccione fecha"));
  form.motivo.addEventListener("input", () => validarCampo(form.motivo, "Seleccione motivo"));
  form.mensaje.addEventListener("input", () => validarCampo(form.mensaje, "El mensaje no puede estar vacío"));
  form.acepto.addEventListener("change", () => validarCampo(form.acepto, "Debe aceptar términos"));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      resultado.textContent = "Corrige los errores antes de enviar.";
      return;
    }

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          nombre: form.nombre.value,
          email: form.email.value,
          telefono: form.telefono.value,
          fecha: form.fecha.value,
          motivo: form.motivo.value,
          contacto: form.contacto.value,
          mensaje: form.mensaje.value
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      if (res.ok) {
        resultado.textContent = "Formulario enviado con éxito ✅";
        form.reset();
      } else {
        resultado.textContent = "Error al enviar ❌";
      }
    } catch (err) {
      resultado.textContent = "Error de red ❌";
    }
  });
});
