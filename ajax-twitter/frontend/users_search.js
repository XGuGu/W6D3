const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");

class UsersSearch {
  constructor($nav) {
    this.$nav = $nav;
    this.handleInput();
  }

  handleInput() {
    this.$nav.on("input", "input", (e) => {
      const queryVal = $(e.currentTarget).val();
      APIUtil.searchUsers(queryVal, this.renderResults.bind(this));
    });
  }

  renderResults(users) {
    this.$nav.find("ul.users").empty();

    users.forEach((user) => {
      let $li = $("<li class='search-result'>");
      $li.text(user.username);
      let $button = $('<button>');
      $button.data('user-id', `${user.id}`);
      $button.data('initial-follow-state', user.followed);
      let button = new FollowToggle($button);
      this.$nav.find("ul.users").append($li);
      this.$nav.find("ul.users").append($button);
    });
  }
}

module.exports = UsersSearch;
