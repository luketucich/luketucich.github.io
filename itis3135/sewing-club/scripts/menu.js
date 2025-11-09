// Mobile hamburger menu functionality
function setupMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("header nav");

  // Exit if header hasn't loaded yet
  if (!menuToggle || !nav) {
    return;
  }

  // Toggle menu open/closed when hamburger is clicked
  menuToggle.onclick = function() {
    const isActive = nav.classList.contains("active");
    
    if (isActive) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
    } else {
      nav.classList.add("active");
      menuToggle.classList.add("active");
    }
  };

  // Close menu when clicking a navigation link
  const links = nav.querySelectorAll("a");
  links.forEach(function(link) {
    link.onclick = function() {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
    };
  });

  // Close menu when clicking outside of it
  document.onclick = function(event) {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      nav.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  };
}

// Wait for header to be loaded before setting up menu
document.addEventListener("HTMLIncludeLoaded", setupMenu);
