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

  }

}

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


// Image Rotate 

gsap.to(".rotate-img",{
  rotation: 360,
  duration: 10,
  repeat: -1,
  ease: "none"
});

// Image Rotate