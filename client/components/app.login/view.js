Template['login'].events({
  "click .login-btn": function(e) {
    loginFn();
  }
});

function loginFn(){
  Meteor.loginWithGithub({
    requestPermissions : ['user']
  },function(err){
    if(err){
      //error handling
    }else{
      //user create here! ;)
      if(Meteor.user()) {
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
        else
        {
          var person = People.findOne({screen_name:screenName});
          People.update({_id: person._id}, {$set: {login_status: 1}});
        }
      }
    }
  });
}