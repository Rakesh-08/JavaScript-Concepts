/* if-else operator -> single line comment

let gender= "m";

if(gender="m") {
    console.log('male')
}else{
    console.log('female')
}


 //ternary operator
let gender1= 'm'? console.log('male') : console.log('female');


// Practice problems

let a= 100, b=15, c=0;

if(a>b &&  a>c) {
 console.log( a)
}else if(b>a && b> c){
 console.log(b)}
else {
 console.log(c)
}


/* agbahsdbdlkabskbjsbvcls
cvskhcsbvvhsvsdvnl               -> multi line comment
sbsdjnvsvnsv
*/

for( i=0; i<15; i++){
 console.log('Hello')
}

function isPrime(n)
{
 for(let i=2;i<=Math.sqrt(n);i++)
 {
 if(n%i==0) return false;
 }
 return true;
}
function sumPrime(n) {
 for( i=2;i<=n/2;i++)
 {
 if( isPrime(i) && isPrime(n-i) )
 {
 console.log(i, n-i);}
 }
}


sumPrime(40)