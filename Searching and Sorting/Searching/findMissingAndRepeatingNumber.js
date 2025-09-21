/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findTwoElement(arr) {
        // code here
        let missingNumber = -1; 
        let repetatedNumber = -1;
        let frequencyArray = new Array(arr.length + 1).fill(0); 
        
        for(let i = 0; i < arr.length; i++){
            frequencyArray[arr[i]] += 1;
        }
        
        for(let i = 1; i <frequencyArray.length; i++){
            if(frequencyArray[i] == 0){
                missingNumber = i;
            }
            if(frequencyArray[i] == 2){
                repetatedNumber = i;
            }
        }
        return [repetatedNumber, missingNumber];
    }
    
}