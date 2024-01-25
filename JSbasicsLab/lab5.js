function math(num1, num2, text) {
    let result = 0;

    switch (text) {
        case "+":
            result = num1 + num2;
            console.log(result);
            break;
        case "-":
            result = num1 - num2;
            console.log(result);

            break;
        case "*":
            result = num1 * num2;
            console.log(result);

            break;
        case "/":
            result = num1 / num2;
            console.log(result);

            break;
        case "%":
            result = num1 % num2;
            console.log(result);

            break;
        case "**":
            result = num1 ** num2;
            console.log(result);

            break;
    }
}
math(3, 5.5, "*")