FlowRouter.route('/', {
    subscriptions: function(params) {
        console.log("all the subscriptions goes here!");
    },
    action: function(params) {

    	// Session regsitering
    	Session.set('loggedIn', false);
    	Session.set('screenName', '');

        FlowLayout.render('layout', { template: "home" });
    }
});

FlowRouter.route('/about', {
    subscriptions: function(params) {
        console.log("all the subscriptions goes here!");
    },
    action: function(params) {
        FlowLayout.render('layout', { template: "about" });
    }
});

FlowRouter.route('/room', {
    subscriptions: function(params) {
        
        Meteor.subscribe('People');
        Meteor.subscribe('Discussion');
    },
    action: function(params) {
        FlowLayout.render('layout', { template: "room" });
    }
});

FlowRouter.route('/sign-out', {
    subscriptions: function(params) {
        console.log("all the subscriptions goes here!");
    },
    action: function(params) {
        FlowRouter.go('/');
    }
});