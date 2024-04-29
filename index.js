const icon = document.getElementById("icon");
const searchInput = document.getElementById("search-input");
const lookingForText = document.getElementById("looking-for"); // Get reference to text element

icon.addEventListener("click", function() {
  // Toggle visibility of search input
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
    lookingForText.style.display = "none"; // Hide text when input appears
  } else {
    searchInput.style.display = "none";
    lookingForText.style.display = "block"; // Show text when input disappears
  }
});
