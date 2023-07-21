//reverse a number

let num = 238653;
let rev = 0;

while(num>0){
    console.log('rev', rev);
    console.log('num', num)
    let r = num%10;
    rev = rev*10 + r;
    num = parseInt(num/10);
}
console.log(rev)
console.log(num)