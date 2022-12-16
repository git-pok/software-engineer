// API Link: <https://www.tvmaze.com/api>
// Show with no image: Pointy Horror,
// the above show is to test default image that appears for it
"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");
const $episodesList = $("#episodesList");


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */
// ex show search: 'The Bletchley Circle'
// makes a request and creates variables from the returned data
// gets called in and uses created variable in searchForShowAndDisplay(),
// for its argument
async function getShowsByTerm(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const url = `https://api.tvmaze.com/singlesearch/shows?q=${term}`; 
  const apiRes = await axios.get(url);
  const id = apiRes.data.id;
  const name = apiRes.data.name;
  const summary = apiRes.data.summary;
  
  // default image
  const defaultImg = `https://store-images.s-microsoft.com/image/apps.65316.13510798887490672.6e1ebb25-96c8-4504-b714-1f7cbca3c5ad.f9514a23-1eb8-4916-a18e-99b1a9817d15?mode=scale&q=90&h=300&w=300`; 
  // image sets to show image or defaultImage
  const image = !apiRes.data.image ? defaultImg : apiRes.data.image.medium;

  return [
    {
      id,
      name,
      summary,
      image,  
    }
  ];
}


/** Given list of shows, create markup for each and to DOM */
// creates and appends DOM elements 
function populateShows(shows) {
  // empties area where shows append before each execution
  $showsList.empty();

  // iterates over the argument that gets created and passed in,
  // when populateShows() gets called in searchForShowAndDisplay()
  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="${show.name}"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */
// calls getShowsByTerm() and populateShows()
async function searchForShowAndDisplay() {
  // argument variable that gets passed in getShowsByTerm()
  const term = $("#searchForm-term").val();

  // argument variable that gets passed in populateShows(),
  const shows = await getShowsByTerm(term);
  // hides DOM node where episodes will show
  $episodesArea.hide();

  populateShows(shows);
}
 
$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// makes request and creates data object
// argument for this funciton gets created and passed in, 
// in displayEpisodes()
async function getEpisodesOfShow(id) {
  const url = `http://api.tvmaze.com/shows/${id}/episodes`; 
  const apiRes = await axios.get(url);
  const data = apiRes.data;
  return data;
}

/** Write a clear docstring for this function... */

// creates and appends DOM elememnts
async function populateEpisodes(showEpisodes) {
  // empties episodes content to assure a fresh start for every show
  // fixes Bug2 from documentation
  $episodesList.empty();

  for (let shows of showEpisodes) {
    const $showEpisodesLi = $(
      ` <li>
          <span class='bold'>Name:</span>${shows.name} 
            <span class='spaced-character'>|</span> 
          <span class='bold'>Season:</span>${shows.season} 
            <span class='spaced-character'>|</span>
          <span class='bold'>Id:</span>${shows.id} 
            <span class='spaced-character'>|</span>
          <span class='bold'>Number:</span>${shows.number}
        </li>
      `);

      $episodesList.append($showEpisodesLi);
  }
}

// calls and passes in arguments to getEpisodesOfShow() and populateEpisodes()
// calls all functions that grab show ids and manipulate the DOM 
async function displayEpisodes() {
  // creates variable to pass in to getEpisodesOfShow() as an argument
  const id = document.querySelector('[data-show-id]').dataset.showId;
  // creates variable to pass in to populateEpisodes() as an argument
  // allows populateEpisodes() to have the data from show episodes,
  // to create DOM elements from it  
  const showEpisodes = await getEpisodesOfShow(id);
  $episodesArea.show();

  populateEpisodes(showEpisodes);  
}

$showsList.on('click', 'BUTTON', displayEpisodes);
