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
    }
  });
}