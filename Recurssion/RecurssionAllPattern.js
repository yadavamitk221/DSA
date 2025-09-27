function printS(ind, ds, s, sum, arr, n) {
    if (ind === n) {
        if (s === sum) {
            console.log(ds.join(" "));
        }
        return;
    }

    // take / pick the element
    ds.push(arr[ind]);
    s += arr[ind];
    printS(ind + 1, ds, s, sum, arr, n);

    // backtrack
    s -= arr[ind];
    ds.pop();

    // not pick the element
    printS(ind + 1, ds, s, sum, arr, n);
}

function main() {
    const arr = [1, 2, 1];
    const n = arr.length;
    const sum = 2;
    const ds = [];

    printS(0, ds, 0, sum, arr, n);
}

main();
