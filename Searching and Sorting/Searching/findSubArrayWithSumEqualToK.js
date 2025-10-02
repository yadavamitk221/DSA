// find the number of subarrays with sum equal to k
// Difficulty: EasyAccuracy: 33.46%Submissions: 298K+Points: 2Average Time: 20m
// Given an array of integers and an integer k, find the number of subarrays with sum equal to k.
// Example:
// Input: arr = [1, -1, 2, -2, 3], k = 3
// Output: 4
// Explanation: The subarrays with sum equal to 3 are [1, -1, 2], [2], [-2, 3], and [3].

// Solution:


// Aditya Verma Approach
function findSubarray(arr) {
    let count = 0;
    let map = new Map();
    let i = -1;
    let sum = 0;

    // initialize with 0 sum (important base case)
    map.set(0, 1);

    while (i < arr.length - 1) {
        i++;
        sum += arr[i];

        if (map.has(sum)) {
            count += map.get(sum);
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return count;
}

// Example
console.log(findSubarray([1, -1, 2, -2, 3])); // Output: 4


// prefixSum Approach
class Solution {
    findSubarray(arr) {
        let count = 0;
        let prefixSum = new Array(arr.length); 
        prefixSum[0] = arr[0]
        for(let i = 1; i < arr.length; i++){
            prefixSum[i] = prefixSum[i - 1] + arr[i];
        }
        
        // Step 2: Use map to store the frequency of the array.
        let m = new Map(); 
        for(let i = 0; i < prefixSum.length; i++){
            if(prefixSum[i] == 0) count++; 
            
            let value = prefixSum[i] - 0;
            if(m.has(value)){
                count += m.get(value)
            }
            
            if(!m.has(prefixSum[i])){
                m.set(prefixSum[i], 0);
            }
            m.set(prefixSum[i], m.get(prefixSum[i]) +1);
        }
        
        return count;
    }
}

