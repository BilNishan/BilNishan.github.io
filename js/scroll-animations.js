document.addEventListener("DOMContentLoaded", function() {
  const options = {
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        entry.target.classList.remove("hidden"); // Ensure element stays visible
      } else {
        entry.target.classList.remove("fade-in"); // Fade out when scrolling out
        entry.target.classList.add("hidden");
      }
    });
  }, options);

  // Select elements to observe
  const elementsToObserve = document.querySelectorAll(".project, .certification");
  elementsToObserve.forEach(section => {
    section.classList.add("hidden"); // Initially hide elements
    observer.observe(section);
  });
});
