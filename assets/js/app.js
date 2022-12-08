// AOS
AOS.init({
  duration: 800,
});

// Shrink Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    // navbar.classList.remove("py-4");
    navbar.classList.replace("py-lg-4", "py-lg-2");
    navbar.classList.add("bg-black", "shadow");
  } else {
    // navbar.classList.add("py-4");
    navbar.classList.replace("py-lg-2", "py-lg-4");
    navbar.classList.remove("bg-black", "shadow");
  }
});
