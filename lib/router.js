FlowRouter.route('/', {
  subscriptions: function(params) {
    console.log("all the subscriptions goes here!");
  },
  action: function(params) {
  	// Session regsitering
  	Session.set('loggedIn', false);
  	Session.set('screenName', '');

    FlowLayout.render('layout', { template: "login" });
  }
});

FlowRouter.route('/room', {
  subscriptions: function(params) {
    //Subscriptions
    Meteor.subscribe('People');
    Meteor.subscribe('Discussion');
  },
  action: function(params) {
    if( Meteor.user() )
    {
      screenName = Meteor.user().services.github.username;
      Session.set('screenName', screenName);
      //check user already in the db
      recExists = People.findOne({screen_name: Session.get('screenName')});
      if (!recExists) {
        // Insert Databse
        count = People.find().count();
        count++;

        People.insert({
            id: count,
            screen_name: screenName,
            login_status: 1
        });
      }
      //render the layout
      FlowLayout.render('layout', { template: "room" });
    }
    else
    {
      FlowRouter.go('/');
    }
  }
});