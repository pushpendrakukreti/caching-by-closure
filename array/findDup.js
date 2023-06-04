let arr = [2, 3, 7, 2, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3]
let obj = {}

for (let key = 0; key < arr.length; key++) {
    if (obj.hasOwnProperty(arr[key])) {
        obj[arr[key]] = obj[arr[key]] + 1;
    } else {
        obj[arr[key]] = 1;
    }
}

console.log(obj);