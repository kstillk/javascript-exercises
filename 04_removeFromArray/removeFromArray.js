const removeFromArray = function() {
    const arr = Array.from(arguments);
    const arrSub = Array.from(arguments[0])
    for (i = 1; i <= arr.length; i++) {
        for (isub = 0; isub <= arrSub.length; isub++) {
            if (arr[i] === arrSub[isub]) {
                arrSub.splice(isub, 1);
            }
        }
    }
    return arrSub;
};

// Do not edit below this line
module.exports = removeFromArray;
