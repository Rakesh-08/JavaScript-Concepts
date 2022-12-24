/*

let arr=[[1,0,0,6],
         [0,5,2,0],
         [3,0,1,0],
         [0,0,4,1]]


function IsSparse(array=[]){
let count = 0;
    for(i=0; i<arr.length ; i++){
        for(j=0; j<arr[i].length ; j++){
            if(arr[i][j]==0){
                count++;
            }
        }
        
    }
   
    if(count> (arr.length*arr[0].length)/2){
        return true;
    }else{
        return false;
    }
    
}
IsSparse(arr);

let arr=[[1,0,0,6],
         [0,5,2,0],
         [3,0,1,0],
         [0,0,4,1]]


function IsSparse(array=[]){
let count = 0;
    for(i=0; i<arr.length ; i++){
        for(j=0; j<arr[i].length ; j++){
            if(arr[i][j]==0){
                count++;
            }
        }
        
    }
   
    if(count> (arr.length*arr[0].length)/2){
        return true;
    }else{
        return false;
    }
    
}
IsSparse(arr);

function seperatePosNeg(arr) {
    
    let s = 0;
    let p = arr.length-1;

    while(s<p) {
        if(arr[p] < 0) {
            p--;
        } 
        else if(arr[s] > 0) {
            s++;
        } else  {
            let temp = arr[p];
            arr[p] = arr[s];
            arr[s] = temp;
        }
        
    }
    return arr;
} */   

let A2 =[ 2,4,6,8,9,3,6,1]
let start= 0;
end = A2.length -1 ;
let temp;

while(start<end){
    temp = A2[start];
    A2[start] =A2[end];
    A2[end]=temp;
   start++;
    end--;
   
    
}
console.log(A2);