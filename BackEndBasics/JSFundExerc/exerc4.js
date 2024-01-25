function solve(inArray){
 

    inArray.sort((a,b) => a-b)


    const result = [];

    while(inArray.length > 0){
        const firstElemet = inArray.shift();
        const lastElement = inArray.pop();

        result.push(firstElemet);

        if(lastElement != undefined){
                result.push(lastElement);
        }
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));