
 const nums =[6852,696,521,9622,2,684];
 const newnums = [];
 for(let i of nums){
    console.log(i**2);
    newnums.push(i**2);
 }
 console.log(newnums);
 //Map Function

 const result = nums.map((n) => {return n**2});

const prices = [3400,2347,99,27,494,988]
const result2 = prices.map((p) => {return p + p*0.1});
console.log(result2);

const result3 = prices.map((p) => {return p - 0.075*p});
console.log(result3);

//use map to get the prices in integer format
const prices2 = ['$67.89', '$348.99', '$29384.22', '$4.102', '$1.241'];
const result4 = prices2.map((w) => {return parseInt(w.slice(1))});
console.log(result4);

//.toUppercase()
//.split('.')



//convert the names of the array in uppercase
const names = ['riya', 'bani', 'ritu','soumya'];
const result5 = names.map((n) => n.toUpperCase());
console.log(result5);


const fullname = ['Raju Rastogi', 'Kali Charan', 'Prem Chopra'];


// print square root of the element of the array

