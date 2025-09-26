/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {void}
 */
class Solution {
    mergeArrays(a, b) {
        // code here
        let left = a.length - 1; 
        let right = 0; 
        
        while(left >= 0 && right < b.length){
            if(a[left] > b[right] ){
                let temp = a[left]; 
                a[left] = b[right];
                b[right] = temp; 
                left--; 
                right++;
            }else{
                break;
            }
        }
        
        a.sort(); 
        b.sort();
    }
}