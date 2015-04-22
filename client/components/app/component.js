//mainComponent
var mainComponent = FlowComponents.define('main',function(props){
	this.set('template',props.template)
});

mainComponent.state.componentName = function(){
	return this.get('template');
};