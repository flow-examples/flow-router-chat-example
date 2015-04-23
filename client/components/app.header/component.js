//headerComponent
var headerComponent = FlowComponents.define('header',function(props){
});

headerComponent.state.loggedIn = function(){
  return Session.get('loggedIn');
};