// import './travel_recommendation_api.json'

const word = document.getElementById("search");
const result = document.getElementById("results");
const clearbtn = document.getElementById('clear');

function search() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.countries;
      const beaches = data.beaches;
      const temples = data.temples;

      const CouBeaTem = [];

      const c = countries.map((country) => country.cities);
      c.forEach((element) => {
        element.forEach((city) => CouBeaTem.push(city));
      });
      beaches.forEach((beach) => CouBeaTem.push(beach));
      temples.forEach((temple) => CouBeaTem.push(temple));

        if(word.value.length==0){
            result.innerHTML = "<h1>Please enter a search term</h1>"
        }

      const result_cities = CouBeaTem.filter((element) =>
        element.name.toLowerCase().includes(word.value.toLowerCase())
      ).map(
        (element) =>
          `<div>
    <img src = "${element.imageUrl}">
    <div class = "search-info">
    <h1>${element.name}</h1>
    <p>${element.description}</p>
    <button>Visit</button>
    </div>
    </div>`
      );

      console.log(result_cities);
      result.innerHTML = result_cities.join("")
    });
  console.log(word.value);
}

const clearSearch = () => {
  document.getElementById("search").value = "";
};

clearbtn.addEventListener('click',clearSearch)

// fetch("data.json") // Ensure 'data.json' is in the same directory
//   .then((response) => response.json()) // Convert response to JSON
//   .then((data) => console.log(data)) // Display the data in console
//   .catch((error) => console.error("Error fetching JSON:", error));
