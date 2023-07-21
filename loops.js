for(let i= 0; i<10; i++){
    console.log(i);
};

let num = 7;
let prime = true;
for(let i =2; i<7; i++){
    if(num%i === 0){
        console.log('not prime');
        prime = false;
        break;
    }
};

if(prime) console.log('prime');