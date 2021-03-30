console.log('this works');

const artist_container = document.querySelector(".artist-container");
const filter_button = document.querySelector(".filter-button");
const sort_button = document.querySelector(".sort-button");
const search_bar = document.querySelector("input");

//---------- RENDER DATA

function renderAllArtists(data) {
  data.forEach(function (artist) {
    let paragraph = document.createElement("p");
    paragraph.textContent = artist.name;
    artist_container.appendChild(paragraph);
  });
}

renderAllArtists(artists);

//---------- FILTER FUNCTION

function filterArtists(){

  artist_container.innerHTML = ""
  console.log('clicked', artists)

  let filtered = []

  for (let i = 0; i < artists.length; i++) {
    if (artists[i].name == "Mark Bradford") {
      filtered.push(artists[i])
    }
  }

  console.log(filtered);
  renderAllArtists(filtered);
} 

filter_button.addEventListener("click", filterArtists);

//---------- SORT FUNCTION

function sortArtists(){
  artist_container.innerHTML = ""
  // want this array to be sorted by name
  let names = []

  for (let i = 0; i < artists.length; i++) {
    let name = artists[i].name;
    names.push(name)
  }
  let sorted = names.sort()
  console.log(sorted)
  renderAllArtists(sorted);
}

sort_button.addEventListener("click", sortArtists);

//---------- SEARCH FUNCTION (advanced)

function searchArtists(e){
  const searchString = e.target.value; 
  console.log(searchString)
}

search_bar.addEventListener('keyup', searchArtists)