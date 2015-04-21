Template['login'].events({
  "submit form": function(e) {
    e.preventDefault();

    screenName = $(e.target).find('[name=screen-name]').val();
    pwd = $(e.target).find('[name=pwd]').val();

    // Session regsitering
    Session.set('loggedIn', true);
    Session.set('screenName', screenName);

    FlowComponents.callAction("onSubmit", pwd);
  }
});