// DOMContentLoaded event to ensure elements are loaded before animations
document.addEventListener("DOMContentLoaded", function () {
  // Individual elements to animate in order
  const profilePic = document.querySelector(".profile-pic");
  const aboutMe = document.querySelector(".about-me");
  const links = document.querySelectorAll(".link-button");
//  const certifications = document.querySelector(".certifications");

  // Apply hidden class to each element initially
  profilePic.classList.add("hidden");
  aboutMe.classList.add("hidden");
  links.forEach(link => link.classList.add("hidden"));
 // certifications.classList.add("hidden");

  // Start Profile Picture animation, then About Me shortly after
  setTimeout(() => {
    profilePic.classList.remove("hidden");
    profilePic.classList.add("fade-in");
  }, 200); // Profile picture appears first with 200ms delay

  setTimeout(() => {
    aboutMe.classList.remove("hidden");
    aboutMe.classList.add("fade-in");
  }, 450); // About Me appears just after Profile Picture with a 350ms delay

  // Sequential fade-in for each link button with reduced delay
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.remove("hidden");
      link.classList.add("fade-in");
    }, 500 + index * 200); // Starts at 500ms with a 200ms gap between each button
  });



  // iframe preview logic for the top navigation links
  document.querySelectorAll('.top-nav a').forEach(link => {
    // Event listener for mouse entering the link
    link.addEventListener('mouseenter', function(event) {
      const url = link.getAttribute('data-url'); // Get the URL for the iframe preview
      const iframePreview = document.createElement('iframe');

      // Set the iframe attributes
      iframePreview.src = url;
      iframePreview.className = 'iframe-preview';
      iframePreview.style.position = 'absolute';

      // Position the iframe below the link
      const rect = link.getBoundingClientRect();
      iframePreview.style.top = `${window.scrollY + rect.bottom + 10}px`; // Place 10px below the link
      iframePreview.style.left = `${window.scrollX + rect.left + rect.width / 2 - 150}px`; // Center it

      // Add the iframe to the body and make it visible
      document.body.appendChild(iframePreview);
      iframePreview.style.display = 'block';

      // Event listener to remove iframe on mouse leave
      link.addEventListener('mouseleave', function() {
        iframePreview.remove(); // Remove the iframe preview when the mouse leaves
      });
    });
  });
});

//Mobile menu option toggling
function toggleMenu() {
  const sidebar = document.querySelector('.mobile-sidebar');
  sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex';
}