 /*let mobiles = ['galaxy', 'samsung' ,'iphone' , 'redmi' ];



 for(let i=0; i<mobiles.length ; i++){
  console.log( 'mobile' +i+ ' : ' +mobiles[i])
 }
for( let j=0; j<fruits.length ; j++){
 if( fruits[j]== 'banana' ){
  console.log( 'yes banana is there')}
   
} 


let fruits =['apple' , 'mango' , 'peeches' , 'grapes' , 'kiwi' ,'banana' ]



fruits.push('orange', 'hello' , 1234);

   push= adding element at the end of array list
   pop = removing element from the end of array list

unshift = adding element at the start of array list
shift = removing element from the  start of array list

splice = choose an interval from array that you want to remove (from, how many)


prompt('enter something')
'rakesh'
let demo = prompt( 'enter something')

demo;
'Rakesh is a good boy'  */

let s1= {
 name: 'rakesh' ,
 age :23 ,
 mobile: 8448,
 sex: 'male'
};

let s2 = {
 name : 'rahul',
 age : 25,
 mobile :8285,
 sex:'male'
}

s1.age= 28
s1.age;

s1["hobby"] = 'cricket' ;

s1.fruits=['apple' , 'mango' , 'orange'];

// Object.keys()[]---- functionining

Object.keys(s2);
(4) ['name', 'age', 'mobile', 'sex']

Object.keys(s2)[3]
'sex'

s2[Object.keys(s2)[3]]
'male'

//Object.entries()[]----functionining

Object.entries(s2);
(4) [Array(2), Array(2), Array(2), Array(2)]

Object.entries(s2)[3]
(2) ['sex', 'male']

Object.entries(s2)[3][1]
'male'


// Object.values()[]---functioning

Object.values(s2)
(4) ['rahul', 25, 8285, 'male']

Object.values(s2)[3]
'male'




let fruits = [['🍈','🍉'], ['🍒','🍓','🍍'], ['🍎'], ['🍐','🍊','🍌']];

for(let i = 0; i < fruits.length; i++) {
    for(let j = 0; j< fruits[i].length ; j++) {

        console.log(`Fruit in The floor number ${i} in flat number ${j} is ${fruits[i][j]}`);
    }
}

