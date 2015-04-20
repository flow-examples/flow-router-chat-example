//Meteor.subscribe('People');
//Meteor.subscribe('Discussion');

Template.room.helpers({
    
    screenName: function() { return Session.get('screenName'); },
    people: function() {
        return People.find();
    },
    discussion: function() {
        return Discussion.find({}, {sort: {id: -1}});
    }
    
});

Template.room.events({ 'submit form': function(e) {
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
    
    //Router.go('homeTemplate');
    
  }
});