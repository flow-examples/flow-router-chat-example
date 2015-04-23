Tracker.autorun(function() {
  if (FlowRouter.subsReady("peopleSubsc")) {
    $("#people").show();
    $("#people-ajax-loader").hide();
  }
});