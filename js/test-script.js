const form = document.querySelector(".search-form");
const input = document.querySelector(".search-form__input");
form.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();
  let query = e.target.elements.query.value.trim();
  console.log(query);
  if (!query) {
    return;
  } else {
    fetchMovies(query)
      .then((data) => {
        console.log(data);
        e.target.elements.query.value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function fetchMovies(query) {
  const BASE_URL = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "76ca17943e227c67de15be6c6d3599fa";
  return fetch(`${BASE_URL}?api_key=${API_KEY}&query=${query}&page=2`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
