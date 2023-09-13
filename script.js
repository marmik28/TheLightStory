//Reload on top after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Smooth scrolling when clicking on navbar links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item a");

  for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }
});


//contact-form image slider



// contact form
// Get the necessary elements
const contactBtn = document.getElementById('contact-btn');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');

// Show the popup when the "Contact Us" button is clicked
contactBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

// Close the popup when clicking outside the popup
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

// Prevent the overlay from closing the popup when clicking inside the popup
popup.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Handle form submission (you can add your own logic here)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use JavaScript or send an AJAX request to handle the form data
    // After submission, you can close the popup if needed
    overlay.style.display = 'none';
    popup.style.display = 'none';
});


// Sending email

function sendMail(){
  (function(){
    emailjs.init("CXuTv60Is-Ndclm2g");
  })();

  var templateParams = {
    firstname: document.querySelector("#first-name").value,
    lastname: document.querySelector("#last-name").value,
    message: document.querySelector("#message").value,
    email: document.querySelector("#email").value,
  };

  var serviceID = "service_lile3tz";
  var templateID = "template_k4s36pf";

  emailjs.send(serviceID, templateID, templateParams)
  .then(function(response) {
    alert('SUCCESS!', response.status, response.text);
 }, function(error) {
    alert('FAILED...', error);
 });
} 

// contact footer

const footerCntc = document.getElementById('contact-me-btn');

// Show the popup when the "Contact Us" button is clicked
footerCntc.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

// contact navbar

const navCntc = document.getElementById('cntc-nav');

// Show the popup when the "Contact Us" button is clicked
navCntc.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});





