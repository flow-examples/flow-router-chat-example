Template['editor'].events({
  "submit form": function(e) {
    e.preventDefault();
    chatMsg = document.getElementById("chat-msg").value;
    FlowComponents.callAction("onSubmit", chatMsg);
    document.getElementById("chat-msg").value = '';
  }
});

Template['editor'].events({
  "click .logout-btn": function(e) {
		Meteor.logout(function(err) {
	  	if(err){
	  	}else{
	      //we will do something in here with the username
	  	}
		});
		FlowRouter.go('/');
  }
});

	