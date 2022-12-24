// Raintapping , group anagrams given in a array of strings and minimum window substring Problem on leetcode






function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,-4,5,3,23])




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1


// KTH HIGHEST IN A ARRAY ---->>( WORST CASE N^2 AND  BEST CASE N TIME COMPLEXITY)

function kHighest(arr, k) {
    let c = 1;

    let map = {};
    let max;
    let index;
    let map1 = {};
    
    
    while(c<=k) {

        while(true) {
            if(!map[i]) {
                max = arr[i];
                index = i;
                break;
            }
            i++;
        }

        for(let i = 0; i<arr.length; i++) {
            if(!map[i] && arr[i] > max) {
                max = arr[i];
                index = i;
            }
        }
        map[index] = c;
        map1[c] = index;
        c++;
    }

    return arr[map1[k]];
}



//QUICK SELECT ALGORTHIM



function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, k, left = 0, right = arr.length -1){
    if(left <= right){
      let h= arr.length-k
        let pivotIndex = pivot(arr, left, right);
        if(pivotIndex == h) {
            return arr[h]
        } else if(pivotIndex<h) {
            return quickSort(arr,k,pivotIndex+1,right);
        } else {
            return quickSort(arr,k, left,pivotIndex-1);
        }
      }
} 
           
quickSort([4,6,9,1,2,65,79,45,5,3], 1);


// Radix sort algorithm( Non-comparision sorting)----->>  O(n) Time COMPLEXITY


function RadixSort(arr,m,l){
   
   
   if(m>l){
      console.log(arr)
     return ;
   }
    
    let HashMap ={0:[],
                  1:[],
                  2:[],
                  3:[],
                  4:[],
                  5:[],
                  6:[],
                  7:[],
                  8:[],
                  9:[]
        }

    
    for(let i=0; i<arr.length; i++){
       let s=arr[i].toString()
        let unPl =s[s.length-m]
        if(s.length-m>=0){
       HashMap[unPl].push(arr[i])}
        else{
      HashMap[0].push(arr[i] )
       }
        
        if(s.length>l && c<2){
            l=s
        }
       
}

    arr.length=0
    for(let values in HashMap){
        if(HashMap[values].length!= 0){
        arr=arr.concat(HashMap[values])
            HashMap[values].length=0
        }
        
    }
   m++
   RadixSort(arr,m,l)
   
    
    
   
}
let an= [3,2,694,9,25,00001,978,98718,58,10000]
RadixSort(an,1,5)












