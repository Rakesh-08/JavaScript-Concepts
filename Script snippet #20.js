/*

function arrayPrint(arr){

    if(arr.length== 1){
        console.log(arr[0]);
        return;
    }
let a1= arr.slice(0, arr.length/2)
     arrayPrint(a1)
    
    let a2= arr.slice(arr.length/2,arr.length)
     arrayPrint(a2)
    
}

arrayPrint([1,2,3,4,5,6,7,8])

function Med(a1,a2){
    
    i=0;
    j=0;
    result=[]
    while(i<a1.length && j< a2.length){
        if(a1[i]<a2[j]){
            result.push(a1[i])
            i++;
        }else {
            result.push(a2[j])
            j++;
        }
    }
    while(i<a1.length){
        result.push(a1[i])
        i++;}
         
    while(j<a2.length){
        result.push(a2[j])
        j++;}
    let median;
    let n=result.length
    
    if(n%2==0){
      median = ( result[n/2] +result[n/2-1])/2
    } else{
       median = result[(n+1)/2 -1] 
    }
    console.log(result)
    return median;
}

//inversion counts in a array

function mergeSort(arr, start, end) {
  if (start == end) {
    return 0;
  }

  let mid = Math.floor((start + end) / 2);
  let leftCount = mergeSort(arr, start, mid); // [8]
  let rightCount = mergeSort(arr, mid + 1, end); //[7]
  return merge(arr, start, mid, mid + 1, end) + leftCount + rightCount; // [7,8]
}

function merge(arr, s1, e1, s2, e2) {
  let result = [];
  let count = 0;

  let i = s1;
  let j = s2;

  while (i <= e1 && j <= e2) {
    if (arr[i] < arr[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
      j++;                        // s1     e1   s2  e2
        count+= e1-i+1;    //[111111[1,8,10,12] [2,4,5] 77777777]
    }                              //  i         j       
  }                          //[1, 2]

  while (i <= e1) {
    result.push(arr[i]);
    i++;
  }

  while (j <= e2) {
    result.push(arr[j]);
    j++;
  }

  let k = 0;
  for (let i = s1; i <= e2; i++) {
    arr[i] = result[k];
    k++;
  }
    return count;
}
*/


function mergeSort(arr, start, end) {
  if (start == end) {
    return 0;
  }

  let mid = Math.floor((start + end) / 2);
  let leftCount = mergeSort(arr, start, mid); // [8]
  let rightCount = mergeSort(arr, mid + 1, end); //[7]
  return merge(arr, start, mid, mid + 1, end) + leftCount + rightCount; // [7,8]
}

function merge(arr, s1, e1, s2, e2) {
  let result = [];
  let count = 0;

  let i = s1;
  let j = s2;

  while (i <= e1 && j <= e2) {
    if (arr[i] < arr[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
            for(let k = i; k<=e1; k++) {
                if(arr[k] > arr[j]*2) {
                    count+= e1-k+1;
                    break;
                }
            }
        j++;
        }    

        
    }                             
                        

  while (i <= e1) {
    result.push(arr[i]);
    i++;
  }

  while (j <= e2) {
    result.push(arr[j]);
    j++;
  }

  let k = 0;
  for (let i = s1; i <= e2; i++) {
    arr[i] = result[k];
    k++;
  }
    return count;
}


