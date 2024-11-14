// Get the modal and image elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const resumeImage = document.getElementById("resumeImage");
const closeModal = document.querySelector(".close");

// Open the modal when the main image is clicked
resumeImage.onclick = function() {
    modal.style.display = "block";
    modalImage.src = this.src;
}

// Close the modal when the 'X' button is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
