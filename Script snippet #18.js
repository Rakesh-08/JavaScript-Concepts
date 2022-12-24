/*
/////buble and insertion sort is faster than merge in case of almost sorted arrays

function maze(i,j,r,c) {
    if(i==r && j == c) {
        return 1;
    }
    let down = 0;
    let right = 0;
    if(i<r) 
        down = maze(i+1, j,r,c);
    if(j < c)
        right = maze(i,j+1,r,c);
    return down + right;
    
}





// Permutation problem using recurssion

function permutation(result, arr, bag, map) {
    if(bag.length == arr.length) {
        result.push(bag.join(""));
        return;
    }
    for(let i = 0; i<arr.length; i++) {
        if(!map[i]) {
            bag.push(arr[i]);
            map[i] = true;
            permutation(result, arr, bag, map);
            bag.pop();
            map[i] = false;
        }
    }
    return result;
}


let str = "abac";
permutation([], str.split(""), [], {});

function bubbleSort(arr) {

            
              //sorting algorithm----->  
    
    
    
   
  

//SMART BUBBLE SORTING FOR NEARLY SORTED ARRAY

function bubblesort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let flag = false;
        for (let j = 0; j < (arr.length-i-1); j++) { 
            if(arr[j]>arr[j+1]){ 
                flag = true;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } 
        } 
        if(!flag) {
            break;
        }
    } 
    console.log(arr) ;
}

//SELECTION SORTING

function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let smallest = i;
        for(let j=i; j<arr.length; j++) {
            if(arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
       if(smallest!=i){
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;}

    }
}

let arr=[4,3,6,2,1];
selectionSort(arr);
console.log(arr);



// INSERTION SORTING


function insertionSort(arr) {
    for(let i = 1; i<arr.length; i++) {
        let temp = arr[i];
        
        let j = i-1;

        while(j>=0 && arr[j] > temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}

let arr = [37, 25,22, 24, 26];
insertionSort(arr);

*/


// Merge sorting

function mergeSort(arr) {
    if(arr.length == 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));// [8]
    let right = mergeSort(arr.slice(mid));  //[7]
    return merge(left, right); // [7,8]
}

function merge(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}


// better version of merge sort

function mergeSort(arr, start, end) {
    if(start == end) {
        return;
    }

    let mid = Math.floor((start+end)/2);
    mergeSort(arr, start, mid);// [8]
    mergeSort(arr, mid+1, end);  //[7]
    return merge(arr, start, mid, mid+1, end); // [7,8]
}

function merge(arr, s1, e1, s2, e2) {
    let result = [];

    let i = s1;
    let j = s2;

    while(i <=e1 && j <= e2) {
        if(arr[i] < arr[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr[j]);
            j++;
        }
    }

    while(i <= e1) {
        result.push(arr[i]);
        i++;
    }

    while(j <= e2) {
        result.push(arr[j]);
        j++;
    }

    let k = 0;
    for(let i = s1; i<=e2; i++) {
        arr[i] = result[k];
        k++;
    }
}


//QUICK SORT USING START ELEMENT AS PIVOT

function quickSort(arr,start, end) {
    if(start >= end) {
        return;
    }

    let pivot = start;
    let count = 0;
    let found = -1;
    for(let i = start+1; i<=end; i++) {
        if(arr[i] <= arr[pivot]) {
            if(found!= -1) {
                swap(arr, i, found);
                found++;
            }
            count++;
        } else if(found == -1){
             found = i;
        }
    }
    swap(arr, pivot, pivot + count);
    quickSort(arr, start, pivot + count-1);
    quickSort(arr, pivot + count+1, end);
    
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [2,4,5,3,8,21,4,13,20,11];
quickSort(arr, 0, 9);



// QUICK SORTING USING MIDDLE ELEMENT AS PIVOT      

function quickSort(arr) {
    sort(arr, 0, arr.length-1);
}

function sort(arr, left, right){

    if(left>=right) return;
    
    let start = left;
    let end = right;
    let mid = Math.floor((end+start)/2);
    let pivot = arr[mid];

    while(start<end) {
        while(arr[start] < pivot) {
            start++;
        }
    
        while(arr[end] > pivot) {
            end--;
        }
    
        if(start<=end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }
    sort(arr, left, end);
    sort(arr, start, right);
}


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
