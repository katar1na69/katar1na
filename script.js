document.getElementById("year").textContent = new Date().getFullYear();

// Плавный переход к разделам для браузеров, в которых scroll-behavior не сработал.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
