//editorComponent
var editorComponent = FlowComponents.define('editor',function(props){
});

editorComponent.state.screenName = function(){
  return Session.get('screenName');
};

editorComponent.action.addDiscussion = function(chatMsg) {
  // Insert Databse
  count = Discussion.find().count();
  count++;

  Discussion.insert({
    id: count,
    screen_name: Session.get('screenName'),
    msg: chatMsg
  });
};