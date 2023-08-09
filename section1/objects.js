const user = {name : 'Raju', email : 'raju@mail.com', password : '5678' };
console.log(user.name);
console.log(user['email']);
user.address = 'Lucknow'; //add new value
console.log(user);
user.password = '2345'; // update old value
console.log(user);

let customkey = 'email';
console.log(user[customkey]);

 let smartphone = {
    brand : 'Samsung',
    model : 'S21',
    price : 70000,
    color : 'Black'
 };
 smartphone.color = ['Black','White','Blue'];
 console.log(smartphone.color[2]);
 smartphone.color.push('Red');
 console.log(smartphone);


 const smartphoneList = [
   { brand : 'Samsung', model : 'S21', price : 70000, color: ['Black' , 'Blue']},
   { brand : 'Samsung', model : 'S23', price : 86000, color: ['Black' , 'Blue']},
   { brand : 'Apple', model : 'iphone12', price : 80000, color: ['White' , 'Red', 'Yellow']},
   { brand : 'OnePlus', model : '9 pro', price : 60000, color: ['Blue' , 'White']},
   { brand : 'OnePlus', model : '11 pro', price : 90000, color: ['Blue' , 'White']},
   { brand : 'Xiaomi', model : 'MI 11', price : 50000, color: ['Black' , 'Gold']},
 ]
 //price of oneplus 9 pro
 console.log(smartphoneList[2].price);
 //syntax to add blue color to mi 11
 smartphoneList[3].color.push('blue');
 console.log(smartphoneList);
 //delete last two colors from Apple
 smartphoneList[1].color.splice(1,2);
 console.log(smartphoneList);
 //use filter to get all phones with price less than 70000
 const filteredResult = smartphoneList.filter((phones) => {return phones.price < 70000})
 console.log(filteredResult);
 // use filter to get all phones of brand samsung
 const filteredResult1 = smartphoneList.filter((phones) => {return phones.brand.toLowerCase() === 'Samsung'.toLowerCase()});
 const filteredResult2 = smartphoneList.filter((phones) => {return phones.brand.toLowerCase().includes('Samsung'.toLowerCase())});
 console.log(filteredResult1);
 console.log(filteredResult2);
 //use filter to get all the phones with color blue
 const filteredResult3 = smartphoneList.filter((phones) => {return phones.color.includes('Blue')});
 console.log(filteredResult3);
 //use filter to get all the phones with color blue and price less than 70000
 const filteredResult4 = smartphoneList.filter((phones) => {return phones.color.includes('Blue') && phones.price < 70000});
 console.log(filteredResult4);
//use map to get all the brands from the object
 const  brands = smartphoneList.map((phone) => {return phone.brand});
 console.log(new Set(brands)); 
 