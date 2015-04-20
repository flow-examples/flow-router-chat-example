// statcPageComponent
var statcPageComponent = FlowComponents.define('page',function(props) {
	this.set('pageTitle',props.name)
	this.setPageContent();
});

statcPageComponent.prototype.setPageContent = function(){
	var pageContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur diam sed ipsum hendrerit finibus. Aenean purus leo, tristique at erat a, viverra consequat lacus. Nulla imperdiet convallis dapibus. Vivamus blandit at sapien at feugiat. Morbi volutpat pellentesque ligula. Vestibulum ac iaculis orci. Nunc tincidunt augue eget metus porta, ac vehicula ipsum fermentum. Phasellus ut pellentesque libero, id dapibus augue. Suspendisse id porta velit. Quisque aliquet faucibus pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';
	this.set('pageContent', pageContent);
};

statcPageComponent.state.pageTitle = function(){	
	return this.get('pageTitle');
};

statcPageComponent.state.pageContent = function(){	
	return this.get('pageContent');
};

//headerComponent
var headerComponent = FlowComponents.define('header',function(props){
});

headerComponent.state.loggedIn = function(){
	return Session.get('loggedIn');
};

//mainComponent
var mainComponent = FlowComponents.define('main',function(props){
	this.set('template',props.template)
});

mainComponent.state.componentName = function(){
	return this.get('template');
};

//footerComponent
var footerComponent = FlowComponents.define('footer',function(props){
});

//loginComponent
var loginComponent = FlowComponents.define('login',function(props){
});

loginComponent.action.onSubmit = function(pwd) {
	// Check for existing record.
    recExists = People.findOne({screen_name: Session.get('screenName'), password:pwd});
    
    if (!recExists) {
        // Insert Databse
        count = People.find().count();
        count++;

        People.insert({
            id: count,
            screen_name: screenName,
            password: pwd,
            login_status: 1
        });
    }

    FlowRouter.go('/room');
};

//roomComponent
var roomComponent = FlowComponents.define('room',function(props){
});

//whosOnlineComponent
var whosOnlineComponent = FlowComponents.define('whosOnline',function(props){
});

whosOnlineComponent.state.people = function(){
	return People.find();
};

//editorComponent
var editorComponent = FlowComponents.define('editor',function(props){
});

editorComponent.state.screenName = function(){
	return Session.get('screenName');
};

editorComponent.action.onSubmit = function(chatMsg) {
	// Insert Databse
	count = Discussion.find().count();
	count++;

	Discussion.insert({
	    id: count,
	    screen_name: Session.get('screenName'),
	    msg: chatMsg
	});
};

//discussionComponent
var discussionComponent = FlowComponents.define('discussion',function(props){
});

discussionComponent.state.discussion = function(){
	return Discussion.find({}, {sort: {id: -1}});
};