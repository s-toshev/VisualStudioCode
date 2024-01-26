function solve(nameArr){
    const result = nameArr.sort();

    for (let index = 1; index <=result.length; index+=1) {
        console.log(`${index}.${result[index-1]}`)        
    }


}

solve(["John", "Bob", "Christina", "Ema"]);