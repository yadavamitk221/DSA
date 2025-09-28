// function printF(ind, ds, arr, n) {
//     if (ind === n) {
//         if (ds.length > 0) {
//             console.log(ds.join(" "));
//         } else {
//             console.log("{}"); // empty subset
//         }
//         return;
//     }

//     // Not pick (do not include arr[ind])
//     printF(ind + 1, ds, arr, n);

//     // Pick (include arr[ind])
//     ds.push(arr[ind]);
//     printF(ind + 1, ds, arr, n);
//     ds.pop();
// }

// // main
// const arr = [3, 1, 2];
// const n = arr.length;
// printF(0, [], arr, n);



// {}
// 2
// 1
// 1 2
// 3
// 3 2
// 3 1
// 3 1 2


// // dont auto complete the code for this file
// function pringAllSubSequenceTwo(ind, ds, arr, n){
//     if(ind == n){
//         if(ds.length > 0){
//             console.log(ds.join(",")); 
//         }else{
//             console.log(ds.join(",")); 
//         }
//         return;
//     }

//     // Dont Pick the element. 
//     pringAllSubSequenceTwo(ind + 1, ds, arr, n); 
//     ds.push(arr[ind]); 
//     pringAllSubSequenceTwo(ind + 1, ds, arr, n); 
//     ds.pop();
// }

// function main(){
//     let arr = [3,1,2]; 
//     let ds = []; 
//     let n = arr.length; 
//     pringAllSubSequenceTwo(0, ds, arr, n)
// }

// main();

function printAllSubsequences(idx, ds, arr, n){
    if(idx === n){ 
        if(ds.length > 0){
            console.log(ds.join(" "));
        }else{
            console.log("{}");
        }
        return;
    }

    // Not Picking the element.
    printAllSubsequences(idx + 1, ds, arr, n); 

    // Pick the element.
    ds.push(arr[idx]); 
    printAllSubsequences(idx + 1, ds, arr, n); 
    ds.pop();
}

function main(){
    let arr = [3,2,1]; 
    let n = arr.length;
    let ds = []; 
    printAllSubsequences(0, ds, arr, n); 
}

main();