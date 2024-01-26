import { expect } from 'chai';
import { isSymmetric } from '../symmetry.js';

describe('symmetry', () => {

    it('if given empty array, should return true', () => {
        //Arrange
        const inputArray = [];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.true;
    })

    it('should return false if a non-symmetric array is given', () => {
        //Arrange
        const nonSymmArr = [3, 1, 3, 4];

        //Act
        const result = isSymmetric(nonSymmArr);

        //Assert
        expect(result).to.be.false;

    })

    it('should return true if a symmetric array is given', () => {
        //Arrange
        const symmArr = [3,2,1,2,3];

        //Act
        const result = isSymmetric(symmArr);

        //Assert
        expect(result).to.be.true;

    })

    it('should return false if a non-array value is given', () => {
        //Arrange

        //Act
        const nanResult = isSymmetric(NaN);
        const undefinedResult = isSymmetric(undefined);
        const numResult = isSymmetric(123);
        const nullResult = isSymmetric(null);
        const textResult = isSymmetric("23rfd");


        //Assert
        expect(nanResult).to.be.false;
        expect(undefinedResult).to.be.false;
        expect(numResult).to.be.false;
        expect(nullResult).to.be.false;
        expect(textResult).to.be.false;

    })

    it('should return false for symmetric lookalike values', () => {
        //Arrange
        const mixedArr = ["1", "2", "3", 2, 1];

        //Act
        const result = isSymmetric(mixedArr);

        //Assert
        expect(result).to.be.false;
    })

});