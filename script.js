function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

// Smooth scrolling for navigation links
// (This will work after DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.querySelector('[onclick="toggleMenu()"]');
    if (mobileMenu && menuButton && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
});
