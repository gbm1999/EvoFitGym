function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

const emailJsScript = document.createElement('script');
emailJsScript.src = 'https://cdn.emailjs.com/dist/email.min.js';
emailJsScript.async = true;
emailJsScript.onload = function () {
    emailjs.init("_B2lPRkB3Bae4q9Ax");
    // Resto de tu código que utiliza emailjs
};
document.head.appendChild(emailJsScript);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function sendEmail() {
      const form = document.getElementById("contactForm");

      emailjs.sendForm("service_bdpu8dy", "template_5bc3hz5", form)
          .then(response => {
              console.log("Correo enviado con éxito", response);
              openModal();
              // Puedes agregar aquí acciones adicionales después de enviar el correo
          })
          .catch(error => {
              console.error("Error al enviar el correo", error);
              // Puedes agregar aquí acciones adicionales en caso de error
          });
  }

  function openModal() {
document.getElementById("myModal").style.display = "block";
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
}
function goToPage(event) {
  const hrefUrl = event.target.getAttribute('href');
  window.history.pushState({}, window.title, hrefUrl) // Update URL as well as browser history.
}

// Enable client-side routing for all links on the page
document.querySelectorAll('a').forEach(link => link.addEventListener('click', goToPage));
