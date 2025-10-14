// === Footer Info ===
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©${today.getFullYear()}`;

const lastMod = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
lastMod.innerHTML = `Last Modified: ${lastModified.toLocaleString()}`;

// === Movie Suggestion Form Handling ===
const form = document.querySelector("#movieSuggestionForm");

form.addEventListener("submit", (event) => {
  // increment review counter before redirect
  let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
});