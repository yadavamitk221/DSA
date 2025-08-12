function firstAndLastOccurance(arr, x){
    let f = -1, l = -1; 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
            if(f == -1){
                f = i
            }
            l = i
        }
    }

    return [f, l];
}