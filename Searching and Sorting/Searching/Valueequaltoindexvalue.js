// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    // Function to find elements in the array that are equal to their index.
    valueEqualToIndex(arr) {
       let ans = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == i + 1){
                ans.push(arr[i]);
            }
        }
        return ans;
    }
}
