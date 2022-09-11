const form = document.querySelector(".search-form");
const input = document.querySelector(".search-form__input");
form.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();
  let query = e.target.elements.query.value.trim();
  if (!query) {
    return;
  } else {
    fetchMovies(query)
      .then((data) => {
        console.log(data);
        input.innerHTML = "";
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function fetchMovies(query) {
  const BASE_URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "76ca17943e227c67de15be6c6d3599fa";
  return fetch(`${BASE_URL}?api_key=${API_KEY}&query=${query}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function fetchGenres() {
  const BASE_URL = "https://api.themoviedb.org/3/genre/movie/list";
  const API_KEY = "6308d1a98819d8ffdd4916cbcea5cd95";
  return fetch(`${BASE_URL}?api_key=${API_KEY}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function searchGenreById(id) {
  fetchGenres()
    .then((data) => {
      console.log(data);
      const searchGenre = data.genres.find((e) => e.id === id);
      console.log(searchGenre);
      console.log("id: ", searchGenre.id);
      console.log("name: ", searchGenre.name);
    })
    .catch((error) => console.log(error));
}

// fetchGenres()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
searchGenreById(99);
