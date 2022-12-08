// AOS
AOS.init({
  duration: 800,
});

// Shrink Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("py-3", "bg-base");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("py-3", "bg-base");
  }
});
