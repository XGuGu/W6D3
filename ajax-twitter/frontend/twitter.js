const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  const $followToggleButtons = $('button.follow-toggle');
  $followToggleButtons.each ((index, button) => {
    const $button = $(button);
    new FollowToggle($button);
  });

  const $usersSearch = $('.users-search');
  new UsersSearch($usersSearch);
});
