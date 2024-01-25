function solve(inArr, num){
    const result = [];

    for (let index = 0; index < inArr.length; index+=num) {
        result.push(inArr[index]);
    }

    return result;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);