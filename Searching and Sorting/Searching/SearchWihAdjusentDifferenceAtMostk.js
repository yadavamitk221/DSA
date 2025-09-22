// User function Template for javascript
class Solution {
    findStepKeyIndex(arr, k, x) {
        // code here
        for(let i = 0; i < arr.length; ){
            if(arr[i] == x){
                return i;
            }else{
                if(x < arr[i]){
                    return -1;
                }else{
                    i += Math.ceil((x-arr[i])/k)
                }
            }
        }
        return -1;
    }
}

let arr = [20, 40, 50] 
let k = 20 
let x = 70
let solution = new Solution();
console.log(solution.findStepKeyIndex(arr, k, x));
