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


//read more for about us
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const readMoreButton = document.querySelector(".read-more-button");
  const moreText = document.querySelector(".more-text");

  let isExpanded = false;

  readMoreButton.addEventListener("click", function () {
    if (isExpanded) {
      moreText.style.display = "none";
      readMoreButton.textContent = "Read more";
    } else {
      moreText.style.display = "inline";
      readMoreButton.textContent = "Read less";
    }

    isExpanded = !isExpanded;
  });
});







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


// Update the file name

document.getElementById("attachment").addEventListener("change", function() {
  const fileInput = document.getElementById("attachment");
  const fileNameSpan = document.getElementById("file-name");

  if (fileInput.files.length > 0) {
    // Create or get the existing unordered list element to display file names
    let fileList = fileNameSpan.querySelector("ul");
    if (!fileList) {
      fileList = document.createElement("ul");
    }

    // Iterate through each selected file and create list items
    for (let i = 0; i < fileInput.files.length; i++) {
      const file = fileInput.files[i];
      const listItem = document.createElement("li");
      listItem.textContent = file.name;
      fileList.appendChild(listItem);
    }

    // Append the list to the "file-name" span element
    fileNameSpan.appendChild(fileList);
  }
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


// Create your own package

document.addEventListener("DOMContentLoaded", function () {
  const packageList = document.getElementById("package-list");
  const totalPrice = document.getElementById("total-price");
  const buyButton = document.getElementById("buy-button");

  packageList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("increment")) {
      incrementQuantity(target);
    } else if (target.classList.contains("decrement")) {
      decrementQuantity(target);
    }

    updateTotal(); // Update the total after incrementing or decrementing
  });

  function incrementQuantity(button) {
    const input = button.parentElement.querySelector("input");
    const currentValue = parseFloat(input.value);
    const maxValue = parseFloat(input.getAttribute("max"));

    if (currentValue < maxValue) {
      input.value = (currentValue + 1).toString();
    }
  }

  function decrementQuantity(button) {
    const input = button.parentElement.querySelector("input");
    const currentValue = parseFloat(input.value);
    const minValue = parseFloat(input.getAttribute("min"));

    if (currentValue > minValue) {
      input.value = (currentValue - 1).toString();
    }
  }

  function updateTotal() {
    let total = 0;
    const packageItems = packageList.querySelectorAll("li");
    packageItems.forEach((item) => {
      const price = parseFloat(
        item.textContent.match(/\d+/)[0]
      ); // Extract price from the text content
      const quantity = parseFloat(item.querySelector("input").value);
      total += price * quantity;
    });
    totalPrice.textContent = total.toFixed(2) + "$";
  }

  buyButton.addEventListener("click", () => {
    alert("Thank you for your purchase!");
  });

  updateTotal(); // Initialize the total when the page loads
});






