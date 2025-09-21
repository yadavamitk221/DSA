/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    getMinDiff(arr, k) {
        // code here
        if(arr.length == 1) return 0; 
        let n = arr.length; 
        
        arr.sort((a, b) => a - b);
        
       let diff = arr[n - 1] - arr[0];

        
        let max, min; 
        
        for(let i = 1; i < n; i++){
            if(arr[i] - k < 0) continue; 
            
            max = Math.max(arr[i - 1] + k, arr[n-1] - k); 
            min = Math.min(arr[0] + k, arr[i] - k);
            
            diff = Math.min(max - min, diff);
        }
        
        return diff;
    }
}