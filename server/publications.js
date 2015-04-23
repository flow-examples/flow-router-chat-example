Meteor.publish('People', function() { 
  return People.find();
});

Meteor.publish('Discussion', function() { 
  return Discussion.find();
});
