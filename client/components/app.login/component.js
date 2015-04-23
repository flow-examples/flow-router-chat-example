//loginComponent
var loginComponent = FlowComponents.define('login',function(props){
});

loginComponent.state.isLoggedIn = function(){
  if( Meteor.user() ){
    return true;
  }
};

loginComponent.state.isLoggedIn = function(){
  if( Meteor.user() ){
    return true;
  }
};

loginComponent.state.profileName = function(){
  return Meteor.user().profile.name;
};

loginComponent.state.profileAvatarURL = function(){
  return Meteor.user().profile.avatar_url;
};