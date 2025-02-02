
// DOMContentLoaded event to ensure elements are loaded before animations
document.addEventListener("DOMContentLoaded", function () {

           const projectCards = document.querySelectorAll(".project-card");

             projectCards.forEach((card) => {
                 card.addEventListener("mouseenter", function () {
                     // Expand the hovered card
                     card.style.transform = "scale(1.05)";
                     card.style.zIndex = "10"; // Bring to the front
                     card.querySelector(".hover-details").style.opacity = "1";
                 });

                 card.addEventListener("mouseleave", function () {
                     // Revert the hovered card
                     card.style.transform = "scale(1)";
                     card.style.zIndex = "1";
                     card.querySelector(".hover-details").style.opacity = "0";
                 });
             });
         });





  // iframe preview logic for the top navigation links
  document.querySelectorAll('.top-nav a').forEach(link => {
    // Event listener for mouse entering the link
    link.addEventListener('mouseenter', function(event)  {
    console.log('mouseenter'); //gives count on console(developer) whenever the mouse enters or registers the mouseenter function
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
