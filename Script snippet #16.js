/*
Xor operator in bits/ binary  language (0,1)

let k=24 //decimal form

 // converting decimal into binary form----->>  1*0  + 2^1*0 + 2^2*0  + 2^3*1  + 2^4*1 + 2^5*0  + ..............

k= 11000

 24 & 48 in binary form will be calculated as ---->

 24--->   11000 &   similarly       11000 |
 48--->  110000                    110000
       =  010000 ( 16 )        =   111000 ( 56 )


In XOR (^) if both are same give 0 and if different give 1 such as 
 
24^ 48 will give     11000 ^
                    110000
                 =  101000 ( 40)     */


let nums = [5,10,4,20,15];

// for(let i = 0; i<nums.length-1; i++) {
//     for(let j = i+1; j<nums.length; j++) {
//         if(nums[i] + nums[j] == 19) {
//             console.log(i + " " + j);
//         }
//     }
// }

let map = {};
let target = 19;
for(let i = 0; i<nums.length; i++) {
    if(map[target - nums[i]]) {
        console.log(map[target - nums[i]] + " " + i);
    } else {
        map[nums[i]] = i;
    }

}

let Arr= [3,4,1,3,3,3];   

/* function test(nums) {

    let map = {};
    
    for(let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    
    for(let value of Object.values(map)) {
        if(value > nums.length/2) {
            return true;
        }
    }
    return false;

}*/
function MajElem (arr){
 let obj ={}

 for(i=0; i<arr.length;i++){
  obj[arr[i]] =  (obj[arr[i]] ||0) +1
 }
 for(let maj in obj){
  if(obj[maj] >arr.length/2){
   return  +(maj)
  }
 }
 return'no major element found'
}
MajElem(Arr)

  

function test(a1, a2) {
    let i = 0;
    let j = 0;

    let result = [];

    while(i<a1.length && j<a2.length) {
        if(a1[i] == a2[j]) {
            result.push(a1[i]);
            i++;
            j++;
        } else if(a1[i] > a2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return result;
}


function IntersectionArray(a1,a2){
 let result=[]

 let map1={}

 for(let key of a1){
  map1[key] =(map1[key]||0) +1
  
 }
 for(let key1 in a2){
  if(map1[key1]){
   result.push(key1)
   (map1[key1])--;
  }
 else { map1[key1] =(map1[key1]||0) +1}

 }return result
 
}

IntersectionArray([2,5,6,2,6,9,3], [9,1,3,2,7]);