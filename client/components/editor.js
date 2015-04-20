Template.editor.helpers({
    screenName: function() { return Session.get('screenName'); },
});

Template.editor.events({ 'submit form': function(e) {
    e.preventDefault();
    
    chatMsg = document.getElementById("chat-msg").value;
    
    // Insert Databse
    count = Discussion.find().count();
    count++;
    
    Discussion.insert({
        id: count,
        screen_name: Session.get('screenName'),
        msg: chatMsg
    });
  }
});