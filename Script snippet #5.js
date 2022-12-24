/* function declaration

function add(num1,num2) {
   // console.log( num1 +num2);

   return num1+ num2  ;
}

let sum= add( 100,8) ;  // function invocation or calling a function
console.log( 'i am having  ' + sum + ' dollars in my pocket') */


function calculate ( num1, num2, oper){
let result = 0 ; 
 
 if( oper== 'add'){
 result= num1 + num2;
  
 }else if( oper=='sub' ){
  result= num1 - num2;
  
 }else if( oper== 'mul'){
 result= num1 * num2;
  
 }else if ( oper=='div'){
 result= num1/num2;
 }
 
 return result;
}

  calculate (10,5, 'div');

  