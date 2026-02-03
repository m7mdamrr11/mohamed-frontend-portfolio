document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const id = link.getAttribute("href");
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Smooth Scroll لجميع الروابط
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const id = link.getAttribute("href");
    if(id.length > 1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({
        behavior: "smooth"
      });

      // إغلاق الموبايل بعد الضغط على رابط
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".mobile-overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
  overlay.classList.toggle("active");
});

// إغلاق القائمة عند الضغط على Overlay
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  menuToggle.classList.remove("active");
  overlay.classList.remove("active");
});


// Animation on Scroll
const animateElements = document.querySelectorAll(".animate");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animateElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < triggerBottom){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // لتفعيل عند تحميل الصفحة

// Animation for multiple cards with delay
const cardElements = document.querySelectorAll(".card-animate");

function revealCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cardElements.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;

    if(top < triggerBottom){
      setTimeout(() => {
        el.classList.add("show");
      }, index * 150); // كل كارت يظهر بعد 150ms من الذي قبله
    }
  });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
