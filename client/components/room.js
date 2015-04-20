//Meteor.subscribe('People');
//Meteor.subscribe('Discussion');

Template.room.helpers({
    screenName: function() { return Session.get('screenName'); },
    discussion: function() {
        return Discussion.find({}, {sort: {id: -1}});
    }
});