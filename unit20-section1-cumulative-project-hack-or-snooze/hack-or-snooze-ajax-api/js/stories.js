"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
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
    `);
}

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
  // console.log('NEW STORY', newStory);
  // console.log('STORY', newStory);
  // creates html markup for story
  // const $story = generateStoryMarkup(story);
  // adds story to page
  // $allStoriesList.prepend($story);

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

  function addFavorite() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username")
    if (token && username) console.log("LOGGED IN USER!!!");
    // this.favorites.push(story);
    // await this._addOrRemoveFavorite("add", story)
  }

async function addFav(e) {
  // const clickedTitle = String(e.target.nextElementSibling.innerText);
  // const clickedTitle = e.target.id
  // const title = clickedTitle;
  const target = e.target; 
  const clickedStoryId = e.target.parentElement.parentElement.id;
  const storyId = clickedStoryId;
  // const titleId = clickedTitle; 
  // const clickedAuthor = e.target.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
  // const slicedAuthor = clickedAuthor.slice(2);
  // const author = slicedAuthor;
  const stories = storyList.stories;
  const storyArr = stories.filter((val)=> val);
  const jsonFavParse = JSON.parse(localStorage.getItem("favorites"));
  const favTitles = jsonFavParse.map((val)=> val.storyId);
  const isFavStory = favTitles.includes(storyId);
  const storyIndx = jsonFavParse.findIndex((val)=> val.storyId === storyId); 
  // console.log('storyArr', storyArr)
  let clickedStory;
  for (let story of storyArr) {
    if(story.storyId === storyId) clickedStory = story; 
    // if(story.storyId === storyId) console.log(story.title, story.storyId, story);
  }
  console.log('CLICKED STORY', clickedStory);
  // console.log(isFavStory);
  // console.log(clickedStoryId);
  // const $span = $(`.0-${storyId}`).get();
  // Doesn't Work Yet
  const span = document.getElementsByClassName(storyId);
  span[0].classList.toggle('fa-solid');
  // console.log(span[0]);
  // console.log('HGFHGHGFGHF', isFavStory, jsonFavParse);
  if (isFavStory === true) {
    jsonFavParse.splice(storyIndx, 1);
    localStorage.setItem("favorites", JSON.stringify(jsonFavParse));
  } else {
    jsonFavParse.push(clickedStory);
    localStorage.setItem("favorites", JSON.stringify(jsonFavParse));
  }
  console.log(localStorage);
  // e.target.id is what solves the undefined problem
  // I had a span that I was extracting the innerText from
  // the nextElementSiblings. This wasnt working with Boolean logic.
  // I had to make an id on the span that is the story title.
  // Then comparing array values to the clicked id worked.
  // Without this, the Bololean logic would always return false.
  // Line 27 is where I made this change.
  // This forEach below allowed me see the value of val.title
  // is undefined which caused my values to neve compare.
  // console.log(jsonFavParse.forEach((val)=> typeof val.title))
  // console.log(typeof title);
  // console.log(favExists);
}

  const stories = document.querySelector(".stories-list");
  stories.addEventListener("click", addFav);

  // function addFavorite() {
  //   const token = localStorage.getItem("token");
  //   const username = localStorage.getItem("username");
  //   if (token || username) console.log("LOGGED IN USER!!!");
  //   // this.favorites.push(story);
  //   // await this._addOrRemoveFavorite("add", story)
  // }

  

  /** Remove a story to the list of user favorites and update the API
   * - story: the Story instance to remove from favorites
   */

  // async removeFavorite(story) {
  //   this.favorites = this.favorites.filter(s => s.storyId !== story.storyId);
  //   await this._addOrRemoveFavorite("remove", story);
  // }

  /** Update API with favorite/not-favorite.
   *   - newState: "add" or "remove"
   *   - story: Story instance to make favorite / not favorite
   * */
  // async _addOrRemoveFavorite(newState, story) {
  //   const method = newState === "add" ? "POST" : "DELETE";
  //   const token = this.loginToken;
  //   await axios({
  //     url: `${BASE_URL}/users/${this.username}/favorites/${story.storyId}`,
  //     method: method,
  //     data: { token },
  //   });
  // }

  /** Return true/false if given Story instance is a favorite of this user. */

  // isFavorite(story) {
  //   return this.favorites.some(s => (s.storyId === story.storyId));
  // }
  // END OF CUMULATIVE CODE
