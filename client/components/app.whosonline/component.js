//whosOnlineComponent
var whosOnlineComponent = FlowComponents.define('whosOnline',function(props){
});

whosOnlineComponent.state.people = function(){
	return People.find();
};