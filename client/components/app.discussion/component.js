//discussionComponent
var discussionComponent = FlowComponents.define('discussion',function(props){
});

discussionComponent.state.discussion = function(){
  return Discussion.find({}, {sort: {id: -1}});
};

discussionComponent.state.isLoading = function(){
  if (FlowRouter.subsReady("discussionSubsc")) {
    return false;
  }
  else
  {
    return true;
  }
};