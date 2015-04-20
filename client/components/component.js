// statcPageComponent
var statcPageComponent = FlowComponents.define('page',function(props) {
	this.set('pageName',props.name)
	this.setPageContent();
});

statcPageComponent.prototype.setPageContent = function(){
	samplePageTitle = '<h2>Page Title</h2>';
	samplePageContent = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur diam sed ipsum hendrerit finibus. Aenean purus leo, tristique at erat a, viverra consequat lacus. Nulla imperdiet convallis dapibus. Vivamus blandit at sapien at feugiat. Morbi volutpat pellentesque ligula. Vestibulum ac iaculis orci. Nunc tincidunt augue eget metus porta, ac vehicula ipsum fermentum. Phasellus ut pellentesque libero, id dapibus augue. Suspendisse id porta velit. Quisque aliquet faucibus pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>';
	samplePageContent += '<p>Sed vitae ante accumsan, consequat velit id, posuere libero. Phasellus enim arcu, fermentum hendrerit tristique nec, feugiat tempus justo. Etiam pellentesque, augue vel gravida gravida, ipsum ipsum feugiat urna, ac condimentum arcu turpis nec odio. Nam lacus est, aliquam a tortor ut, ultricies posuere ligula. Integer varius accumsan porttitor. Fusce feugiat ornare semper. Donec sed nunc id neque ullamcorper scelerisque. Integer ultrices sapien in bibendum finibus.</p>'
	
	pageTitle = samplePageTitle;
	if (this.get('pageName')){
		pageTitle = '<h2>'+this.get('pageName')+'</h2>';
	}

	pageContent = pageTitle + samplePageContent;
	this.set('pageContent', pageContent);
};

statcPageComponent.state.message = function(){
	return this.get('pageContent');
};

//headerComponent
var headerComponent = FlowComponents.define('header',function(props){
});

//mainComponent
var mainComponent = FlowComponents.define('main',function(props){
	this.set('template',props.template)
});

mainComponent.state.message = function(){
	return this.get('template');
};

//footerComponent
var footerComponent = FlowComponents.define('footer',function(props){
});

//loginComponent
var loginComponent = FlowComponents.define('login',function(props){
});

//roomComponent
var roomComponent = FlowComponents.define('room',function(props){
});

//whosOnlineComponent
var whosOnlineComponent = FlowComponents.define('whosOnline',function(props){
});

//editorComponent
var editorComponent = FlowComponents.define('editor',function(props){
});

//discussionComponent
var discussionComponent = FlowComponents.define('discussion',function(props){
});