fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

function fetchData() {
  return fetch(
    `https://api-2445581417326.apicast.io:443/api/v1/workouts/530?api_key: 01429dc958ed709f282318ac634b681b`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
