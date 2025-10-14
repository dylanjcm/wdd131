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
  { title: "Get Out", year: 2017, genre: "Horror, Thriller", description: "A horror film that explores racial tensions and social issues through a suspenseful narrative.", id: "5052448" },
  { title: "The Lord of the Rings: The Return of the King", year: 2003, genre: "Fantasy, Adventure, Action, Drama", description: "The final battle for Middle-earth begins.", id: "0167260" },
  { title: "Schindler's List", year: 1993, genre: "Drama", description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", id: "0108052" },
  { title: "The Dark Knight", year: 2008, genre: "Action, Crime, Drama, Thriller", description: "Batman faces off against the Joker in this critically acclaimed superhero film.", id: "0468569" },
  { title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", description: "The epic continuation of the Dune saga, exploring new worlds and conflicts.", id: "15239678" },
  { title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "Animation, Action, Adventure", description: "Teenager Miles Morales becomes the Spider-Man of his universe, crossing paths with five counterparts from other dimensions.", id: "4633694" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi, Adventure, Drama", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", id: "0816692" },
  { title: "Avengers: Infinity War", year: 2018, genre: "Sci-Fi, Adventure, Action", description: "The Avengers must stop Thanos, who is on a mission to collect all six Infinity Stones.", id: "4154756" },
  { title: "John Wick: Chapter 4", year: 2024, genre: "Action, Thriller, Crime", description: "John Wick uncovers a path to defeating the High Table.", id: "10366206" },
  { title: "Ratatouille", year: 2007, genre: "Animation, Comedy, Family", description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.", id: "0382932" },
  { title: "3 Idiots", year: 2009, genre: "Comedy, Drama", description: "Three engineering students in India navigate campus life and societal expectations while pursuing their dreams.", id: "1187043" },
  { title: "The Matrix", year: 1999, genre: "Sci-Fi, Action", description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.", id: "0133093" },
  { title: "Alien", year: 1979, genre: "Horror, Sci-Fi", description: "The crew of a commercial spacecraft encounter a deadly alien creature.", id: "0078748" },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004, genre: "Drama, Romance, Sci-Fi", description: "A couple undergoes a procedure to erase memories of each other when their relationship turns sour.", id: "0338013" },
  { title: "Mad Max: Fury Road", year: 2015, genre: "Action, Adventure, Sci-Fi", description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.", id: "1392190" },
  { title: "Logan", year: 2017, genre: "Action, Drama, Sci-Fi", description: "In a future where mutants are nearly extinct, an aging Wolverine cares for an ailing Professor X.", id: "3315342" },
  { title: "The Green Mile", year: 1999, genre: "Crime, Drama, Fantasy", description: "The lives of guards on Death Row are affected by one of their charges: a black man.", id: "0120689" },
  { title: "The Conjuring", year: 2013, genre: "Horror, Mystery, Thriller", description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", id: "1457767" },
  { title: "Toy Story", year: 1995, genre: "Animation, Adventure, Comedy, Family, Fantasy", description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him.", id: "0114709" },
  { title: "The Lion King", year: 1994, genre: "Animation, Adventure, Drama, Family, Musical", description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.", id: "0110357" },
  { title: "Inglourious Basterds", year: 2009, genre: "Adventure, Drama, War", description: "In Nazi-occupied France, a group of Jewish-American soldiers known as the Basterds plot to assassinate Nazi leaders.", id: "0361748" },
  { title: "The Shawshank Redemption", year: 1994, genre: "Drama", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", id: "0111161" },
  { title: "Up", year: 2009, genre: "Animation, Adventure, Comedy, Family", description: "An elderly widower and a young Wilderness Explorer embark on an adventure to South America.", id: "1049413" },
  { title: "The Avengers", year: 2012, genre: "Sci-Fi, Action, Adventure", description: "Earth's mightiest heroes must come together to stop Loki and his alien army.", id: "0848228" },
  { title: "The Silence of the Lambs", year: 1991, genre: "Crime, Drama, Thriller", description: "A young FBI cadet must confide in an incarcerated and manipulative killer to catch another serial killer.", id: "0102926" },
  { title: "The Godfather", year: 1972, genre: "Crime, Drama", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", id: "0068646" }
];

// === Function 1: Filter Movies by Genre (Flexible Matching) ===
function filterMovies(genre) {
  const filtered = genre === "All"
    ? movies
    : movies.filter(movie =>
        movie.genre.toLowerCase().includes(genre.toLowerCase())
      );
  displayMovies(filtered);
}


// === Function 2: Display Movies Dynamically (DOM + Template Literals) ===
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

// === Add Filter Buttons (DOM Interaction + Event Listeners) ===
const filterContainer = document.createElement("div");
filterContainer.classList.add("filter-container");
filterContainer.innerHTML = `
  <div class="genre-buttons">
    <button class="filter-btn active" data-genre="All">All</button>
    <button class="filter-btn" data-genre="Sci-Fi">Sci-Fi</button>
    <button class="filter-btn" data-genre="Action">Action</button>
    <button class="filter-btn" data-genre="Fantasy">Fantasy</button>
    <button class="filter-btn" data-genre="Horror">Horror</button>
    <button class="filter-btn" data-genre="Drama">Drama</button>
    <button class="filter-btn" data-genre="Comedy">Comedy</button>
    <button class="filter-btn" data-genre="Animation">Animation</button>
    <button class="filter-btn" data-genre="Adventure">Adventure</button>
    <button class="filter-btn" data-genre="Thriller">Thriller</button>
    <button class="filter-btn" data-genre="Crime">Crime</button>
    <button class="filter-btn" data-genre="Family">Family</button>
  </div>
`;

document.querySelector(".genre-buttons").prepend(filterContainer);

// Select all filter buttons once
const filterButtons = document.querySelectorAll(".filter-btn");

// Loop through each button to add a single event listener
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // --- Action 1: Handle the active state ---

    // First, remove the 'active' class from all buttons
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Then, add the 'active' class to the button that was just clicked
    button.classList.add('active');


    // --- Action 2: Filter movies and save state ---

    const genre = button.dataset.genre;
    filterMovies(genre);
    localStorage.setItem("selectedGenre", genre);
  });
});