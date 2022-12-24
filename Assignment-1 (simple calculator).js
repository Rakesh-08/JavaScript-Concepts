                         //codes for simple basic Calculator

let calculate = function(num1,num2,operation){

   switch(operation) {
           
       case 'add' : return num1 + num2;
        
   
       case 'sub' : return num1 - num2 ;
        
   
       case 'mul' : return num1 * num2 ;
        
   
       case 'div' : return num1 / num2 ;
    }

}

// performing the arithmetic operations  or calling the calculate function

let add = calculate ( 90,9, 'add');
let sub = calculate ( 90,9, 'sub');
let mul = calculate ( 90,9, 'mul');
let div = calculate ( 90,9, 'div');

console.log('Res1 is: ' + add) ;
console.log('Res2 is: ' + sub) ;
console.log('Res3 is: ' + mul) ;
console.log('Res4 is: ' + div) ;
