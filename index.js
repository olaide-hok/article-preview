const shareBtn = document.getElementById("shareBtn");
const shareToastMobile = document.getElementById("shareToastMobile");
const closeShareBtn = document.getElementById("closeShareBtn");
const triangle = document.getElementById("triangle");

// Function to check if the screen width is 768px or above
function isScreenLarge() {
  return window.matchMedia("(min-width: 768px)").matches;
}

// Toggle visibility of the share toast and triangle
function toggleShareToast() {
  shareToastMobile.classList.toggle("display-none");

  // Only toggle the triangle if the screen is 768px or above
  if (isScreenLarge()) {
    triangle.classList.toggle("display-none");
  }
}

// Event listeners
shareBtn.addEventListener("click", toggleShareToast);
closeShareBtn.addEventListener("click", toggleShareToast);
