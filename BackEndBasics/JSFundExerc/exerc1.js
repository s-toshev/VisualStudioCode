function solve(inputArr, rotations){
for (let index = 0; index < rotations; index++) {

    const firstElement = inputArr.shift();
    inputArr.push(firstElement);
    
}

console.log(inputArr.join(" "));

}

solve([51, 47, 32, 61, 21], 2);