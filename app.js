const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  panels.forEach(
    (panel) => panel !== this && panel.classList.remove("open", "open-active")
  );

  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
