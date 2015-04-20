
Template['editor'].events({
  "submit form": function(e) {
    e.preventDefault();

    chatMsg = document.getElementById("chat-msg").value;

    FlowComponents.callAction("onSubmit", chatMsg);

    document.getElementById("chat-msg").value = '';
  }
});