// File Connects

async function loadComponent(id, file) {

    const response = await fetch(file);

    const data = await response.text();

    const element = document.getElementById(id);

    if(element){
        element.innerHTML = data;
        initNavbar();
    }
}

loadComponent(
  "navbar",
  "/Sevoria-Restaurant-Project/components/navbar-and-file/navbar.html"
);

loadComponent(
  "reservation",
  "/Sevoria-Restaurant-Project/components/reservation-form/reservation.html"
);

loadComponent(
  "footer",
  "/Sevoria-Restaurant-Project/components/footer-and-links/footer.html"
);

// File Connects

// Mobile Navbar

function initNavbar(){

  const menuBtn = document.querySelector(".navbar-icon");
  const navMenu = document.querySelector(".nav-menu");

  if(menuBtn && navMenu){

    menuBtn.addEventListener("click", ()=>{

      navMenu.classList.toggle("active");

    });

    window.addEventListener("scroll", ()=>{

      navMenu.classList.remove("active");

    });

  }

}
// Mobile Navbar

// Ambiance Scroll

const scrollSection = document.querySelector(".ambiance-scroll");
const imageContainer = document.querySelector(".ambiance-image-container");

window.addEventListener("scroll", ()=>{

  const sectionTop = scrollSection.offsetTop;

  const scrollY = window.scrollY;

  const move = scrollY - sectionTop;

  imageContainer.style.transform = `translateX(${-move}px)`;

});

// Ambiance Scroll

// Image Rotate 

gsap.to(".rotate-img",{
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: "none"
});

// Image Rotate