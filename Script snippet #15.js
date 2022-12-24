let A= [[1,5,27],
        [9,27,5],
        [27,27,1]]
let result =[];
for(i=0;i<A.length ;i++){
    let max=0;
    for(j=0;j<A[i].length ;j++){
        if(A[i][j] > max){
            max= A[i][j]}
    }result[i] =max
}

console.log(result);

let UniqueElement= function(A){

let hash={};
for(i=0; i<A.length ; i++){
    for(j=0;j< A[i].length;j++){
        
        hash[A[i][j]] =(hash[A[i][j]] || 0) +1 ;  // if(hash[A[i][j]] >= 1){
                                                 // hash[A[i][j]]++ ;   
                                                 //   }else{
                                                 // hash[A[i][j]] = 1}
            
        }

    }
    let KeyValue= Object.entries(hash);
   
    return KeyValue;
}
UniqueElement(A);


let CallByReference =function(human){
    human.name= 'dog'
}

let person={name:'cat',
           age:15}

CallByReference(person);
person;


let K= [1,4,6,7,9,0,2];
K.find(n=>n%2 == 1);

                                // CURRY function


const add = (a,b,c) => {
    return (a+b+c);
}

const curryAdd = sum => {
    return a => {
        return b => {
            return c=> {
                return sum(a,b,c);
            }
        }
    }
}

const addition = curryAdd(add);
console.log(addition(1)(2)(3));//6


/// arrow function does not have arguments as well as this keyword as the normal function


let person1 = {
    name: 'cat',

    printFunction: function () {
        console.log(arguments);
        console.log("Mr." + this.name);
    },

    print: () => {
        console.log(arguments);
        console.log("Mr." + this.name);
    }
}

 function king (n1,n2,hello ,cat ){
     let sum =0;
     sum= n1+n2;
     
     console.log(arguments)
     return sum;
 }

king(5,2);

lan();

 function lan(){
   
   console.log(h)
    var h= 'hello'   
   
    
}

//IMEDIATELY INVOKED FUNCTION EXPRESSION--(IIFE)



(function(name){
    console.log('hello ' + name)
}('cat')); // you can call the function inside or outside the whole bracket





// sorting involves time complexity so try to avaoid it whenever possible
function anagram(str1, str2) {
    if(str1.length != str2.length) return false;

    let map = {};

    for(let char of str1) {
        // map[char] = (map[char] || 0) + 1;
        if(map[char]) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
        }
    }

    for(let char of str2) {
        if(map[char]) {
            map[char] = map[char] - 1;
        } else {
            return false;
        }
    }

    return true;
}

/*
    anagram('funny' , 'nunfy')

function anagram(str1, str2) {
    if(str1.length != str2.length) return false;

    let arr1 = str1.split("");
    arr1.sort();

    let arr2 = str2.split("");
    arr2.sort();

    str1 = arr1.join("");
    str2 = arr2.join("");
    if(str1 == str2) {
        return true;
    }
    return false;
    
   
}*/