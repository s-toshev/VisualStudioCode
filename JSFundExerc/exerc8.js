function sub(num1, num2, num3){

        function sum(first, second){
            return first+second;
        }

        function subtract(first, second){
            return first - second;
        }


        const result = subtract(sum(num1, num2), num3);

        console.log(result);
}

sub(23,6,10)