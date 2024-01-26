import { expect } from 'chai';
import { sum } from '../sumNumbers.js'; 

describe('Sum numbers', () => {
    it('should return 0 if an empty array is given', () => {
        //arrange
            const inputArray = [];
        //act
            const result = sum(inputArray);
        //assert
        expect(result).to.equals(0);
    });

    // Test overloading
    it('should return the sinle element as a sum, if single element array is given', () => {
        //arrange
            const inputArray = [33];
        //act
            const result = sum(inputArray);
        //assert
            expect(result).to.equals(33);
    });

    it('should return the total sum o farr if multi value array is given', () => {
             //arrange
             const inputArray = [3,3,4];
             //act
                 const result = sum(inputArray);
             //assert
                 expect(result).to.equals(10);

    });
});
