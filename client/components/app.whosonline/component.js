//whosOnlineComponent
var whosOnlineComponent = FlowComponents.define('whosOnline',function(props){
});

whosOnlineComponent.state.people = function(){
  return People.find();
};

whosOnlineComponent.state.isLoading = function(){
  if (FlowRouter.subsReady("peopleSubsc")) {
    return false;
  }
  else
  {
    return true;
  }
};
