function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
}

// Function to show/hide the button based on scroll position
function toggleScrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

// Attach a scroll event listener to show/hide the button
window.addEventListener("scroll", toggleScrollToTopButton);

// Call toggleScrollToTopButton initially to check scroll position
toggleScrollToTopButton();
