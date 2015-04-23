Tracker.autorun(function() {
  if (FlowRouter.subsReady("discussionSubsc")) {
    $("#msgs").show();
    $("#msg-ajax-loader").hide();
  }
});