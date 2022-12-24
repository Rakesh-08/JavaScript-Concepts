//  PROBLEMS  BASED ON RECURSSION 


/*

function fib(n){
    let n1=0;
    let n2=1;
    let n3;

   for(i=2; i<=n;i++){
        n3=n1+n2
        n1=n2;
        n2=n3;
    }
    return n3 ;
}

// fibanacci function using recurssion function

function fibanacci(n){
    if(n==0||n==1)
        return n;
    return fibanacci(n-1) + fibanacci(n-2)
}

/*
function printNTo1(n) {
    function test(x) {

        if(x == n+1) {
            return
        } 
        
        test(x+1);
        console.log(x);
    }
    test(1);
}

function isSorted(arr) {

    function helper(arr, i) {
        if(i == arr.length) {
            return true;
        }
        if(arr[i] > arr[i+1]) {
            return false;
        }
        return helper(arr, i+1);
    }

    return helper(arr, 0);
    
}


   */


    //Binary tree --- reference type data structure


n1={
   value:1,
   left:null,
   right:null
}

n2={
   value:2,
   left:null,
   right:null
}
n3={
   value:3,
   left:null,
   right:null
}
n4={
   value:4,
   left:null,
   right:null
}
n5={
   value:5,
   left:null,
   right:null
}

n6={
   value:6,
   left:null,
   right:null
}

n7={
   value:7,
   left:null,
   right:null
}

n8={
   value:8,
   left:null,
   right:null
}

n9={
   value:9,
   left:null,
   right:null
}


n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.left = n6
n3.right = n7
n4.left = n8
n4.right = n9

//printing the leafs of binary tree from left to right


function PrintLeafs(RootNode){
   if(RootNode.left==null && RootNode.right ==null){
      console.log(RootNode.value)
   }
   if(RootNode.left!= null ){
      PrintLeafs(RootNode.left)
   }
   if(RootNode.right != null ){
      PrintLeafs(RootNode.right)
   }
}


console.log(PrintLeafs(n1)) ;


function IsPal(str){
   if(str.length<=1){
      return true;
   }
   let lastIndex = str.length-1
   if(str[0]!= str[lastIndex]){
      return false;
      
   }else{
      return IsPal(str.slice(1,lastIndex))
   }
      
}

/*

function SumTri(arr){
    if(arr.length==1){
        return console.log(arr);
        
    }
    let Arr1=[]
    for(i=0; i< arr.length-1; i++){
        Arr1[i]= arr[i] + arr[i+1]
    }
    
      SumTri(Arr1)
    console.log(arr)  
   
}

SumTri([1,2,3,4,5,6,7,8]);         */


let PrintAllSubsequence= function(array){
    
    
    function helperFunction(result,i,array){
       if(i==array.length){
           console.log(result)
           return;
       } 
        result.push(array[i])
       helperFunction(result,i+1,array)

         result.pop(array[i])
       helperFunction(result,i+1,array)
         
    }
     helperFunction([],0,array)
    
 }
 
PrintAllSubsequence([1,2,3]);


function jarvis(n, str, o, c, result) {
    if(str.length == n*2) {
        result.push(str);
        return;
    }
    if(o == 0) {
        str = str + "(";
        jarvis(n, str, o+1, c, result);
        return result;
    } else if(o == n) {
        str = str + ")";
        jarvis(n, str, o, c+1, result);
    } else {
        jarvis(n, str + "(", o+1, c, result);
        if(o != c)
            jarvis(n, str + ")", o, c+1, result);
    }
    
    
}

jarvis(4, "", 0, 0, [])



function findLexicographic(n) {
    let sol = [];
    lexNumbers(1, n, sol) ;
    return sol;
}

function lexNumbers(temp, n, sol) {
    if(temp >n)
        return;
    sol.push(temp);
    lexNumbers(temp*10, n, sol);
    if(temp % 10 !== 9)
        lexNumbers(temp+1, n, sol);
}

findLexicographic(15);