/*

var findMin = function(nums) {
    let mid= Math.floor(nums.length/2)
    let L= nums.length-1
    let low= nums[0];
    let high= nums[L]
    
    if(low<high ||L==0){
        return nums[0];
    }
    if(L==1){
        let Res= Math.min(nums[0],nums[1])
        console.log(Res)
            return;
        
    }
    if(nums[mid-1]<nums[mid] && nums[mid]<nums[mid+1]){
        
        if(nums[mid]>high){
            findMin(nums.slice(mid+1,L+1))
        }
        else{
             findMin(nums.slice(0,mid))
        }
    }else if(nums[mid]<nums[mid-1]){
        return nums[mid];
        
    }else if(nums[mid]>nums[mid+1]){
        return nums[mid+1];
    }
    
};

findMin([2,1])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var findMin = function(nums) {
    let mid= Math.floor(nums.length/2)
    let L= nums.length-1
    let low= nums[0];
    let high= nums[L]
    let min;
    
    if(low<high ||L==0){
        min= nums[0];
        return min;
    }
    if(L==1){
        min=(Math.min(nums[0],nums[1]))
        return min;
    }
    
     if(nums[mid]<nums[mid-1]){
        min=nums[mid]
         return min;
        
    } else if(nums[mid]>nums[mid+1]){
        min=nums[mid+1] 
         return min;
        
    } else if(nums[mid]>high){
            return findMin(nums.slice(mid+1,L+1))
        }
      else if(nums[mid]<high){
             return findMin(nums.slice(0,mid))
        
    }
    
    
}
    
findMin([2,1])*/





in_place_merge(arr, l, middle, r)
{
let start2 = middle + 1;
if (arr[middle] <= arr[start2])
{
return;
}
while (l <= middle && start2 <= r)
{
if (arr[l] <= arr[start2])
{
l++;
}
else
  {
let val = arr[start2];
let index = start2;
while (index != l)
{
arr[index] = arr[index - 1];
index--;
}
arr[l] = val;
l++;
middle++;
start2++;
}
}
}


///////////////////////////////////////////////////////


const swap = (arr, left, right) =>  {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp;
}

const partitionHigh = (arr, low, high) => {
  //Pick the first element as pivot
  let pivot = arr[high];
  let i = low;
  
  //Partition the array into two parts using the pivot
  for(let j = low; j < high; j++){
    if(arr[j] <= pivot){      
      swap(arr, i, j);
      i++;
    }
  }
  
  swap(arr, i, high);
  
  //Return the pivot index
  return i;
}

const iterativeQuickSort = (arr) => {
  //Stack for storing start and end index
  let stack = [];
  
  //Get the start and end index
  let start = 0;
  let end = arr.length - 1;
  
  //Push start and end index in the stack
  stack.push({x: start, y: end});
  
  //Iterate the stack
  while(stack.length){
    //Get the start and end from the stack
    const { x, y } = stack.shift();
    
    //Partition the array along the pivot
    const PI = partitionHigh(arr, x, y);
    
    //Push sub array with less elements than pivot into the stack
    if(PI - 1 > x){
      stack.push({x: x, y: PI - 1});
    }
    
    //Push sub array with greater elements than pivot into the stack
    if(PI + 1 < y){
      stack.push({x: PI + 1, y: y});
    }
  }
}

let arr = [10,7,9,1,3,2,8,4, 1, 5];
iterativeQuickSort(arr);
console.log(arr);

