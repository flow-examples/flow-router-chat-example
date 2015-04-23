Tracker.autorun(function() {
  if (FlowRouter.subsReady("discussionSubsc")) {
    $("#msgs").show();
    $("#msg-loader").hide();
  }
});