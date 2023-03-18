"use strict";
// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
  /* ADDED CUMULATIVE CODE */
  putStoriesOnFavPage();
  /* END OF CUMULATIVE CODE */
}

// ADDED CUMULATIVE CODE
function checkForLoggedInUser() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  if (token || username) return true;
  else return false;
}
// END OF CUMULATIVE CODE

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  /* ADDED CUMULATIVE CODE */
  const loggedIn = checkForLoggedInUser();
  
  if (loggedIn) {
    const jsonFavParse = JSON.parse(localStorage.getItem("favorites"));
    const favTitles = jsonFavParse.map((val)=> val.storyId);
    if (favTitles.includes(story.storyId)) {
      // console.log(story);   
      return $(`
        <li id="${story.storyId}">
        <span>
          <i class="fa-solid fa-star ${story.storyId}"></i>
        </span>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
        </li>
        <span class="delete">
          x
        </span>
      `);
    } else {
      return $(`
        <li id="${story.storyId}">
          <span>
            <i class="fa-regular fa-star ${story.storyId}"></i>
          </span>
          <a href="${story.url}" target="a_blank" class="story-link">
            ${story.title}
          </a>
          <small class="story-hostname">(${hostName})</small>
          <small class="story-author">by ${story.author}</small>
          <small class="story-user">posted by ${story.username}</small>
        </li>
        <span class="delete">
            x
        </span>
      `);
    }
  } else {
    return $(`
      <li id="${story.storyId}">
        <span>
          <i class="${story.storyId}"></i>
        </span>
        <a href="${story.url}" target="a_blank" class="story-link">
        ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
  }
  /* END OF CUMULATIVE CODE */
}

/* ADDED CUMULATIVE CODE */
function generateNoFavStoryMarkup(story) {
  return $(`
        <h1>
        ${story}
        </h1>
        `
  );
}
/* END OF CUMULATIVE CODE */
/** Gets list of stories from server, generates their HTML, and puts on page. */
function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}
/*ADDED CUMULATIVE CODE*/
/** Gets list of stories from server, generates their HTML, and puts on page. */
function putStoriesOnFavPage() {
  const currUserFavs = currentUser.favorites;
  const currUser = currentUser; 
  $favs.empty();  
  const loggedIn = checkForLoggedInUser();

  if (loggedIn) {
    const storyContent = 'No Favorite Stories Yet!'; 
    currUser.noFavStories(storyContent);
    const jsonFavParse = JSON.parse(localStorage.getItem("favorites"));
    const favIds = jsonFavParse.map((val)=> val.storyId);
    // loop through all of our stories and generate HTML for them
    for (let story of currUserFavs) {
      if (story.length !== 0) {
        const $story = generateStoryMarkup(story);
        $favs.append($story);
      }
    }
  }

  $favs.show();
}
/*END OF CUMULATIVE CODE*/

/*ADDED CUMULATIVE CODE*/
async function addStoryFromStoryForm(evt) {
  evt.preventDefault();
  const $storiesForm = $('#stories-form');

  // variables like $author create errors and dont work 
  const author = $("#author").val();
  const title = $("#title").val();
  const url = $("#url").val();
  // using $ in fornt of variables like $author,
  // resulted in a bad request error.
  const storyObj = { title, url, author };
  await storyList.addStory(currentUser, storyObj);

  $("#author").val('');
  $("#title").val('');
  $("#url").val('');
}

$('#stories-form').on('submit', addStoryFromStoryForm);
/*END OF CUMULATIVE CODE*/

// ADDED CUMULATIVE CODE
  /** Add a story to the list of user favorites and update the API
   * - story: a Story instance to add to favorites
   */

function isClickedStoryFavStory(e) {
  const target = e.target; 
  const clickedStoryId = e.target.parentElement.parentElement.id;
  const storyId = clickedStoryId;
  const jsonFavParse = JSON.parse(localStorage.getItem("favorites"));
  const favTitles = jsonFavParse.map((val)=> val.storyId);
  const isFavStory = favTitles.includes(storyId);
  return isFavStory; 
}

function accessClickedStoryObj(e) {
  const target = e.target; 
  const clickedStoryId = e.target.parentElement.parentElement.id;
  const storyId = clickedStoryId;
  const stories = storyList.stories;
  const storyArr = stories.filter((val)=> val);
  let clickedStory;
  
  for (let story of storyArr) {
    if(story.storyId === storyId) clickedStory = story;
  }

  return clickedStory; 
}

async function addToHackOrSnoozeFav(storyId) {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const resp = await axios.post(`
  https://hack-or-snooze-v3.herokuapp.com/users/${username}/favorites/${storyId}
  `, { "token": token}
  );
  return resp;
}

async function deleteFromHackOrSnoozeFav(storyId) {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  // Note, the delete request doesn't support both request body and headers.
  // This is why I used data and headers properties. 
  const resp = await axios.delete(
  `https://hack-or-snooze-v3.herokuapp.com/users/${username}/favorites/${storyId}`, {
    data: { "token": token }, "headers": { 'Content-Type': 'application/json' }}
  );
  return resp;
}

async function addToLocalStorageFav(e) {
  const loggedIn = checkForLoggedInUser();
  let isFavStory = isClickedStoryFavStory(e);
  let clickedStory = accessClickedStoryObj(e);

  const target = e.target;
  const targetLocalName = e.target.localName;
  const targetText = e.target.innerText;

  if (targetLocalName === 'i') {
    const clickedStoryId = e.target.parentElement.parentElement.id;
    const storyId = clickedStoryId;

    const jsonFavParse = JSON.parse(localStorage.getItem("favorites"));

    const storyIndx = jsonFavParse.findIndex((val)=> val.storyId === storyId);

    const span = document.getElementsByClassName(storyId);

    if (loggedIn && isFavStory === true) {
      span[0].className = (`fa-regular fa-star ${storyId}`);
      jsonFavParse.splice(storyIndx, 1);

      localStorage.setItem("favorites", JSON.stringify(jsonFavParse));
      const resp = await deleteFromHackOrSnoozeFav(storyId);
      currentUser.removeFromCurrentUserFavorites(storyId);
    } else {
      span[0].className = (`fa-solid fa-star ${storyId}`);
      clickedStory.fav = true;
      jsonFavParse.push(clickedStory);

      localStorage.setItem("favorites", JSON.stringify(jsonFavParse));
      const resp = await addToHackOrSnoozeFav(storyId);
      currentUser.addToCurrentUserFavorites(clickedStory);
    }
  } else if (targetText === 'x') {
    const clickedStoryId = e.target.previousElementSibling.id;
    const storyId = clickedStoryId;
    await storyList.deleteStory(currentUser, storyId);
  }
}

const stories = document.querySelector(".stories-list");
stories.addEventListener("click", addToLocalStorageFav);
  // END OF CUMULATIVE CODE
