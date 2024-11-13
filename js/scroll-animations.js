document.addEventListener("DOMContentLoaded", function() {
  const options = {
    threshold: 0.1, // Trigger when 10% of element is in view
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log("Observing entry:", entry); // Debug log
      if (entry.isIntersecting) {
        console.log("Intersecting:", entry.target); // Debug log
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Stop observing once animation is applied
      }
    });
  }, options);

  // Select elements to observe
  const elementsToObserve = document.querySelectorAll(".project, .certification");
  elementsToObserve.forEach(section => {
    section.classList.add("hidden"); // Add initial hidden class
    observer.observe(section);
  });
});
