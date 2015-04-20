if (People.find().count() === 0){
    People.insert({
        id:1,
        screen_name: 'admin',
        password: 'pass',
        login_status: 0
    });
}

if (Discussion.find().count() === 0){
    Discussion.insert({
        id:1,
        screen_name: 'admin',
        msg: '#Chat Started'
    });
}
