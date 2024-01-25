function demo(){
    let array = [1,2 ,3, "meso"];


console.log(array);

array[4] = 6;

console.log(array);

let dynamicArray = [];

console.log(dynamicArray);

dynamicArray[0] = 'k';
dynamicArray[1] = 'r';
dynamicArray[2] = 'a';

console.log(dynamicArray);

let myArray = new Array('in', 'the', 'mix');

console.log(myArray);

console.log(myArray[7]);

console.log('------------------------------------');

let array1 = [1,2,3,4,5];

let [a, b, ...newArray] = array1;

console.log(a);
console.log(b);
console.log(newArray);

console.log(newArray[2]);

let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums);
console.log(nums.length);
console.log(nums.pop());
console.log(nums.length);
console.log(nums);

console.log(nums.push(777));

console.log(nums);
console.log(nums.length);

console.log(nums.shift());
console.log(nums);

console.log(nums.unshift(333));
console.log(nums);

console.log(nums.unshift(1, 44));
console.log(nums);

let nums2 = [1,3,4,5,6];
nums2.splice(1, 0, 2);
console.log(nums2);

// when 0 -> insert
// when 1 -> replace
// when no middle param -> remove

let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-`-`-`-'));

let fruits = ['banana', 'orange', 'lemon', 'apple'];
let citrus = fruits.slice(1,3);
//start index is included, 
//end not included for slice
console.log(citrus);

console.log(fruits.includes('orange', 2));
//second param (2) - shows from which index
//it searches in the array.
}


demo();