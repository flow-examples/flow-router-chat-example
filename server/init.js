if (People.find().count() === 0) {
  People.insert({
    id:1,
    screen_name: '#Op',
    login_status: 0
  });
}

if (Discussion.find().count() === 0) {
  Discussion.insert({
    id:1,
    screen_name: '#Op',
    msg: '--Chat Started--'
  });
}