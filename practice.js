/*let ad = function (a,b){
     this.king ='rakesh'
    return a+b;
    
}
let r= new ad()
console.log(r.king)



function binaryOnes(num){

}
let bin=10110
binaryOnes(bin)



function MultipleOfTen(start = 0, end = Infinity, steps = 1) {
  let nextIndex = start;
  let result = 0;

  return {
    next: function () {
      if (nextIndex  < end-1) {
        result = (nextIndex + 1) * 10;
nextIndex+=steps

        return {
            
          value: result,
          Done: false,
        };
      } else {
          result = (nextIndex + 1) * 10;
        return {
          value: result,
          Done: true,
        };
        
      }
    },
  };
}

let iterator = MultipleOfTen(0, 6, 1)
console.log(iterator.next())
console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
console.log(iterator.next());
*/
let a=4;
letb=5;

console.log(a|b)
console.log(b|a)
console.log(a|b +b|a)