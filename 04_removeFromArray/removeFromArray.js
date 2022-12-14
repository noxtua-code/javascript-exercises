const removeFromArray = function(originalArray, ...elements) {
    let newArray = [];

    for (let element of elements) {
        for (let i = 0; i < originalArray.length; i++)
        if (originalArray[i] === element) {
            originalArray.splice(i, 1);
            i--;
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
