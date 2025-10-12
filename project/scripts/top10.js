// === Footer Info ===
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `©${today.getFullYear()}`;

const lastMod = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
lastMod.innerHTML = `Last Modified: ${lastModified.toLocaleString()}`;

// === Movies Data (Objects & Array Methods) ===
const movies = [
  { title: "The Lord of the Rings: The Return of the King", year: 2003, genre: "Fantasy, Adventure, Action, Drama", description: "The final battle for Middle-earth begins.", id: "0167260", rank: "1" },
  { title: "Schindler's List", year: 1993, genre: "Drama", description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", id: "0108052", rank: "2" },
  { title: "The Dark Knight", year: 2008, genre: "Action, Crime, Drama, Thriller", description: "Batman faces off against the Joker in this critically acclaimed superhero film.", id: "0468569", rank: "3" },
  { title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", description: "The epic continuation of the Dune saga, exploring new worlds and conflicts.", id: "15239678", rank: "4" },
  { title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "Animation, Action, Adventure", description: "Teenager Miles Morales becomes the Spider-Man of his universe, crossing paths with five counterparts from other dimensions.", id: "4633694", rank: "5" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi, Adventure, Drama", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", id: "0816692", rank: "6" },
  { title: "Avengers: Infinity War", year: 2018, genre: "Sci-Fi, Adventure, Action", description: "The Avengers must stop Thanos, who is on a mission to collect all six Infinity Stones.", id: "4154756", rank: "7" },
  { title: "John Wick: Chapter 4", year: 2024, genre: "Action, Thriller, Crime", description: "John Wick uncovers a path to defeating the High Table.", id: "10366206", rank: "8" },
  { title: "Ratatouille", year: 2007, genre: "Animation, Comedy, Family", description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.", id: "0382932", rank: "9" },
  { title: "3 Idiots", year: 2009, genre: "Comedy, Drama", description: "Three engineering students in India navigate campus life and societal expectations while pursuing their dreams.", id: "1187043", rank: "10" },
];

// === Function 1: Display Movies Dynamically (DOM + Template Literals) ===
function displayMovies(movieList) {
  const container = document.querySelector(".movie-cards");
  container.innerHTML = movieList.map(movie => `
    <div class="movie-card">
      <img src="images/${movie.title.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/:/g, "").replace(/-/g, "")}.jpg" alt="${movie.title}" class="movie-image" loading="lazy">
      <div class="textbox">
        <h3>${movie.rank}. ${movie.title} (${movie.year})</h3>
        <p>${movie.description}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <a href="https://www.imdb.com/title/tt${movie.id}/?ref_=fn_al_tt_1"><img src="images/imdb-logo.svg" alt="IMDb Logo">View on IMDb</a>
      </div>
    </div>
  `).join("");
}

// Initial Display
displayMovies(movies);

