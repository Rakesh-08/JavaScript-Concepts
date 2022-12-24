/*
function hello() {
   
    function move(num, mun) {
        return num*mun ;
    }
    return move;
}


Math.floor(Math.random()*6 + 1);


//how does swaping works


let num1 = 25;
let num2 = 20;

let hall = num1 ;
num1 = num2;
num2 = hall ;


         // practice Questions


let temp1 = 22 ;
let raining = "N";

if (temp >20 && temp< 25 && raining =='N') { 
    
    console.log('you can go to park');
} else if ( temp>18 && temp< 20 && raining == 'y'){
    
    console.log( 'play in the playschool itself');
    
} else {
     console.log( 'don"t come out of your home');
}


let marksObtained = 5;

marksObtained >= 40 ? console.log('pass') : console.log( 'fail') ;

     // HCF/GCD of two numbers

let numi= 15;
let numj= 10;

let temp = numi>numj? numj:numi;

while( temp>=1){
    
    if(numi%temp == 0 && numj%temp == 0){
        console.log('hcf of numi and numj : ' + temp)
    }; break;
    
    temp-- ;
}






   let calculateLCM = function( num1,num2){
   greater= num1 >num2? num1: num2;

while( true){
 if ( greater% num1== 0 && greater%num2 == 0 ){
  result = greater; break;}
 greater++ ;
 }
    return result;
   }
   
let Lcm= calculateLCM   
Lcm(42,23)

      // sum of all digits of a numbers


let num= 87123;
result =0;

while(num!=0){
 let digit = num%10;
 num = Math.floor(num/10);
 result =result + digit;
}*/


//write an even no. A as a sum of two prime numbers for  A>2;

let IsPrimeNumber =function(m){

 for(j=2; j<m; j++)
  if(m%j == 0){
   return false;
  
 } return true;
}
function getSum(a){
 
 for( i=2; i<=a/2; i++){

  if( IsPrimeNumber(i) && IsPrimeNumber(a-i) ){
   
   console.log(i, a-i);
    }
  

 }
 
   }

getSum(44)


 