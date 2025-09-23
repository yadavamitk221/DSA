/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(arr, target) {
    let mySet = new Set(); 
    let result = [];
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length - 3; i++){
      if(i > 0 && arr[i] == arr[i -1]) continue; 
        for(let j = i + 1; j < arr.length - 2; j++){
            if(j > i + 1 && arr[j] == arr[j - 1]) continue; 
            let k = j + 1;
            let l = arr.length - 1; 

            while(k < l){
                let sum = arr[i] + arr[j] + arr[k] + arr[l];
                if(sum == target){
                    result.push([arr[i], arr[j], arr[k], arr[l]]); 
                    k++;
                    while(k < l && arr[k] == arr[k - 1]) k++;
                    l--;
                    while(l > k && arr[l] == arr[l + 1]) l--;
                }else if(sum < target){
                    k++;
                    while(k < l && arr[k] == arr[k - 1]) k++;
                }else if(sum > target){
                    l--;
                    while(l > k && arr[l] == arr[l + 1]) l--;
                }

            }
        }
    }
    return result;
};