let Products = [ 'laptop', 'TV' , 'smartphone' , 'washing machine' , 'fridge'];



let loc= function(requestedProduct){

for( i=0 ; i< Products.length ; i++){
 if( Products[i] == requestedProduct){
  return i;}
 
} return 'not found' ;
}



while(true){

alert('Do you want to buy electronic gadegts')
alert( 'choose from the given list  :'  + Products);
let requestedProduct = prompt('Enter the product');

 let index = loc(requestedProduct);
  purchase= Products.splice( index, 1 );
     alert('purchase completed. Enter "exit" to exit or select from availlable products') 
     
 let continueORnot= prompt('type "exit" or "continue"');

 if( Products.length == 0){
  alert(' sorry ! we are out of stock');break;
 }

 
 if( requestedProduct== 'exit' || continueORnot == 'exit' ){
  alert('you have left the shopping app');break;
 

}
 
}


// calling function inside the object for function created outside the object

let repairMan = {
    name: "Mannu",
    mob: 123,

    call: function() {
        console.log("calling mannu on 123");
    }
}

let technician = {
    call: function() {
        console.log("Dummy guy");
    }
}


let car = {
    name: 'ferrari',
    model: 2019,
    fuelType: 'petrol',
    technician: repairMan,

    
    run : function() {
        console.log("Wroom wroom");
    },
    
    brake: function() {
        console.log("Stopping the car");
    },

    emergency: function() {
        this.technician.call();
    }
}



