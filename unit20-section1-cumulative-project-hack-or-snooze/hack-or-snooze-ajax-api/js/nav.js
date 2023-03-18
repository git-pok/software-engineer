"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
  /* ADDED CUMULATIVE CODE */
  // putStoriesOnFavPage();
  /* END OF CUMULATIVE CODE */
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/*ADDED CUMULATIVE CODE*/
function showHideStoryForm() {
  if ($('.show-hide').css('display') === 'none') {
    $('.show-hide').show();
  } else {
    $('.show-hide').hide();
  }
}

const $storySubmit = $(".navbar-submit");
$storySubmit.on("click", showHideStoryForm);
// $body.on("click", ".navbar-submit", showHideStoryForm);
/*END OF ADDED CUMULATIVE CODE*/
