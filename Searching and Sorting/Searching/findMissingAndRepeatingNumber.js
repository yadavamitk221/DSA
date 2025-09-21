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


// Secing approach. 

/**
 * @param {number[]} arr
 * @returns {number[]} [repeating, missing]
 */
class Solution {
    findTwoElement(arr) {
      let n = arr.length;
  
      let sumArr = 0;
      let sumSqArr = 0;
  
      for (let i = 0; i < n; i++) {
        sumArr += arr[i];
        sumSqArr += arr[i] * arr[i];
      }
  
      const sumN = (n * (n + 1)) / 2;
      const sumSqN = (n * (n + 1) * (2 * n + 1)) / 6;
  
      const S = sumArr - sumN;            // x - y
      const Sq = sumSqArr - sumSqN;       // x² - y²
  
      const xPlusY = Sq / S;
      const x = (S + xPlusY) / 2;         // repeating
      const y = x - S;                    // missing
  
      return [x, y];
    }
  }
  