countTriplets(arr, n, sum) {
    // code here
    let count = 0; 
    arr.sort((a,b) => a - b); 
    
    for(let i = 0; i < arr.length - 2; i++){
        let j = i + 1;
        let k = arr.length - 1;
        
        while(j < k){
            if(arr[i] + arr[j] + arr[k] < sum){
               count += (k - j)
              j++;
        }else{
            k--;
        }
    }
    
    }
    return count;
}


let arr = [1,2,3,4,5,6,7]; 
let n = arr.length; 
sum = 12;