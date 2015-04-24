# Flow Router Chat Example

Sample Chat App

* Custom GitHub Login 
* Flow Router : meteorhacks:flow-router
* Flow Components : meteorhacks:flow-components

![alt tag](https://raw.githubusercontent.com/flow-examples/flow-router-chat-example/master/public/images/screenshot.png)

## How To

### Step 1 : Create GitHub Application
(If you haven’t GitHub Account already, you need to create one first.)

* Login Your GitHub Account
* Open ‘Settings’ Page
* Go Applications Tab
* Click ‘Register a new application’ link
* Register an application as follows
* Copy and save 'Client ID' and 'Client Secret'

![alt tag](https://raw.githubusercontent.com/flow-examples/flow-router-chat-example/master/public/images/github.png)

### Step 2 : Update config.js

* Open server/config.js on project folder
* Update the Client ID and Client Secret on config.js

```javascript
ServiceConfiguration.configurations.remove({
  service : 'github'
});

ServiceConfiguration.configurations.insert({
  service : 'github',
  clientId: ‘<CLIENT_ID>',
  secret  : ‘<CLIENT_SECRET>'
});
```

That’s all. :-).