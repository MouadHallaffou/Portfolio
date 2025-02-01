// Script pour le menu hamburger
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a"); // Sélectionne tous les liens du menu

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fermer le menu lorsque l'utilisateur clique sur un lien
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

let currentPage = 0;
const pages = document.querySelectorAll(".project-page");

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === pageIndex);
  });
}

function changePage(direction) {
  currentPage += direction;
  if (currentPage < 0) {
    currentPage = pages.length - 1;
  } else if (currentPage >= pages.length) {
    currentPage = 0;
  }
  showPage(currentPage);
}

// Afficher la première page au chargement
showPage(currentPage);
