function fnCalculate() {
    let argument = 0;

    function sum(args) {
        argument = argument + args;
        return argument;
    }

    function sub(args) {
        argument = argument - args;
        return argument;
    }

    function mult(args) {
        argument = argument * args;
        return argument;
    }

    return {
        sum,
        sub,
        mult
    }
}

const fun = fnCalculate();

console.log('Sum : ', fun.sum(4)) //4
console.log('Multiply : ', fun.mult(2)) //2
console.log('Subtract : ', fun.sub(5)) //-1