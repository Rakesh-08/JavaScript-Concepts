  // practice Questions

/*
let temp1 = 22 ;
let raining = "N";

if (temp >20 && temp< 25 && raining =='N') { 
    
    console.log('you can go to park');
} else if ( temp>18 && temp< 20 && raining == 'y'){
    
    console.log( 'play in the playschool itself');
    
} else {
     console.log( 'don"t come out of your home');
}



     // HCF/GCD of two numbers


let num1 = 18;
let num2 = 12;

let temp = num1>num2? num2:num1;

//while( temp>=1){
    
//    if(num1 % temp == 0 && num2 % temp == 0){
 //       console.log('hcf of numi and numj : ' + temp)
 //   ; break;}
 //   
//    temp-- ;}

for( temp ; temp>=1;) {
    if(num1 % temp == 0 && num2 % temp == 0){
    console.log('hcf is : ' + temp); break;}
    temp--;}

let str ='MyHero' ;
let L = str.length ;
let result= '';
for ( i= L-1 ; i>= 0; i-- ){
    result = result + str[i] ;
    
} 
console.log(result)  */




// power of numbers

let n, m;

let pow= function(n,m){
 let result=1;

 for(i=0; i<m; i++){
  result= result*n
 }return result;
}

pow(4,2);

              // Inner sum of digits

let innersum =function(num){
 let result=0;
 num=Math.floor(num/10)

 while(num>10){
  let digit =num%10;
  num= Math.floor(num/10);
  result = result + digit;
 } return  result ;
}





//nth order fibannacci problem-- ( 0,1,1,2,3,5,8,13,21,34......)

function fibannacci(n){

 let n1= 0 , n2= 1, n3 ;
 i=1;
 while( i<= n-2){
 n3 = n1+n2 ; 
  n1=n2;
  n2= n3;

  i++ ;
 }
 
  return n3;
}

let FIB = fibannacci;
FIB(11)
   
