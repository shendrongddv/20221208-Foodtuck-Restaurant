const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("py-2", "bg-base");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("py-2", "bg-base");
  }
});
