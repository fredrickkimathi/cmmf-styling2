// Get references to all chevron-down icons and answer divs
const chevronIcons = document.querySelectorAll(".fa-chevron-down");
const answerDivs = document.querySelectorAll("#hide-ans");

// Add event listeners to each chevron-down icon
chevronIcons.forEach((icon, index) => {
  icon.addEventListener("click", function() {
    // Toggle visibility of corresponding answer div
    if (answerDivs[index].style.display === "none") {
      answerDivs[index].style.display = "block";
      icon.classList.add("rotate"); // Rotate icon
    } else {
      answerDivs[index].style.display = "none";
      icon.classList.remove("rotate"); // Remove rotation from icon
    }
  });
});

// Your existing code
const icon = document.getElementById("icon");
const searchInput = document.getElementById("search-input");
const lookingForText = document.getElementById("looking-for");

icon.addEventListener("click", function() {
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
    lookingForText.style.display = "none";
  } else {
    searchInput.style.display = "none";
    lookingForText.style.display = "block";
  }
});
