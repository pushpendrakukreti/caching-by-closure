
const fnMain = () => {
    let result = 0;
    return function (args) {
        result += args;
        return result;
    }
}

const fnCache = fnMain();

console.log(fnCache(3));
console.log(fnCache(4));
console.log(fnCache(5));