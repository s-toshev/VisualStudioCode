import { expect } from 'chai';
import { isOddOrEven } from './evenOddString.js';


describe('EvenOddStringTestSuite', () => {




    it('should return undefined when input is non-string value', () => {
        //arrange
        const valueNum = 5;
        const valueUndefined = undefined;
        const valueNull = null;
        const valueFloat = 5.5;


        //act
        const resultNum = isOddOrEven(valueNum);
        const resultUndefined = isOddOrEven(valueUndefined);
        const resultNull = isOddOrEven(valueNull);
        const resultFloat = isOddOrEven(valueFloat);

        //assert

        expect(resultNum).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultFloat).to.be.undefined;


    });


    it('should return even result, when string is input and its length is even', () => {
        //arrange
        const evenStringLength = "kravoo";
        //act
        const result = isOddOrEven(evenStringLength);
        //assert
        expect(result).to.equal("even");

    });

    it('should return odd result, when string is input and its length is odd', () => {
        //arrange
        const oddStringLength = "karvo";
        //act
        const result = isOddOrEven(oddStringLength);
        //assert
        expect(result).to.equal("odd");

    });


    it('should return even result, when string is input and its length is 0(zero)', () => {
        //arrange
        const zeroStringLength = "";
        //act
        const result = isOddOrEven(zeroStringLength);
        //assert
        expect(result).to.equal("even");

    });

    
    it('', () => {
        //arrange

        //act

        //assert

    });


});