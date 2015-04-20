FlowRouter.route('/', {
    subscriptions: function(params) {
        console.log("all the subscriptions goes here!");
    },
    action: function(params) {
    	// Session regsitering
    	Session.set('loggedIn', false);
    	Session.set('screenName', '');

        FlowLayout.render('layout', { template: "login" });
    }
});

FlowRouter.route('/about', {
    subscriptions: function(params) {
        console.log("all the subscriptions goes here!");
    },
    action: function(params) {
        FlowLayout.render('layout', { template: "page", page: "About" });
    }
});

FlowRouter.route('/room', {
    subscriptions: function(params) {
        //Subscriptions
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