// === Footer Info ===
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©${today.getFullYear()}`;

const lastMod = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
lastMod.innerHTML = `Last Modified: ${lastModified.toLocaleString()}`;

// === Movies Data (Objects & Array Methods) ===
const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi, Thriller, Action", description: "A mind-bending thriller that delves into the world of dreams and subconscious.", id: "1375666" },
  { title: "Dune", year: 2021, genre: "Sci-Fi", description: "A visually stunning adaptation of Frank Herbert's sci-fi epic.", id: "1160419" },
  { title: "John Wick", year: 2014, genre: "Action, Thriller, Crime", description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.", id: "2911666" },
  { title: "Pan's Labyrinth", year: 2006, genre: "Fantasy, Horror, Drama", description: "A dark fantasy film that weaves together the real world and a mythical labyrinth.", id: "0457430" },
  { title: "Get Out", year: 2017, genre: "Horror, Thriller", description: "A horror film that explores racial tensions and social issues through a suspenseful narrative.", id: "5052448" }
];

// === Function 1: Display Movies Dynamically (DOM + Template Literals) ===
function displayMovies(movieList) {
  const container = document.querySelector(".movie-cards");
  container.innerHTML = movieList.map(movie => `
    <div class="movie-card">
      <img src="images/${movie.title.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/:/g, "").replace(/-/g, "")}.jpg" alt="${movie.title}" class="movie-image" loading="lazy">
      <div class="textbox">
        <h3>${movie.title} (${movie.year})</h3>
        <p>${movie.description}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <a href="https://www.imdb.com/title/tt${movie.id}/?ref_=fn_al_tt_1"><img src="images/imdb-logo.svg" alt="Our Youtube Channel">View on IMDb</a>
      </div>
    </div>
  `).join("");
}

// Initial Display
displayMovies(movies);

// === Conditional Branching Example (Greeting Based on Time) ===
const greeting = document.createElement("p");
const hour = today.getHours();

if (hour < 12) {
  greeting.textContent = "Good morning, movie lover!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon! Ready to discover great films?";
} else {
  greeting.textContent = "Good evening! Time for a movie night!";
}

greeting.style.fontWeight = "500";
greeting.style.textAlign = "center";
document.querySelector("p").prepend(greeting);