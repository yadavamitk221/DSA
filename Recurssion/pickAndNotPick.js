function printF(ind, ds, arr, n) {
    if (ind === n) {
        if (ds.length > 0) {
            console.log(ds.join(" "));
        } else {
            console.log("{}"); // empty subset
        }
        return;
    }

    // Not pick (do not include arr[ind])
    printF(ind + 1, ds, arr, n);

    // Pick (include arr[ind])
    ds.push(arr[ind]);
    printF(ind + 1, ds, arr, n);
    ds.pop();
}

// main
const arr = [3, 1, 2];
const n = arr.length;
printF(0, [], arr, n);
