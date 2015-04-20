Template.whosOnline.helpers({
    screenName: function() { return Session.get('screenName'); },
    people: function() {
        return People.find();
    }
});