// Using Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", function() {
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, options);

  document.querySelectorAll(".project, .certification").forEach(section => {
    section.classList.add("hidden");  // initially hide elements
    observer.observe(section);
  });
});
