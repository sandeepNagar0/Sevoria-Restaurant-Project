// File Conects

async function loadComponent(id, file) {

    const response = await fetch(file);

    const data = await response.text();

    document.getElementById(id).innerHTML = data;
}

loadComponent("navbar", "../../components/navbar-and-file/navbar.html");

loadComponent("reservation", "../../components/reservation-form/reservation.html");

loadComponent("footer", "../../components/footer-and-links/footer.html");

// File Conects




const scrollSection = document.querySelector(".ambiance-scroll");
const imageContainer = document.querySelector(".ambiance-image-container");

window.addEventListener("scroll", ()=>{

  const sectionTop = scrollSection.offsetTop;

  const scrollY = window.scrollY;

  const move = scrollY - sectionTop;

   imageContainer.style.transform =
  `translateX(${-move}px)`;

});
