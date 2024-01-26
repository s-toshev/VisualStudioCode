function demo(){
const items = ['item1', 'item2', 'item3'];
const newArrCopy = [];
const partialArrCopy = [];

for (let i = 1; i < items.length; i++) {
    partialArrCopy.push(items[i]);
}
items.forEach(item => {newArrCopy.push(item)})

console.log(partialArrCopy);
console.log(newArrCopy);
}

demo()