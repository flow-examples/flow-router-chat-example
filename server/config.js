ServiceConfiguration.configurations.remove({
  service : 'github'
});

ServiceConfiguration.configurations.insert({
  service : 'github',
  clientId: '<CLIENT_ID>',
  secret  : '<CLIENT_SECRET>'
});