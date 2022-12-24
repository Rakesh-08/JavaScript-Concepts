/*
let Arr =[1,5,9,2,4,8,1,3,4,7,0,9  ]
let arr = Arr.sort();

let start= 0;
let end= (arr.length -1);
let Newarr =[];

for(i=0 ;i< arr.length ;i++){
	if( (i+1)%2==0){
		Newarr[i] = arr[end];
		end-- ;
		
	}else{
		Newarr[i] = arr[start];
		start++ ;
	}
}
console.log(Newarr);
Math.min;




let arr =[2,4,,8,0,1,19,5,6,13];
let max= Math.min ;
let min = Math.max ;

if(arr[0] > arr[1]){
    max= arr[0];
    min= arr[1];
}else{
    max= arr[1];
    min= arr[0];
}
for(i=2; i<arr.length ; i++){
    if(arr[i]>max){
        max= arr[i]
    }else if(arr[i]<min){
        min = arr[i]
    }

}

*/

function test() {
    let a = [1,2,3,20,19,17,18,25, 26,27,30];
                   
    let  i=1, j, k;

    
    //keep moving prashant until the sequence is ascending
    while(a[i] > a[i-1] && i<a.length) {
        i++;
    }
    
    //incase prashant reaches end of array, then there is only one valid ascending sequence, hence return true
    if(i == a.length) {
        return true;
    }
    
    i--;//prashanth comes one step back


    //start harshal from next position of prashant for the second sequence which will be descending
    j = i+1;

    //keep moving harshal until the sequence is descending
    while(a[j] < a[j-1] && a[j] > a[i-1] && j<a.length) {
        j++;
    }

    //if harshal found an element lesser than the last element of first sequence, we can return false
    if(a[j] < a[i-1]) {
        return false;
    }

    //if harshal reaches end of array, we can return true
    if(j == a.length) {
        return true;
    }

    //we bring anuj to the scene from harsha+1
    k = j;

    while(a[k] > a[k-1] && a[k] > a[i] && k<a.length) {
        k++;
    }

    //if anuj finds anyone smaller than where prashant is standing, then we cant make
    //a proper ascending order after reversing the middle sequence, hence we return false
    if(a[k] < a[i]) {
        return false;
    }

    //if anuj is able to successfully reach the end, that means we found the valid array, hence return true
    if(k == a.length) {
        return true;
    }}

function toUpperCaseByShirhaan(str) {

    let alpha = {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E',
        f: 'F',
        g: 'G',
        h: 'H',
        i: 'I',
        j: 'J',
        k: 'K',
        l: 'L',
        m: 'M',
        n: 'N',
        o: 'O',
        p: 'P',
        q: 'Q',
        r: 'R',
        s: 'S',
        t: 'T',
        u: 'U',
        v: 'V',
        w: 'W',
        x: 'X',
        y: 'Y',
        z: 'Z'
    }
    
    let arr = str.split("");
    let capArr = arr.map(letter => alpha[letter]);
    let result = capArr.join("");

    return result;

}