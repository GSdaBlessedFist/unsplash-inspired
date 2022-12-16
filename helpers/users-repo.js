const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let users = require('../sample-user-database.json');

export const usersRepo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find: x => users.find(x),
    create,
    update,
    delete: _delete
};


function create(user) {
    // generate new user id
    // user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    user.id = users.length ? users.length + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    //The Object.assign() method copies 
    //all enumerable own properties from one or more 
    //source objects to a target object. 
    //It returns the modified target object.
    Object.assign(user, params);// <--.assign will tack on the params onto user
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('../sample-user-database.json', JSON.stringify(users, null, 4));
}