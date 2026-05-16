// File Connects

async function loadComponent(id, file) {

    const response = await fetch(file);

    const data = await response.text();

    document.getElementById(id).innerHTML = data;
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




const scrollSection = document.querySelector(".ambiance-scroll");
const imageContainer = document.querySelector(".ambiance-image-container");

window.addEventListener("scroll", ()=>{

  const sectionTop = scrollSection.offsetTop;

  const scrollY = window.scrollY;

  const move = scrollY - sectionTop;

   imageContainer.style.transform =
  `translateX(${-move}px)`;

});
