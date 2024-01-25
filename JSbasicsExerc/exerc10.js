function sameNum(num1) {
    let sum = 0;
    let currentDigit = 0;

    let lastDigit = num1 % 10;
    let isEqual;

    num1 = Math.floor(num1 / 10);
    
    while (num1 != 0) {
        currentDigit = num1 % 10;
        if (lastDigit == currentDigit) {
            isEqual = true;
        }
        else {
            isEqual = false;
        }
        num1 = Math.floor(num1 / 10);
        sum = sum + currentDigit;
    }
    sum = sum + lastDigit;

    console.log(isEqual);
    console.log(sum);
}

sameNum(1234);