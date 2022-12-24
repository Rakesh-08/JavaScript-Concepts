/*

let name= ['a' ,'b' , 'c' , 'd' , 'f'];

for(let kings of name){
    console.log(kings)
}

let P1 ={

    name :'rakesh',
    age: 23,
    sex : 'male'
}


for(let demo in P1){
    console.log( demo + ' :'  + P1[ demo])}


let add = function(n1,n2){
    return n1 + n2 ;
}
add(4,6);

 let add1 =(num1,num2)=> num1 +num2 ;

add1(9,2);

*/
let nums =[1,2,4,8,5]

 nums.map(n=> n*2);


nums.filter(n=> n%2== 1);


nums.reduce((sum,n) => sum*n);
nums = nums.reduce((sum,n) => sum*n);
nums;

let nums1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

    
];



let columnSum = nums1.reduce((carry, row) =>{
    let result = [];
    for(let i = 0; i < carry.length; i++) {
        result[i] = carry[i] + row[i];
    }
    return result;
});

console.log(columnSum);

let nm = [43,6,50,11,34,23,90];
nm.sort();
nm.sort((a,b) => a-b);
nm.sort((a,b) => b-a);


let name =[2,4,6,'add', 'sub' ,7,9,]
name.slice(2,6);
name.splice(1,2);
name;

// split is a string related function ----> split converts strings into an array

let hero = '   smnhdj  , dhdfkjs  ,   sjhd ,djdjdnj       ,djdjddddd     '
hero.split('');
hero.split('d');

hero.trim();  //---> it will only trim the gaps in the start and end of strings

 hero.split(',');
 hero.split(',').map(n=> n.trim());
name.reverse();



let obj ={
 name: 'rakesh' ,
 age: 23 ,
 add:'sonia vihar'
}

let Newobj={mob:84448,  ...obj}; //---> spread or rest operator
obj;
Newobj;

let { age,add} = obj

age
add
Newobj.mob;

let{age:umar, add:pata} = obj
umar;
age;// the new var will work instead of initial

let n = [43,6,50,11,34,23,90];

let [f,s,t,...r] = n;
f;
t;
let R=[ ...r];
R