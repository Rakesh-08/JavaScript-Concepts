/*
// iterative statements

//  while loop

let num= 5;
let count  = '7';

while(count> 0){
    console.log( num)
    count-- ; // count =count-1;
}

console.log(" print whatever youn want at the end")

//while(true) or infinite run may hang your browser


//for loop

for(let count=0; count<= 10; count++){
    console.log("hello everyone")
}
*/

// nested for-loop


    
  for (let PlaygroundRound = 0 ; PlaygroundRound <=10; PlaygroundRound++){
      console.log('i am running round  ' + PlaygroundRound  +' in ground')
      
      for (  let tableRound =0; tableRound<= 5; tableRound++) {
          console.log('i am running round  ' + tableRound + ' of table' )
          
         for ( let chair= 0; chair<= 5; chair++){
            console.log('i am running round  ' + chair + ' chair')
        }
      }
  }


// Do while loop

let points= 0;
i= 2;

do{console.log( 'take chocolate ' + i) ;
    i++;
  } while ( i<= points);