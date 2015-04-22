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