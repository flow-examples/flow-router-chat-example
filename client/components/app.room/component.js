//roomComponent
var roomComponent = FlowComponents.define('room',function(props){
});

roomComponent.state.isLoggedIn = function(){
  if( Meteor.user() ){
    return true;
  }
};