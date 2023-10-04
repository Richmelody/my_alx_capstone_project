function toggleMenu() {
  // Your existing toggleMenu function code here
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Adjust the navigation height when scrolling
  const nav = document.getElementById("desktop-nav");
  if (window.scrollY > 0) {
    nav.style.height = "10vh"; // Adjust this value as needed
  } else {
    nav.style.height = "17vh"; // Original height
  }
}

// Scroll to top button function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Handle scroll to top button visibility
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Check if the screen width is greater than a certain threshold (e.g., 768px)
function isDesktop() {
  return window.innerWidth > 768; // You can adjust the threshold as needed
}

// Attach the scroll event listener conditionally for desktop screens
if (isDesktop()) {
  // window.addEventListener("scroll", toggleMenu);
  window.addEventListener("scroll", handleScrollToTopButton);
}

// Function to handle the mobile menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  // Adjust the navigation height when scrolling
  const nav = document.getElementById("desktop-nav");
  if (window.scrollY > 0) {
    nav.style.height = "10vh"; // Adjust this value as needed
  } else {
    nav.style.height = "17vh"; // Original height
  }
}

// Function to handle scroll to top button visibility
function handleScrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Rest of your code...

// Attach the scroll event listener conditionally for desktop screens
if (isDesktop()) {
  window.addEventListener("scroll", handleScrollToTopButton);
}
