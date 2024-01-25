function evenOdd(inputArray){
let evenSum = 0;
let oddSum = 0;

let evenOddDiff = 0;

for (const element of inputArray) {
   if(element % 2 == 0){
    evenSum = evenSum+element;
   }else if(element % 2 != 0){
    oddSum = oddSum + element;
   }
}

evenOddDiff = evenSum-oddSum;

console.log(evenOddDiff);

}

evenOdd([3,5,7,9]);