// statcPageComponent
var statcPageComponent = FlowComponents.define('page',function(props) {
});

statcPageComponent.state.pageContent = function(){
	return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur diam sed ipsum hendrerit finibus. Aenean purus leo, tristique at erat a, viverra consequat lacus. Nulla imperdiet convallis dapibus. Vivamus blandit at sapien at feugiat. Morbi volutpat pellentesque ligula. Vestibulum ac iaculis orci. Nunc tincidunt augue eget metus porta, ac vehicula ipsum fermentum. Phasellus ut pellentesque libero, id dapibus augue. Suspendisse id porta velit. Quisque aliquet faucibus pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';
};

statcPageComponent.state.pageTitle = function(){
	return 'Page Title';
};