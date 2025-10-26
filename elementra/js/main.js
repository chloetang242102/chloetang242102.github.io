(function () {
  const openBtn =
    document.querySelector(".mobile-navbar-toggle") ||
    document.querySelector(".mobile-navbar span");
  const menu =
    document.querySelector(".mobile-navbar-expand") ||
    document.getElementById("mobile-nav");
  if (!openBtn || !menu) return;

  openBtn.addEventListener("click", function (e) {
    e && e.preventDefault && e.preventDefault();
    menu.classList.add("is-open");
    if (openBtn.setAttribute) openBtn.setAttribute("aria-expanded", "true");
    if (menu.setAttribute) menu.setAttribute("aria-hidden", "false");
  });

  const closeBtn = menu.querySelector(".close-button");
  if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      e && e.preventDefault && e.preventDefault();
      menu.classList.remove("is-open");
      if (openBtn.setAttribute) openBtn.setAttribute("aria-expanded", "false");
      if (menu.setAttribute) menu.setAttribute("aria-hidden", "true");
    });
  }
})();
