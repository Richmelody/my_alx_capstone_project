function toggleMenu() {
  // Your existing toggleMenu function code here
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  // Listen for the "scroll" event on the window
window.addEventListener("scroll", function () {
  // Get a reference to your navigation element by its ID
  const nav = document.getElementById("desktop-nav");

  // Check the scroll position and adjust the height accordingly
  if (window.scrollY > 50) {
    nav.style.height = "10vh"; // Adjust this value as needed
  } else {
    nav.style.height = "17vh"; // Original height
  }
});


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
  if (window.scrollY > 650) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// // Check if the screen width is greater than a certain threshold (e.g., 768px)
// function isDesktop() {
//   return window.innerWidth > 768; // You can adjust the threshold as needed
// }

// Attach the scroll event listener conditionally for desktop screens
// if (isDesktop()) {
//   // window.addEventListener("scroll", toggleMenu);
//   window.addEventListener("scroll", handleScrollToTopButton);
// }

// // Function to handle the mobile menu toggle
// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
//   // Adjust the navigation height when scrolling
//   const nav = document.getElementById("desktop-nav");
//   if (window.scrollY > 0) {
//     nav.style.height = "10vh"; // Adjust this value as needed
//   } else {
//     nav.style.height = "17vh"; // Original height
//   }
// }

// // Function to handle scroll to top button visibility
// function handleScrollToTopButton() {
//   const scrollToTopBtn = document.getElementById("scrollToTopBtn");
//   if (window.scrollY > 100) {
//     scrollToTopBtn.style.display = "block";
//   } else {
//     scrollToTopBtn.style.display = "none";
//   }
// }

// // Function to scroll to the top of the page
// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// // // Rest of your code...

// // // Attach the scroll event listener conditionally for desktop screens
// // if (isDesktop()) {
// //   window.addEventListener("scroll", handleScrollToTopButton);
// // }


const logoLink = document.getElementById(".logo-link");
let initialScrollPosition = 0;

// Store the initial scroll position when the page loads
window.addEventListener("load", function () {
  initialScrollPosition = window.scrollY;
});

// Add a click event listener to the logo link
logoLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // Scroll back to the initial position with a smooth animation
  window.scrollTo({
    top: initialScrollPosition,
    behavior: "smooth",
  });
});


