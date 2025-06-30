document.addEventListener("DOMContentLoaded", function () {
    // BOTÓN HACIA ARRIBA
    const scrollTopButton = document.getElementById("scroll-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
            scrollTopButton.style.opacity = "1";
        } else {
            scrollTopButton.style.opacity = "0";
            setTimeout(() => {
                scrollTopButton.style.display = "none";
            }, 300);
        }
    });

    if (scrollTopButton) {
        scrollTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const errorDiv = document.getElementById("error-mensaje");

  if (form) {
    form.addEventListener("submit", function (e) {
      const nombre = form.name.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.message.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let errores = [];

      if (nombre === "") errores.push("El campo nombre es obligatorio.");
      if (!emailRegex.test(email)) errores.push("El correo electrónico no es válido.");
      if (mensaje.length < 10) errores.push("El mensaje debe tener al menos 10 caracteres.");

      if (errores.length > 0) {
        e.preventDefault(); // Detiene el envío si hay errores
        errorDiv.innerHTML = errores.join("<br>");
      } else {
        errorDiv.innerHTML = ""; // Limpia si no hay errores
      }
    });
  }
});
