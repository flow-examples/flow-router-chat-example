Template['editor'].events({
  "submit form": function(e) {
    e.preventDefault();
    chatMsg = document.getElementById("chat-msg").value;
    FlowComponents.callAction("addDiscussion", chatMsg);
    document.getElementById("chat-msg").value = '';
  }
});

Template['editor'].events({
  "click .logout-btn": function(e) {
    Meteor.logout(function(err) {
      if(err){
      }else{
        //update login_status on DB
        screenName = Session.get('screenName');
        var person = People.findOne({screen_name:screenName});
        People.update({_id: person._id}, {$set: {login_status: 0}});
      }
    });
    FlowRouter.go('/');
  }
});