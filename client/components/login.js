Template.login.events({ 'submit form': function(e) {
    e.preventDefault();
    
    screenName = $(e.target).find('[name=screen-name]').val();
    pwd = $(e.target).find('[name=pwd]').val();

    // Session regsitering
    Session.set('loggedIn', true);
    Session.set('screenName', screenName);
    
    // Check for existing record.
    recExists = People.findOne({screen_name: screenName, password:pwd});
    
    if (!recExists) {
        // Insert Databse
        count = People.find().count();
        count++;

        People.insert({
            id: count,
            screen_name: screenName,
            password: pwd,
            login_status: 1
        });
    }

    FlowRouter.go('/room');
    
  }
});