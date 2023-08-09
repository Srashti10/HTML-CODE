const user = {name : 'Raju', email : 'raju@mail.com', password : '5678' };
console.log(user.name);
console.log(user['email']);
user.address = 'Lucknow'; //add new value
console.log(user);
user.password = '2345'; // update old value
console.log(user);

let customkey = 'email';
console.log(user[customkey]);
