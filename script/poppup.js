var modal = document.getElementById("modal");
var closeBtn = document.getElementById("close-btn");

// Ensure the modal is displayed when the page loads
window.onload = function () {
  modal.style.display = "flex"; // Show the modal
};

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none"; // Hide the modal
};
