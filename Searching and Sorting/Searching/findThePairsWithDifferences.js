
class Solution {
    /**
     * @param number[] arr
     * * @param number x
     * @returns boolean
     */
    findPair(arr, x) {
        // code here
      const myMap = new Map();
      
      for(let i = 0; i < arr.length; i++){
          myMap.set(arr[i], i);
      }
      
      for(let i = 0; i < arr.length; i++){
          let valueToFind = Math.abs(x + arr[i]); 
          if(myMap.has(valueToFind) && myMap.get(valueToFind) !== i){
              return true;
          }
      }
      return false;
    }
}
