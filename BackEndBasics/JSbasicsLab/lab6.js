function largest(num1, num2, num3){
    let result = 0;

    if(num1 > num2 && num1 > num3){
        result = num1;
        console.log("The largest number is "+result+".");
    }else if(num2 > num1 && num2 > num3){
        result = num2;
        console.log("The largest number is "+result+".");
    }else if(num3 > num1 && num3 > num2){
        result = num3;
        console.log("The largest number is "+result+".");
    }
}
largest(5, -3, 16)