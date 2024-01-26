function sumDigits(num1){
    let sum = 0;
    let currentDigit = 0;


while(num1 != 0){
currentDigit = num1 % 10;
num1 = Math.floor(num1/10);
sum = sum + currentDigit;
}

console.log(sum)
}

sumDigits(543)