const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR'
    } else if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    } 
    
    
    if (num1 === num2) {
        return num1;
    } else {
        return num1 + sumAll(num1 + 1, num2);
    }
    
};

// Do not edit below this line
module.exports = sumAll;

