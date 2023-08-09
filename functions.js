function addnums(a,b){
    var c = a+b;
    console.log(c);
};
addnums(35,34);
//console.log(c);

const getPercentage = function(m1, m2, m3, m4, m5=90){
    let percent = (m1+m2+m3+m4+m5)/5;
    //console.log(percent);
    return percent;
}
const res = getPercentage(80,90,70,60,50);
console.log(res);

//Arrow Function
const getFactorial = (n) => {
    let f= 1;
    for(i=2; i<=n; i++){
        f = f*i;
    }
    return f;
};


//Reccursion
const getFactorialwithRec = (n) =>{
    if(n==0 || n==1){
        return 1;
    }
    let f = getFactorialwithRec(n-1)*n;
    return f;
};
const ans = getFactorial(5);
const ans2 = getFactorialwithRec(5);
console.log(ans);
console.log(ans2);
