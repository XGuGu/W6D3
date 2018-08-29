const APIUtil = require("./api_util.js");

class FollowToggle {
  constructor($el, options) {
    this.$el = $el;
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {

    this.$el.empty();
    if (this.followState === false) {
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  }

  handleClick() {
    // debugger
    this.$el.on("click", (e) => {
      e.preventDefault();
      this.$el.prop("disabled", true);
      // debugger
      if (this.followState === true) {
        APIUtil.unfollowUser(this.userId).then( (result) => {
          this.successCB();
        });
      } else {
        APIUtil.followUser(this.userId).then( (result) => {
          this.successCB();
        });
      }
    });
  }

  successCB() {
    // debugger
    this.followState = this.followState === true ? false : true;
    this.render();
    this.$el.prop("disabled", false);
  }
}

module.exports = FollowToggle;
