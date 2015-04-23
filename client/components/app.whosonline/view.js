Tracker.autorun(function() {
  if (FlowRouter.subsReady("peopleSubsc")) {
    $("#people").show();
    $("#people-loader").hide();
  }
});