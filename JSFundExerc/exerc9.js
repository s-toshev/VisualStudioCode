function oddEvenSum(num){

    let oddSum = 0;
    let evenSum = 0;

    while(num!=0){
        const currentDigit= num%10;
        num = Math.floor(num/10);

        if(currentDigit % 2==0){
            evenSum += currentDigit;
        }else{
            oddSum += currentDigit;
        }
    }

console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(1000435);