
const fnArray = () => {
    let resultArr = [];
    return function (args) {
        if (resultArr.indexOf(args) === -1) {
            resultArr.push(args);
            return resultArr;
        }
        return resultArr;
    }
}

const callCache = fnArray();

console.log('Call 1 : ', callCache(1));
console.log('Call 2 : ', callCache(2));
console.log('Call 3 : ', callCache(2));
console.log('Call 4 : ', callCache(1));
console.log('Call 5 : ', callCache(5));
console.log('Call 5 : ', callCache(2));
console.log('Call 5 : ', callCache(5));
console.log('Call 5 : ', callCache(6));
console.log('Call 5 : ', callCache(8));
console.log('Call 5 : ', callCache(2));