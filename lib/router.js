FlowRouter.route('/', {
  subscriptions: function(params) {
  },
  action: function(params) {
    FlowLayout.render('layout', { template: "login" });
  }
});

FlowRouter.route('/room', {
  subscriptions: function(params) {
    this.register('peopleSubsc', Meteor.subscribe('People'));
    this.register('discussionSubsc', Meteor.subscribe('Discussion'));
  },
  action: function(params) {
    FlowLayout.render('layout', { template: "room" });
  }
});