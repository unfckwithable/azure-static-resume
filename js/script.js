// Declare API endpoint URL (leave blank for now)
const functionApi = ''; // (15:16) Will be updated later

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav li a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: "smooth"
        });
      }
      // Update active class
      navLinks.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
  
  // Page view counter using CountAPI
  fetch('https://api.countapi.xyz/hit/yourdomain.com/website-view')
    .then(response => response.json())
    .then(data => {
      const counterElement = document.getElementById('page-view-counter');
      if (counterElement) {
        counterElement.innerText = data.value;
      }
    })
    .catch(error => console.error('Error fetching page view counter:', error));
});
