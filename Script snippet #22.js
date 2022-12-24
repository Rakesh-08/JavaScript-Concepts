
//TWO SUM PROBLEM IN O(N) TIME COMPLEXITY BUT GIVEN ARRAY IS ALREADY SORTED


function TwoSum2(nums ,target){
i=0;
j= nums.length-1;
let results=[]
                   //for 3 sum you need to add one  more loop here to ensure that after sorting when any no. comes more than one time you need to consider it only one time  
    while(i<j){
       
        if (nums[i]+nums[j]==target){
            results.push([i+1,j+1])

            let temp= nums[i]
    
       while (nums[i]==temp){
            i++;
            
        }  j--  
            
        }else if(nums[i]+nums[j]>target){
            j--;
            
        }else {
            i++;
        }
        
        
        }
    return results
    }


//  FIND ORIGINAL ARRAY FROM THE ARAAY CONVERTED BY DOUBLING SOME ELEMENTS  FROM THE ORIGINAL ARRAY



var findOriginalArray = function(changed) {
    changed.sort((a,b)=>a-b);
    
    let res = [];
    
    let map = {};
    
    for(let num of changed) {
        map[num] = (map[num] || 0) + 1;
    }
    
    for(let num of changed) {
        
        if(num == 0 && map[0]%2!=0) {
            return [];
        }
        
        
        if(map[num]>0 && map[num*2] > 0) {
            res.push(num);
            map[num]--;
            map[num*2]--;
        } else if(map[num]>0 && !map[num*2]) {
            return [];
        }
    }
    return res;
};


    

