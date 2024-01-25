function printSum(num1, num2){
    let sum = 0;
    let message = '';
    for (let i = num1; i <= num2; i++) {
        message = message + (`${i} `);
        sum = sum + i;
    }
    console.log(message);
    console.log("Sum: "+sum);
}


printSum(5,10)